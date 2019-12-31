import React from 'react';
import Search from './Search';
import Menu from './Menu';

class Home extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <React.Fragment>
                <Search
                //     isLoading={this.state.loading}
                //     searchText={this.state.searchText}
                //     search={this.search}
                //     handleSearch={this.handleSearch}
                />
                <Menu />
            </React.Fragment>
        );
    }

}


export default Home;