import React from 'react';
import { Link } from 'react-router-dom';

export default function FlatCard(props) {
    const { flat } = props;
    const dataToSend = flat;

    return (
        <Link to={{ pathname: `/flat/${flat.id}` }}>
            <div className="flat-card" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7721682422969187) 98%), url(${flat.cover})` }}>
                <h2>{flat.title}</h2>
            </div>
        </Link>
    );
}
