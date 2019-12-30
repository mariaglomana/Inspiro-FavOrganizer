import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';
import Menu from './Menu';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            music: [],
            films: [],
            loading: false,
            searchText: ''
        };
        // this.search = this.search.bind(this);
        // this.handleSearch = this.handleSearch.bind(this);
    }

    // search() {
    //     this.setState({
    //         loading: true
    //     });
    //     getDataFromApi(this.state.searchText)
    //         .then(data => {
    //             this.setState({
    //                 shows: data,
    //                 loading: false
    //             });
    //         });
    // }

    // handleSearch(searchText) {
    //     //localStorage.set('searchText', searchText);
    //     this.setState({ searchText: searchText });
    // }

    render() {
        return (
            <div >
                <Header />
                <Search
                //     isLoading={this.state.loading}
                //     searchText={this.state.searchText}
                //     search={this.search}
                //     handleSearch={this.handleSearch}
                />
                <Menu />
                <Footer />
            </div >
        );
    }
}


export default Main;