import React from 'react';
import './movies.css';
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
    constructor() {
        super();
        this.state = {
            'search' : ''
        }
    }

    handleinputs(e) {
        const value = e.target.value;
        this.setState({search: value })
        this.props.updateInputData(value);
        const filteredMovieList = movieContent.filter((list) => {
            return list.name.toLocaleLowerCase().match(value.toLocaleLowerCase())
        })
        this.props.updateMovieList(filteredMovieList);
    }
    back(e) {
        this.setState({search: ''})
        this.props.updateMovieList(movieContent); //giving movies to store via actions
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
                <div class="w-1/3 ">
                    <LazyLoad throttle={300} height={500} >
                        <div class=" p-4">
                            <img class="w-full" alt="hai" src={require('../../assets/images/' + obj["poster-image"])} />
                            <h1 class="text-white">{obj.name} </h1>
                        </div>
                    </LazyLoad>
                </div>
            )
        })

        return (
            <div className="back ">
                   <button class='p-3' onClick={(e) => this.back(e)}><img alt='hai' class='image' src={require('../../assets/images/Back.png')} /></button>
                    <input  value = {this.state.search} onChange={(e) => this.handleinputs(e)} class="back w-11/12 outline-none rounded  py-2 px-3 text-white" id="search" type="text" placeholder="Search"></input>
                <div class="flex flex-wrap back" >
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