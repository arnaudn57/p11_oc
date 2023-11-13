import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Tag from '../components/Tag';
import Collapse from '../components/Collapse';

export default function Flat() {
    const [flat, setFlat] = useState(null);
    const [dataFetched, setDataFetched] = useState(false);
    const { id } = useParams();

    const fetchData = async () => {
        try {
            const response = await fetch('../../database/data.json');
            const data = await response.json();
            const flatData = data.find((flat) => flat.id === id);
            setFlat(flatData);
            setDataFetched(true);
            console.log(flatData)
        } catch (error) {
            console.error(error);
        }
    };

    const reviews = (ratingCount) => {
        let max_rating = 5;
        let rating = parseInt(ratingCount);
        console.log(rating)
        //je veux afficher le nombre d'étoiles correspondant à la note et si moins de 5 alors remplir avec des étoiles vides
        let stars = [];
        for (let i = 1; i <= rating; i++) {
            stars.push(<i className="fa-solid fa-star rating-icon-filled"></i>);
        }
        for (let i = 1; i <= max_rating - rating; i++) {
            stars.push(<i className="fa-solid fa-star rating-icon-empty"></i>);
        }
        console.log(stars)
        return stars;
    }

    useEffect(() => {
        fetchData();
    }, [id]);

   return (
    <>
        <div className="carousel-container">
            {dataFetched ? (
                flat ? (
                    <Carousel flatPictures={flat.pictures} />
                ) : (
                    <p>Flat not found</p>
                )
            ) : (
                <p>Loading...</p>
            )}
        </div>
        {flat && (
            <>
                <div className="flat-details">
                    <div className="flat-details-left">
                        <h1 className="flat-title">{flat.title}</h1>
                        <p className="flat-location">{flat.location}</p>
                        <div className="tag-container">
                            {flat.tags.map((tag, index) => (
                                <Tag tagTitle={tag} key={tag.id || index} />
                            ))}
                        </div>
                    </div>
                    <div className="flat-details-right">
                        <div className="host">
                            <img className="host-picture" src={flat.host.picture} alt={flat.host.name} />
                            <p className="host-name">{flat.host.name}</p>
                        </div>
                        <div className="rating">
                            {flat.rating && reviews(flat.rating)}
                        </div>
                    </div>
                </div>
                <div className="collapse-container">
                    <Collapse title="Description" items={[flat.description]} />
                    <Collapse title="Équipements" items={flat.equipments} />
                </div>
            </>
        )}
    </>
);
}
