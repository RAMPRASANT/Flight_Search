import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './search.css'
import { useEffect } from 'react';

const SearchFlight = () => {

    const dispatch = useDispatch();
    const history = useHistory()

    useEffect(() => {
        dispatch({ type: 'IS_SEARCH_DONE' })
    }, [])

    const [userInput, setUserInput] = useState({
        sourceCity: '',
        destinationCity: '',
        travelDate: '',
        returnDate: ''
    });

    const onchangeHandler = (event) => {
        setUserInput({
            sourceCity: document.getElementById('sourceCity').value,
            destinationCity: document.getElementById('destinationCity').value,
            travelDate: document.getElementById('travelDate').value,
            returnDate: document.getElementById('returnDate').value
        })
    }

    const fetchDetails = (e) => {
        e.preventDefault()
        dispatch({ type: 'STORE_USER_SEARCH', value: userInput })
        history.push('/results');
    }
    return (

        <div className='flightSearch container'>
            <h1>Search Flight</h1>
            <div className="row">
                <form onSubmit={fetchDetails}>
                    <section className="col-sm-12">
                        <div className='form-group'>
                            <label htmlFor='sourceCity'>Source City </label>
                            <input type='text' id='sourceCity' name='sourceCity' placeholder='Enter Source City' onChange={onchangeHandler} required></input>
                        </div>
                    </section>
                    <section className="col-sm-12">
                        <div className='destinationCity'>
                            <label htmlFor='destinationCity'>Destination City </label>
                            <input type='text' id='destinationCity' name='destinationCity' placeholder='Enter Destination City' onChange={onchangeHandler} required></input>
                        </div>
                    </section>
                    <section className="col-sm-12">
                        <div className='travelDate'>
                            <label htmlFor='travelDate'>Travel Date </label>
                            <input type='date' onChange={onchangeHandler} id='travelDate' name='travelDate' required></input>
                        </div>
                    </section>
                    <section className="col-sm-12">
                        <div className='returnDate'>
                            <label htmlFor='returnDate'>Return Date </label>
                            <input type='date' onChange={onchangeHandler} id='returnDate' name='returnDate'></input>
                        </div>
                    </section>
                    <section className="col-sm-12">
                        <div className="searchBtn">
                            <button className="search" type="submit">Search</button>
                        </div>
                    </section>
                </form>
            </div>
        </div>
    )

}

export default withRouter(SearchFlight);