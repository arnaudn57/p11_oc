import React from 'react';

export default function FlatCard(props) {
    const { flatCover, flatTitle } = props;

    return (
        <>
            <div className="flat-card" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7721682422969187) 98%), url(${flatCover})` }}>
                <h2>{flatTitle}</h2>
            </div>
        </>
    );
}
