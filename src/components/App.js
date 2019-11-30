import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
    state = {
        images: []
    };
    onSearchSubmit = async (term) => {

        const response = await unsplash
            .get('search/photos', {
                params: {
                    query: term
                },

            });

        this.setState({ images: response.data.results });

        // console.log(response.data.results);

        //To reach the data from the api request. This is the method 1. Second method is async keyword.
        /*.then((response) => {
            console.log(response.data.results);
        });*/
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmitWhatever={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}


export default App;