import React from 'react';
import ItemList from './ItemList'
import MainMenu from './MainMenu'

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
                <ItemList items={notes} listType="alarm"/>
            </div>
            
        );
    }
}

export default HomePage;