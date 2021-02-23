import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import './Show.css';
export default class Show extends Component {
    render() {

        let parkId = this.props.match.params.id
        let ParkData = this.props.parks.find(value =>
            value.id === parkId
        )

        const parksImages = ParkData.images.map((value, index) =>
            <div key={index}>

                <img src={value.url}></img>

            </div>

        )
        return (
            <div>
                <div >
                    <img className='mainImage' src={ParkData.images[0].url}></img>
                </div>
                <h3>
                    {ParkData.fullName}
                </h3>
                <p className='parkInfo'>
                    {ParkData.description}
                </p>
                <h5> Address</h5>
                <p>{ParkData.addresses[1].line1}<br />
                    {ParkData.addresses[1].city}, {ParkData.addresses[1].stateCode} {ParkData.addresses[1].postalCode}
                </p>
                <h5>Directions
                    <p>
                        {ParkData.directionsInfo}
                    </p>
                </h5>
                <h5>
                    {ParkData.name}
                </h5>
                <p>
                    <form action={ParkData.url}>
                        <button type='submit'>Read More</button>
                    </form><br />
                  Images <br />
                    <div className='img_space'>
                            {parksImages}

                    </div>
                </p>
            </div>
        )
    }
}