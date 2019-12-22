import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const VideoThumbnail = ({ title, preview, badge, badgeBG, message, muted, width, classname }) => {
  const onHover = (e) => {
    e.target.play()
    e.target.nextElementSibling.style.opacity = 0.4
  }
  const offHover = (e) => {
    e.target.pause()
    e.target.nextElementSibling.style.opacity = 1
  }
  return (
    <div style={{width: width}} className={`${styles.videoThumbnail} ${classname}`}>
      <div style={{width: width}} className={styles.video}>
        <video onMouseEnter={(e) => onHover(e)} onMouseOut={(e) => offHover(e)} className={styles.preview} width={width} src={preview} loop muted={muted}/>
        <div className={styles.badge} style={{background: badgeBG}}>{badge}</div>
      </div>
      <h4 className={styles.title}>{title}</h4>
      <span className={styles.views}>{message}</span>
    </div>
  )
}

VideoThumbnail.propTypes = {
  preview: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  badge: PropTypes.string,
  badgeBG: PropTypes.string,
  muted: PropTypes.bool,
  width: PropTypes.number,
  classname: PropTypes.string
}

VideoThumbnail.defaultProps = {
  preview: `https://media2.giphy.com/media/JrY9JfnL4OnXxnCi4F/giphy480p.mp4`,
  title: `The Invisible Man - Official Trailer [HD]`,
  message: `3.2k Watching Now`,
  badge: `Live`,
  muted: false,
  width: 350,
  classname: ''
}

export default VideoThumbnail
