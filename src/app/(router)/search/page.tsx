import React from 'react';
import SearchFormComponent from "../../components/Search/SearchFormComponent";
import HeaderComponent from "@/app/components/HeaderComponent/HeaderComponent";
import "@/app/styles.css"


const Search = () => {
    return (
        <div className="flex-column">
            <HeaderComponent/>
            <SearchFormComponent/>
        </div>
    );
};

export default Search;