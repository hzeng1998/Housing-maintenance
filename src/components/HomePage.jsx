import React from 'react';
import ItemList from './ItemList'
import SearchBar from './SearchBar'
import MainMenu from './MainMenu'
import BottomNav from './BottomNav'

const notes = [
    {title: "Repair order", time: "Tomorrow 15:00"},
    {title: "Alarm Garden Maintain",time: "5 days later"},
    {title: "Pipe maintain", time: "2019-1-20"},
  ]

class HomePage extends React.Component {
    render() {
        return(
            <div>
                <MainMenu />
                <ItemList items={notes}/>
            </div>
            
        );
    }
}

export default HomePage;