import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/signIn';
import MovieList from './pages/movieList';
import CreateNewMoviePage from './pages/createNewMoviePage';

import './App.css';

import Shape from './images/shape.svg';

export const ShapeImage = styled.img`
  ${tw`w-[100%] h-[111px] object-cover object-top`}
`;

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/movie-list" element={<MovieList EmptyMovieList={false} />} />
        <Route path="/create-movie" element={<CreateNewMoviePage />} />
      </Routes>
      <ShapeImage src={Shape}/>
    </>
  );
}

export default App;
