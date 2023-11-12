import React from 'react';
import FlatCard from './FlatCard';

export default function FlatsGrid(props) {
    const { flats } = props;

    return (
        <div className="flats-grid">
            {flats.map((flat) => (
                <FlatCard key={flat.id} flat={flat} />
            ))}
        </div>
    );
}
