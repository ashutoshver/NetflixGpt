import React, {useEffect} from 'react';
import { useDispatch } from "react-redux";
import { API_OPTIONS } from '../utils/constant/Constant';
import { addPopularMovies } from '../utils/movieSlice';

const UsePopularMovies = () => {

    const dispatch = useDispatch();

    const getPopularMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?&page=1',
          API_OPTIONS
        );
        const data = await response.json();
        dispatch(addPopularMovies(data?.results))
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
        getPopularMovies();
    }, []);
}

export default UsePopularMovies;