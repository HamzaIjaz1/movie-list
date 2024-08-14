import React from 'react'
import Header from '../components/header/header'
import MovieForm from '../components/movieForm/movieForm'

function CreateNewMoviePage() {
    return (
        <div>
            <Header title="Create a new movie" />
            <MovieForm/>
        </div>
    )
}

export default CreateNewMoviePage