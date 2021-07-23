import React from 'react';
import { useHistory, withRouter } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import './results.css'
import * as actions from '../Reducers/resultReducer'
import { useEffect } from 'react';

const Results = () => {

    const dispatch = useDispatch();

    const flightDetails = useSelector(state => state.flightData);
    const userSearch = useSelector(state => state.userSearch)
    const isSearchDone = useSelector(state => state.searchDone)

    const history = useHistory()

    let filteredDetail = []

    useEffect(() => {
        dispatch(actions.fetchFlightDetails())
        if (!isSearchDone) {
            history.push('/')
        }
    }, [])

    const columns = [{
        dataField: 'flightnumber',
        text: 'Flight Number'
    }, {
        dataField: 'airlineName',
        text: 'Airline Name'
    }, {
        dataField: 'departureTime',
        text: 'Departure Time'
    }, {
        dataField: 'arrivalTime',
        text: 'Arrival Time'
    }, {
        dataField: 'duration',
        text: 'Duration'
    }, {
        dataField: 'stops',
        text: 'No of stops'
    }, {
        dataField: 'price',
        text: 'price'
    }];

    const options = {
        paginationSize: 5,
        pageStartIndex: 1,
        sizePerPage: 5
    }

    if (flightDetails !== undefined && Object.keys(userSearch).length > 0) {
        filteredDetail = flightDetails.filter((arr, i) => {
            if (arr.sourceCity === userSearch?.sourceCity.toLowerCase() && arr.destinationCity === userSearch?.destinationCity.toLowerCase() && arr.travelDate === userSearch?.travelDate) {
                return true
            }
        });
    }

    return (

        <div className='results container'>
            <div className="row">
                <section className="resultTable">
                    <p>Total number of results:{filteredDetail.length}</p>
                    <BootstrapTable keyField='id' data={filteredDetail} columns={columns} pagination={paginationFactory(options)} />
                </section>
            </div>
        </div>
    )

}

export default withRouter(Results);