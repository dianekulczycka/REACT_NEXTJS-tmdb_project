import React, {FC} from 'react';
import ClientNavLinkComponent
    from '../HeaderComponent/MenuComponent/MenuItemComponent/ClientNavLink/ClientNavLinkComponent';
import {IQuerySearchResult} from '@/app/interfaces/IQuerySearchResult';

interface IProps {
    querySearchResults: IQuerySearchResult[];
}

const SearchResultComponent: FC<IProps> = ({querySearchResults}) => {
    return (
        <div className="flex-column">
            {querySearchResults ? <h2> Results: </h2> : ""}
            {
                querySearchResults?.map(
                    ({id, name}, index) =>
                        <ClientNavLinkComponent
                            to={`search/${id}`}
                            key={id}>
                            {index + 1}. {name}
                        </ClientNavLinkComponent>)
            }
        </div>
    );
};

export default SearchResultComponent;