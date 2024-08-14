import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Header from '../components/header/header'
import MovieListData from '../components/movieListComponents/movieListData';
import MovieCard from '../components/movieListComponents/movieCard';
import Pagination from '../components/pagination/pagination';
import HeadingComponent from '../components/headingComponent/headingComponent';
import ThemeButton, {BUTTON_TYPE} from '../components/themeButton/themeButton';

const MovieListWrapper = styled.div`
  ${tw`grid grid-cols-4 gap-[24px]`}
`;

export const EmptyList = styled.div`
  ${tw`h-[calc(100vh - 111px)] pt-[100px] overflow-y-auto flex flex-col gap-[40px] items-center justify-center`};
  h1{
    ${tw`text-center mb-[40px]`}
  }
`;
export const AddNewMovie = styled.div`
  ${tw`flex`};
  button{
    ${tw`px-[28px]`}
  }
`;

function MovieList({EmptyMovieList}) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentMovies = MovieListData.slice(indexOfFirstItem, indexOfLastItem);
    return (
        <>
            {EmptyMovieList ? (
                <EmptyList>
                    <HeadingComponent size='h2'>
                        Your movie list is empty
                    </HeadingComponent>
                    <AddNewMovie>
                        <ThemeButton buttonType={BUTTON_TYPE.primary}>
                        Add a new movie
                        </ThemeButton>
                    </AddNewMovie>
                </EmptyList>
            ): (
                <>
                    <Header title='My movies' plusIcon={true} logOut={true} />
                    <div>
                        <div className='container'>
                            <MovieListWrapper>
                                {currentMovies.map((movie) => (
                                    <MovieCard key={movie.id} movieList={movie} />
                                ))}
                            </MovieListWrapper>
                            <Pagination
                                currentPage={currentPage}
                                totalItems={MovieListData.length}
                                itemsPerPage={itemsPerPage}
                                onPageChange={setCurrentPage}
                            />
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default MovieList