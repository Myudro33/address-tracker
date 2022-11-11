import React from 'react'

const Info = ({data}) => {
    return (
    <div className='info-div'>
        <div>
            <h3>IPP ADDRESS</h3>
            <h1>{data.ip}</h1>
        </div>
        <div>
            <h3>LOCATION</h3>
            <h1>{`${data.city}`}
            {' '}
            <br className='hidden' />
            {`${data.region}`}
            </h1>
        </div>
        <div>
            <h3>TIMEZONE</h3>
            <h1>{`UTC ${data.timeZone}`}</h1>
        </div>
        <div>
            <h3>ISP</h3>
            <h1>{data.isp}</h1>
        </div>
    </div>
  )
}

export default Info