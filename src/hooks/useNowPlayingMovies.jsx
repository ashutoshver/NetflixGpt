import React, {useEffect} from 'react';
import { useDispatch } from "react-redux";
import { API_OPTIONS } from '../utils/constant/Constant';
import { addNowPlayingMovies } from '../utils/movieSlice';

const UseNowPlayingMovies = () => {

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing",
          API_OPTIONS
        );
        const data = await response.json();
        dispatch(addNowPlayingMovies(data?.results))
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getNowPlayingMovies();
    }, []);

  return (
    <div>U</div>
  )
}

export default UseNowPlayingMovies;