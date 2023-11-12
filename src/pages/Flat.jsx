import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../components/Carousel';

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
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <div>
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
    );
}
