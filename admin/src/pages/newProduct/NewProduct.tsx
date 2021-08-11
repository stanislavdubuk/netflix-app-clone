import './NewProduct.css';
import { useState } from 'react';
import storage from '../../firebase';
import { createMovie } from '../../context/movieContext/apiCalls';
import { useContext } from 'react';
import { MovieContext } from '../../context/movieContext/MovieContext';

const NewProduct: React.FC = (): JSX.Element => {
  const [movie, setMovie] = useState<{}>(null!);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const { dispatch }: any = useContext(MovieContext);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const upload = (items: any) => {
    items.forEach((item: any) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is' + progress + '% done');
        },
        (err) => {
          console.log(err);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url: any) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e: any) => {
    e.preventDefault();
    upload([
      { file: img, label: 'img' },
      { file: imgTitle, label: 'imgTitle' },
      { file: imgSm, label: 'imgSm' },
      { file: trailer, label: 'trailer' },
      { file: video, label: 'video' },
    ]);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createMovie(movie, dispatch);
  };

  return (
    <div className='newProduct'>
      <div className='newProduct'>
        <h1 className='addProductTitle'>New Movie</h1>
        <form className='addProductForm'>
          <div className='addProductItem'>
            <label>Image</label>
            <input
              type='file'
              id='img'
              name='img'
              onChange={(e: any) => setImg(e.target.files[0])}
            />
          </div>
          <div className='addProductItem'>
            <label>Title Image</label>
            <input
              type='file'
              id='imgTitle'
              name='imgTitle'
              onChange={(e: any) => setImgTitle(e.target.files[0])}
            />
          </div>
          <div className='addProductItem'>
            <label>Thumbnail Image</label>
            <input
              type='file'
              id='imgSm'
              name='imgSm'
              onChange={(e: any) => setImgSm(e.target.files[0])}
            />
          </div>
          <div className='addProductItem'>
            <label>Title</label>
            <input
              type='text'
              placeholder='title'
              name='title'
              onChange={handleChange}
            />
          </div>
          <div className='addProductItem'>
            <label>Description</label>
            <input
              type='text'
              placeholder='description'
              name='desc'
              onChange={handleChange}
            />
          </div>
          <div className='addProductItem'>
            <label>Year</label>
            <input
              type='text'
              placeholder='year'
              name='year'
              onChange={handleChange}
            />
          </div>
          <div className='addProductItem'>
            <label>Genre</label>
            <input
              type='text'
              placeholder='genre'
              name='genre'
              onChange={handleChange}
            />
          </div>
          <div className='addProductItem'>
            <label>Duration</label>
            <input
              type='text'
              placeholder='duration'
              name='duration'
              onChange={handleChange}
            />
          </div>
          <div className='addProductItem'>
            <label>Limit</label>
            <input
              type='text'
              placeholder='limit'
              name='limit'
              onChange={handleChange}
            />
          </div>
          <div className='addProductItem'>
            <label>Is Series?</label>
            <select name='isSeries' id='isSeries' onChange={handleChange}>
              <option value='false'>No</option>
              <option value='true'>Yes</option>
            </select>
          </div>
          <div className='addProductItem'>
            <label>Trailer</label>
            <input
              type='file'
              name='trailer'
              onChange={(e: any) => setTrailer(e.target.files[0])}
            />
          </div>
          <div className='addProductItem'>
            <label>Video</label>
            <input
              type='file'
              name='video'
              onChange={(e: any) => setVideo(e.target.files[0])}
            />
          </div>{' '}
          {uploaded === 5 ? (
            <button className='addProductButton' onClick={handleSubmit}>
              Create
            </button>
          ) : (
            <button className='addProductButton' onClick={handleUpload}>
              Upload
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
