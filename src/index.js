import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyANVl3QA0_NWKwmWPpUVAls4clg_zkX7mY';

YTSearch({key: API_KEY, term: 'kittens'}, function(data) {
    console.log(data);

});

const App = () => {
    return (
      <div>
        <SearchBar />
      </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'))