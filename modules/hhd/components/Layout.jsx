import React from 'react';
import ItemList from './ItemList'
import SearchBar from './SearchBar'
import GridMenu from './GridMenu'

class Layout extends React.Component {
    render() {
        return(
            <div>
                <SearchBar />
                <ItemList />
                <GridMenu />
            </div>
            
        );
    }
}


export default Layout;