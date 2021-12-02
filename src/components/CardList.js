import React from 'react'
import Card from './Card'

const CardList = ( {cats} ) => {
    return (
        <section className="flex justify-center items-center flex-wrap ma3 pv3">
            { cats.map( (catsItem, index) => {
                return <Card
                    key={index}
                    id={catsItem.id}
                    name={catsItem.name}
                    email={catsItem.email}
                />
            })
            }
        </section>
    )
}

export default CardList