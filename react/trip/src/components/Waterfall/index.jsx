import styles from './waterfall.module.css'
import {
    useEffect,
    useRef,
} from 'react'
import ImageCard from '@/components/ImageCard'

const Waterfall = (props) => {
    const loader = useRef(null);
    const { images, fetchMore, loading } = props;
    useEffect(() => {
        // ref 出现在窗口 intersectionObserver
        // 观察者模式
        const observer = new IntersectionObserver(([entry]) => {
            // console.log(entry)
            if(entry.isIntersecting) {
                fetchMore();
            }
        }) 
        if(loader.current) observer.observe(loader.current);
        return () => observer.disconnect();
    }, [])
    return (
        <div className={styles.wrapper}>
            <div className={styles.column}>
                {
                    images.filter((_, index) => index % 2 === 0).map(img => (
                        <ImageCard key={img.id} {...img}/>
                    ))
                }
            </div>
            <div className={styles.column}>
                {
                    images.filter((_, index) => index % 2 !== 0).map(img => (
                        <ImageCard key={img.id} {...img}/>
                    ))
                }
            </div>
            <div ref={loader} className={styles.loader}>加载中...</div>
        </div>
    )
}

export default Waterfall