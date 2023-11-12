import React, { useEffect, useState } from 'react';
import ArrowLeft from '../assets/carousel-arrow-left.svg';
import ArrowRight from '../assets/carousel-arrow-right.svg';

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
            {flatPictures.length > 1 && (
                <>
                    <span className="carousel-counter">{currentPicture + 1} / {flatPictures.length}</span>
                    <img onClick={previousPicture} src={ArrowLeft} className="carousel-arrow carousel-arrow-left" />
                    <img onClick={nextPicture} src={ArrowRight} className="carousel-arrow carousel-arrow-right" />
                </>
            )}

        </div>
    );
}
