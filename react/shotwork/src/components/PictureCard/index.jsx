import { 
    useState 
} from 'react'

import './style.css'

const PictureCard = (props) => {
    const {
        word,
        audio,
        uploadImg,
    } = props;

    const [imgPreview , setImgPreview] = useState('https://res.bearbobo.com/resource/upload/W44yyxvl/upload-ih56twxirei.png');

    const uploadImgData = async (e) => {
        const file = (e.target).files?.[0];
        if (!file) { return; }
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const data = reader.result;
                setImgPreview(data);
                uploadImg(data);
                resolve(data);
            }
            reader.onerror = (error) => { reject(error); };
        })
    }

    return (
        <div className='card'>
            <input 
                type="file" 
                id='selectImage'
                accept='.jpg,.png,.jpeg,.gif'
                onChange={uploadImgData}
            />
            <label htmlFor='selectImage' className='upload'>
                <img src={imgPreview} alt="preview" />
            </label>
            <div className='word'>{word}</div>
        </div>
    )
}

export default PictureCard