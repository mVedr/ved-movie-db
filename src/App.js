
import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movie/movie';
function App() {
  return (
    <div className="App">
    
      <Router forceRefresh={true}>
      <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='movie/:id' element={<Movie/>}></Route>
          <Route path='movies/:type' element={<MovieList/>}></Route>
          <Route path='/*' ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
