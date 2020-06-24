import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core'
import Form from '../forms/Form'
import { getMovies } from '../../services/api'
import TabScreen from '../screens/TabScreen'

class MoviesContainer extends Component {
    state = {
        searchQuery: '',
        movies: [],
        isLoading: false
    }
    componentDidMount() {
        this.fetchMovies()
    }

    fetchMovies = () => {

        // const { movieName } = e.target.value
        // e.preventDefault()

        const sourceurl = "movie/upcoming"
        this.setState({
            isLoading: true
        })
        getMovies(sourceurl).then(
            (movies) => {
                console.log('movies', movies)
                this.setState({
                    movies,
                    isLoading: false,

                })
            },
            error => {
                alert('Error', `Something went wrong! ${error}`)
            }
        )
        console.log(sourceurl)
    }

    handleInputChange = searchQuery => {
        console.log('searchQuery', searchQuery)
        this.setState({
            searchQuery
        })
    }
    render() {
        const { isLoading, movies } = this.state
        return (
            <div>
                <Form onInputChange={this.handleInputChange}
                    onSubmit={this.fetchMovies}
                />
                <TabScreen
                    movies={movies}
                />

            </div>
        )
    }
}

export default MoviesContainer