import './NewList.css';
import { createMovie, getMovies } from '../../context/movieContext/apiCalls';
import { useState, useContext, useEffect } from 'react';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { ListContext } from '../../context/listContext/ListContext';
import { createList } from '../../context/listContext/apiCalls';
import { useHistory } from 'react-router-dom';

const NewList: React.FC = (): JSX.Element => {
  const [list, setList] = useState<{}>(null!);
  const history = useHistory();

  const { dispatch }: any = useContext(ListContext);
  const { movies, dispatch: dispatchMovie }: any = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e: any) => {
    let value = Array.from(
      e.target.selectedOptions,
      (option: any) => option.value
    );
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createList(list, dispatch);
    history.push('/lists');
  };

  return (
    <div className='newProduct'>
      <div className='newProduct'>
        <h1 className='addProductTitle'>New List</h1>
        <form className='addProductForm'>
          <div className='formLeft'>
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
              <label>Genre</label>
              <input
                type='text'
                placeholder='genre'
                name='genre'
                onChange={handleChange}
              />
            </div>
            <div className='addProductItem'>
              <label>Type</label>
              <select name='type' onChange={handleChange}>
                <option>Type</option>
                <option value='movie'>Movie</option>
                <option value='series'>Series</option>
              </select>
            </div>
          </div>
          <div className='formRight'>
            <div className='addProductItem'>
              <label>Content</label>
              <select
                multiple
                name='content'
                onChange={handleSelect}
                style={{ height: '283px' }}
              >
                {movies.map((movie: any) => (
                  <option key={movie._id} value={movie._id}>
                    {movie.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button className='addProductButton' onClick={handleSubmit}>
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewList;
