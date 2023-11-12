import React, { useEffect, useState } from 'react';

export default function Carousel(props) {
    const [flatPictures, setFlatPictures] = useState([]);
    const [currentPicture, setCurrentPicture] = useState(0);

    useEffect(() => {
        setFlatPictures(props.flatPictures);
    }, [props.flatPictures]);

    const nextPicture = () => {
        let newCurrentPicture = currentPicture + 1;
        if (newCurrentPicture > flatPictures.length - 1) {
            newCurrentPicture = 0;
        }
        setCurrentPicture(newCurrentPicture);
    }

    const previousPicture = () => {
        let newCurrentPicture = currentPicture - 1;
        if (newCurrentPicture < 0) {
            newCurrentPicture = flatPictures.length - 1;
        }
        setCurrentPicture(newCurrentPicture);
    }

    return (
        <div className="carousel">
            <div className="carousel-inner">
                <img src={flatPictures[currentPicture]} alt={`Slide ${currentPicture}`} />
            </div>
            <button onClick={previousPicture} className="carousel-arrow carousel-arrow-left">&#9665;</button>
            <button onClick={nextPicture} className="carousel-arrow carousel-arrow-right">&#9655;</button>
        </div>
    );
}
