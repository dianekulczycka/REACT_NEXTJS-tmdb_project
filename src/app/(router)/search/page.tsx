import React from 'react';
import SearchFormComponent from "../../components/Search/SearchFormComponent";
import "../../../../../moviedb/src/app/styles.css";
import HeaderComponent from "@/app/components/HeaderComponent/HeaderComponent";


const Search = () => {
    return (
        <div className="flex-column">
            <HeaderComponent/>
            <SearchFormComponent/>
        </div>
    );
};

export default Search;