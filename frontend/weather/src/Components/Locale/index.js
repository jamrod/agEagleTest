import React from 'react'

import Weather from '../Weather'

function Locale(props) {
    const data = props.data
    return (
        <div className="flex-container-column">
            <p>
                <div className="row"><span>Longitude:</span><span>{data.coord.lon}</span></div>
                <div className="row"><span>Lattitude:</span> <span>{data.coord.lat}</span></div>
            </p>
            <Weather data={data}></Weather>
        </div>
    )
}

export default Locale