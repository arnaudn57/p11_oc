import React, { useState, useEffect } from 'react'
import Banner from '../components/Banner';
import FlatsGrid from '../components/FlatsGrid';


export default function Home() {
    const [flats, setFlats] = useState([]);

    useEffect(() => {
        const getFlats = async () => {
            const response = await fetch('../../database/data.json');
            const flats = await response.json();
            setFlats(flats);
        }
        getFlats();
    }, []);

  return (
    <>
        <Banner backgroundImageName='home-banner.png' text='Chez vous, partout et ailleurs'/>
        <FlatsGrid flats={flats}/>
    </>
  )
}
