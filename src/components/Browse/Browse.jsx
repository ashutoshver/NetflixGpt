import React, { useEffect } from "react";
import Header from "../Header/Header";
import UseNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import UsePopularMovies from "../../hooks/usePopularMovies";

const Browse = () => {

   UseNowPlayingMovies();
   UsePopularMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
