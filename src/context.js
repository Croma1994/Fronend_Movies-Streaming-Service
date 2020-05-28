import React, { Component } from 'react';
import { ListOfMovies } from './util/Fakedata'

const Context = React.createContext();

export class Provider extends Component {

    state = {
        rows: []
    }

    componentDidMount() {
        this.setState({
            rows: this.state.rows.concat({heading: 'Movies Being Watched Right Now', button: false, movies: ListOfMovies, icon: 'tv'}, {heading: 'Trending', button: true, movies: ListOfMovies, url: 'http://localhost:8080/api/v1/movies/trending', icon: 'fire'}, {heading: 'Most Viewed', button: true, movies: ListOfMovies, url: 'http://localhost:8080/api/v1/movies/mostviewed', icon: 'eye'})
        })
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
