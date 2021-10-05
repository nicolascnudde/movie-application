import styles from './Video.module.scss'

const Video = ({ id, title }) => {
  return (
    <div className={styles.video}>
      <iframe
        src={'https://www.youtube.com/embed/' + id + `?frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen`}
        loading="lazy"
        title={title}>
      </iframe>
    </div>
  )
}

export default Video;
