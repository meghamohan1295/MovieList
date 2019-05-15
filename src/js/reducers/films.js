const initialState = {
    movieList: [],
    input:''
}
export default function (state = initialState, action) {
    switch (action.type) {
        case "UPDATE_MOVIE_LIST":
            return Object.assign({}, state, {
                movieList: action.payload
            });
        case "UPDATE_INPUT_DATA":
            return Object.assign({}, state, {
                input: action.payload
            } )
        default:
            return state;
    }
}
