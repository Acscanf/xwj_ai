import styles from './imagecard.module.css'

const ImageCard = (props) => {
    const { url , height } = props;
    return (
        <div className={styles.card} style={{height}}>
            <img src={url} className={styles.img} />
        </div>
    )
}

export default ImageCard