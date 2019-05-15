export const  updateMovieList = (movie) => {
    return {
      type: "UPDATE_MOVIE_LIST",
      payload: movie
    }
}

export const  updateInputData = (input) => {
    return {
      type: "UPDATE_INPUT_DATA",
      payload: input
    }
}