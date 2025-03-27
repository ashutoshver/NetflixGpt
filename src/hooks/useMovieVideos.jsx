import React, {useEffect} from 'react'
import { API_OPTIONS } from '../utils/constant/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';

const UseMovieVideos = (movieId) => {

    const dispatch = useDispatch();

  const getMovieVedios = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const videos = await response.json();
    console.log(videos);
    
    const filterTrailers = videos?.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailers.length
      ? filterTrailers[0]
      : videos?.results[0];
    if(trailer?.key){
      dispatch(addTrailerVideo(trailer?.key))
    }
  };

  useEffect(() => {
    getMovieVedios();
  }, []);
}

export default UseMovieVideos