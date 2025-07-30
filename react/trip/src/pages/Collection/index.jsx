import useImagesStore from '@/store/useImagesStore'
import {
    useEffect,
}from 'react'

import Waterfall from '@/components/Waterfall'

const Collection = () => {
    const { isLoading , images , fetchMore } = useImagesStore();
    useEffect(() => {
        fetchMore();
    }, [])
    return (
        <>
            <Waterfall images={images} fetchMore={fetchMore} loading={isLoading} />
        </> 
    )
  }
  
  export default Collection