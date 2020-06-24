import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core'
import Form from '../forms/Form'
import { getMoviesOrTvShows, searchShows } from '../../services/api'
import TabScreen from '../screens/TabScreen'
import SimpleTabs from '../screens/TabScreen'

class MoviesContainer extends Component {
    state = {
        searchQuery: '',
        searchMsg: 'Please initialise search',
        searchOption: 'multi',
        dataList: [],
        type: 'movie',
        genre: 'popular',
        isLoading: false
    }

    componentDidMount() {
        this.fetchDataList()
    }

    fetchDataList = () => {

        // const { movieName } = e.target.value
        // e.preventDefault()

        // const sourceurl = "movie/upcoming"
        const { type, genre } = this.state

        this.setState({
            isLoading: true
        })

        if (type === 'movie' || type === 'tv') {
            getMoviesOrTvShows(type, genre).then(
                (data) => {
                    console.log('Data', data)
                    this.setState({
                        dataList: data,
                        isLoading: false,

                    })
                },
                error => {
                    alert('Error', `Something went wrong! ${error}`)
                }
            )
        }
        // console.log(sourceurl)
    }

    fetchSearchDataList = (e) => {

        e.preventDefault()
        const { searchOption, searchQuery } = this.state

        this.setState({
            isLoading: true
        })

        searchShows(searchOption, searchQuery).then(
            dataList => {
                if (dataList.length > 0) {
                    this.setState({
                        type: 'search',
                        dataList,
                        isLoading: false,
                        searchMsg: ''
                    })
                } else {
                    this.setState({
                        type: 'search',
                        dataList,
                        isLoading: false,
                        searchMsg: 'Sorry, there was no result'
                    })
                }
            },
            error => {
                alert('Error', `Something went wrong ${error}`)
            }
        )


    }

    onGenreChange = genre => {
        this.setState({
            genre
        }, this.fetchDataList.bind(this))
    }

    handleInputChange = searchQuery => {
        console.log('searchQuery', searchQuery)
        this.setState({
            searchQuery
        })
    }

    handleSearchOptionChange = searchOption => {
        this.setState({
            searchOption
        })
    }

    handleTabChange = tabType => {
        switch (tabType) {
            case 'movie':
                this.setState({
                    type: tabType,
                    genre: 'popular',
                    dataList: []
                }, this.fetchDataList.bind(this))
            case 'search':
                this.setState({
                    type: tabType,
                    dataList: [],
                    searchMsg: 'Please initialise search'
                })
            case 'tv':
                this.setState({
                    type: tabType,
                    genre: 'popular',
                    dataList: []
                }, this.fetchDataList.bind(this))

        }
    }

    render() {
        const { isLoading, dataList, searchMsg } = this.state
        return (
            <div>
                <Form
                    onSearchOptionChange={this.handleSearchOptionChange}
                    onInputChange={this.handleInputChange}
                    onSubmit={this.fetchSearchDataList}
                />
                <SimpleTabs
                    dataList={dataList}
                    onTabChange={this.handleTabChange}
                    searchMsg={searchMsg}
                    onGenreChange={this.onGenreChange}
                />

            </div>
        )
    }
}

export default MoviesContainer