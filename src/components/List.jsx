import React, { Component } from 'react';
import WithSearch from '../hoc/WithSearch';
import ItemList from '../components/ItemList';
import preloadData from '../preloadData';

class List extends Component { 
    filterSearch = searchTerm => item => 
        `${item.state}`
            .toUpperCase()
            .indexOf(searchTerm.toUpperCase()) >= 0;

    render() {
        const data = preloadData;
        const searchTerm = this.props.searchTerm;
        var filterData = data.filter(this.filterSearch(searchTerm));
        return(
            <div>
                <ul>
                    {filterData.length > 0 ? (
                        filterData.map( item => (
                            <ItemList key={item.state}  {...item} />
                        ))
                    ):
                    (
                        <div className="no-records">
                        No records for <strong> {searchTerm}</strong>
                        </div>
                    )}
                </ul>
            </div>
        );
    }
}

export default WithSearch(List);