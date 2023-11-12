import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Tag from '../components/Tag';

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
            <div className="flat-details">
                <h1>{flat.title}</h1>
                <p>{flat.location}</p>
                <div className="tag-container">
                    {flat.tags.map((tag) => (
                        <Tag tagTitle={tag} key={tag.id}/>
                    ))}
                </div>
                <p>{flat.description}</p>
                <p>{flat.price}</p>
            </div>
        </>
    );
}
