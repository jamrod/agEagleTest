import React from 'react'

import Weather from '../Weather'

//render locale and weather data
function Locale(props) {

    const data = props.data
    return (
        <div className="flex-container-column centered">
            <div>
                <div className="row"><span>Longitude:</span><span>{data.coord.lon}</span></div>
                <div className="row"><span>Lattitude:</span> <span>{data.coord.lat}</span></div>
            </div>
            <Weather data={data}></Weather>
        </div>
    )
}

export default Locale