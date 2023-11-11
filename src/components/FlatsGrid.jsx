import React from 'react'
import FlatCard from './FlatCard';

export default function FlatsGrid(props) {
    const { flats } = props;
    console.log(flats);
  return (
    <>
        <div className="flats-grid">
        {flats.map((flat) => {
            return <FlatCard key={flat.id} flatCover={flat.cover} flatTitle={flat.title}/>
            })
        }
        </div>
    </>
  )
}
