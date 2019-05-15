import React from 'react';
import axios from 'axios';
import { updateMovieList, updateInputData } from '../actions/index';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';

const PAGE1 = {
    "page": {
        "title": "Romantic Comedy",
        "total-content-items": "54",
        "page-num-requested": "1",
        "page-size-requested": "20",
        "page-size-returned": "20",
        "content-items": {
            "content": [
                {
                    "name": "The Birds",
                    "poster-image": "poster1.jpg"
                },
                {
                    "name": "Rear Window",
                    "poster-image": "poster2.jpg"
                },
                {
                    "name": "Family Pot",
                    "poster-image": "poster3.jpg"
                },
                {
                    "name": "Family Pot",
                    "poster-image": "poster2.jpg"
                },
                {
                    "name": "Rear Window",
                    "poster-image": "poster1.jpg"
                },
                {
                    "name": "The Birds",
                    "poster-image": "poster3.jpg"
                },
                {
                    "name": "Rear Window",
                    "poster-image": "poster3.jpg"
                },
                {
                    "name": "The Birds",
                    "poster-image": "poster2.jpg"
                },
                {
                    "name": "Family Pot",
                    "poster-image": "poster1.jpg"
                },
                {
                    "name": "The Birds",
                    "poster-image": "poster1.jpg"
                },
                {
                    "name": "The Birds",
                    "poster-image": "poster1.jpg"
                },
                {
                    "name": "Rear Window",
                    "poster-image": "poster2.jpg"
                },
                {
                    "name": "Family Pot",
                    "poster-image": "poster3.jpg"
                },
                {
                    "name": "Family Pot",
                    "poster-image": "poster2.jpg"
                },
                {
                    "name": "Rear Window",
                    "poster-image": "poster1.jpg"
                },
                {
                    "name": "The Birds",
                    "poster-image": "poster3.jpg"
                },
                {
                    "name": "Rear Window",
                    "poster-image": "poster3.jpg"
                },
                {
                    "name": "The Birds",
                    "poster-image": "poster2.jpg"
                },
                {
                    "name": "Family Pot",
                    "poster-image": "poster1.jpg"
                },
                {
                    "name": "The Birds",
                    "poster-image": "poster1.jpg"
                }
            ]
        }
    }
}
const divStyle = {
    position: 'relative',
    display: 'inline-block',
}

const movieContent = PAGE1.page['content-items'].content;

class Movielist extends React.Component {

    handleinputs(e) {
        const value = e.target.value;
        this.props.updateInputData(value);
        const filteredMovieList = movieContent.filter((list) =>{
            return list.name.toLocaleLowerCase().match(value.toLocaleLowerCase())
        })
        this.props.updateMovieList(filteredMovieList);
    }

    componentWillReceiveProps(nextProps) {
        console.log('hai');
    }
    componentDidMount() {
        this.props.updateMovieList(movieContent) //giving movies to store via actions
    }

    render() {
        const usersList = this.props.movieList;
        const usersListBlock = usersList.map((obj, i) => {
            return (
                <div class="w-1/3">
                    <LazyLoad throttle={200} height={300}>
                        <div class=" p-4">
                            <img class="w-full" alt="hai" src={require('../../assets/images/' + obj["poster-image"])} />
                            <h1>{obj.name} </h1>
                        </div>
                    </LazyLoad>
                </div>
            )
        })

        return (
            <div>
                <input value={this.props.input} onChange={(e) => this.handleinputs(e)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="Search"></input>
                <div class="flex flex-wrap" >
                    {usersListBlock}
                </div>
            </div>

        )
    }
}
function mapStateToProps(state) {
    return {
        movieList: state.movieList
    }
}

function mapDispatchToProps(dispatch) { //save data to store
    return {
        updateMovieList: (movie) => {
            dispatch(updateMovieList(movie))
        },
        updateInputData: (input) => {
            dispatch(updateInputData(input))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Movielist); //highr order component