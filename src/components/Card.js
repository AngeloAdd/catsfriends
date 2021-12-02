import React from 'react'

const Card = ({name, email, id}) => {
    return (
        <div className="tc card-style-custom grow dib pa3 br3 ma3 bw3 shadow-5">
            <img alt="avatar" src={`https://robohash.org/${id}?set=set4`} width="150" />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card