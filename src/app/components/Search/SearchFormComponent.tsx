"use client";

import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {searchKeywords} from "../../services/movies/searchKeywords";
import {IQuerySearchResult} from "../../interfaces/IQuerySearchResult";
import {IFormType} from "../../interfaces/IForm";
import SearchResultComponent from './SearchResultComponent';

const SearchFormComponent = () => {
    const [querySearchResults, setQuerySearchResults] = useState<IQuerySearchResult[]>([]);
    let {register, handleSubmit} = useForm<IFormType>();

    let formSubmitHandler = async (data: IFormType) => {
        let result = await searchKeywords(data);
        setQuerySearchResults(result);
    };

    return (
        <div className="flex-column">
            <h2> Search keywords: </h2>
            <form onSubmit={handleSubmit(formSubmitHandler)}>
                <input required={true} type="text" placeholder="E.g. 'Spider'" {...register("query")}/>
                <button>search</button>
            </form>
            <SearchResultComponent querySearchResults={querySearchResults}/>
        </div>
    );
};

export default SearchFormComponent;