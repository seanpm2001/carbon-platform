/*
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Pause, Play } from '@carbon/react/icons'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'

import styles from './video.module.scss'

/**
 * The `<Video>` component can render a Vimeo player or a html video player.
 */
const Video = ({ autoPlay, vimeoId, title, src, poster, muted, ...props }) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const videoRef = useRef(null)
  const iframeRef = useRef(null)
  const buttonClassName = clsx(styles['video-button'], {
    [styles['video--is-playing']]: isPlaying
  })

  // React doesn't handle the muted attribute well
  // https://github.com/facebook/react/issues/10389#issuecomment-605689475
  useEffect(() => {
    if (muted && videoRef.current) {
      videoRef.current.setAttribute('muted', '')
    }
  }, [muted])

  if (vimeoId) {
    return (
      <div className={styles['video-container']}>
        <div className={clsx(styles.video, styles.vimeo)}>
          <div className="embedVideo-container">
            <iframe
              allow="autoplay"
              title={title}
              src={`https://player.vimeo.com/video/${vimeoId}`}
              ref={iframeRef}
              width="640"
              height="360"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    )
  }

  function onClick(e) {
    e.stopPropagation()
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
      return
    }

    return videoRef.current
      .play()
      .then(() => {
        setIsPlaying(true)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function onEnded() {
    setIsPlaying(false)
  }

  function onKeyDown(event) {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault()
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
        return
      }
      return videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  return (
    <div className={styles['video-container']}>
      <div
        className={buttonClassName}
        role="button"
        onClick={onClick}
        onKeyDown={onKeyDown}
        tabIndex="0"
      >
        {isPlaying ? <Pause size={32} /> : <Play size={32} />}
        <span className="cds--assistive-text">{isPlaying ? 'Pause' : 'Play'}</span>
      </div>
      <video
        muted // TODO: Do we want to allow a captions <track> to be provided? This is the only way
        // to avoid having to mark the video as muted for a11y compliance.
        autoPlay={autoPlay}
        className={styles.video}
        type="video/mp4"
        ref={videoRef}
        onEnded={onEnded}
        src={src}
        poster={typeof poster === 'object' ? poster.src : poster}
        {...props}
      />
    </div>
  )
}

Video.propTypes = {
  /**
   * Set video autoplay.
   */
  autoPlay: PropTypes.bool,
  /**
   * Provide optional caption track.
   * `<track kind="captions" default src="/videos/hero-video.vtt" srcLang="en" />`
   */
  children: PropTypes.element,
  /**
   * Mute video by default.
   */
  muted: PropTypes.bool,
  /**
   * Set poster image for local video.
   */
  poster: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * set video source for local video.
   */
  src: PropTypes.string,
  /**
   * Set video title.
   */
  title: PropTypes.string,
  videoSourceValidator: (props) => {
    if (!props.vimeoId && !props.src) {
      return new Error("The Video component requires either a 'vimeoId' Or a 'src' prop")
    }
    if (props.vimeoId && props.src) {
      return new Error(
        "You can only specify one source for the Video component. Use either the 'vimeoId' OR the 'src' prop."
      )
    }
    if (props.vimeoId && props.poster) {
      return new Error(
        "You can't specify a poster for vimeo videos. You can control the poster image from the Vimeo control panel"
      )
    }
    if (props.vimeoId && props.children) {
      return new Error(
        "You can't specify children/tracks for vimeo videos. You can control the captions from the Vimeo control panel"
      )
    }
  },
  /**
   * Set Vimeo ID for Vimeo video.
   */
  vimeoId: PropTypes.string
}

Video.defaultProps = {
  autoPlay: false
}

export default Video
