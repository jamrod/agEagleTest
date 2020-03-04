import React from 'react'

import Weather from '../Weather'

function Locale(props) {
    const data = props.data
    return (
        <div className="locale">
            <p>Longitude {data.coord.lon}</p>
            <p>Lattitude {data.coord.lat}</p>
            <Weather data={data}></Weather>
        </div>
    )
}

export default Locale