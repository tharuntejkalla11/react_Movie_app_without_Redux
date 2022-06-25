import React from 'react'
import './SortbyComponent.css'
import { Button } from 'react-bootstrap'


export default function SortbyComponent() {
    return (
        <div class="sortbydiv">
            <h4 id='MoviesFoundText'>Variable Movies Found</h4>
            <div className='divWithSortBy'>
                <h4 id="SortByText">Sort By</h4>
                <Button id='buttonsInSortBy1' variant="danger">Release Date</Button>
                <Button id='buttonsInSortBy2' variant="danger">Rating</Button>
            </div>
        </div>
    )
}
