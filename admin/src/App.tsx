import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import NewUser from './pages/newUser/NewUser';
import Movie from './pages/movie/Movie';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';
import { useContext } from 'react';
import { AuthContext } from './context/authContext/AuthContext';
import MovieList from './pages/movieList/MovieList';

const App = () => {
  const { user } = useContext<any>(AuthContext);
  return (
    <Router>
      <Switch>
        {!user && <Login />}
        <Route path='/login'>
          {user ? <Redirect to='/home' /> : <Login />}
        </Route>
        {user && (
          <>
            <Topbar />
            <div className='container'>
              <Sidebar />
              <Route path='/home' exact>
                <Home />
              </Route>
              <Route path='/users'>
                <UserList />
              </Route>
              <Route path='/user/:userId'>
                <User />
              </Route>
              <Route path='/new-user'>
                <NewUser />
              </Route>
              <Route path='/movies'>
                <MovieList />
              </Route>
              <Route path='/movie/:movieId'>
                <Movie />
              </Route>
              <Route path='/new-product'>
                <NewProduct />
              </Route>
              <Route path='*'>
                <Redirect to='/home' />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
