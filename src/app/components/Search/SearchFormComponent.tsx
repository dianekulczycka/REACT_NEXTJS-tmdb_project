"use client";

import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {searchByKeyword} from "../../services/movies/searchByKeyword";
import {IQuerySearchResult} from "../../interfaces/IQuerySearchResult";
import {IFormType} from "../../interfaces/IForm";

const SearchFormComponent = () => {
    const [querySearchResults, setQuerySearchResults] = useState<IQuerySearchResult[] | null>(null);
    let {register, handleSubmit} = useForm<IFormType>();

    let formSubmitHandler = async (data: IFormType) => {
        let result = await searchByKeyword(data);
        setQuerySearchResults(result);
    };

    return (
        <div className="flex-column">
            <h2> Search by keyword: </h2>
            <form onSubmit={handleSubmit(formSubmitHandler)}>
                <input type="text" placeholder="E.g. 'Garfield'" {...register("query")}/>
                <button>search</button>
            </form>
            {querySearchResults ? <h2> Results: </h2> : ""}
            {
                querySearchResults?.map(({id, name}) => <h3 key={id}> {id}. {name} </h3>)
            }
        </div>
    );
};

export default SearchFormComponent;