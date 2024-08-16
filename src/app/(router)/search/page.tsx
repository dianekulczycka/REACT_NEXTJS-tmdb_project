import React from 'react';
import SearchFormComponent from "../../components/Search/SearchFormComponent";
import "../../../../../moviedb/src/app/styles.css";


const Search = () => {
    return (
        <div className="flex-column">
            <SearchFormComponent/>
        </div>
    );
};

export default Search;