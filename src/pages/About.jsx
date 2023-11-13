import React from 'react'
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'

export default function About() {
  return (
    <>
        <Banner backgroundImageName='about-banner.png' text=''/>
        <div className="collapse-about-container">
            <Collapse title='Fiabilité' items={['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nunc nunc ultricies nunc, quis ultricies nunc nunc nunc.']} />
            <Collapse title='Respect' items={['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nunc nunc ultricies nunc, quis ultricies nunc nunc nunc.']} />
            <Collapse title='Service' items={['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nunc nunc ultricies nunc, quis ultricies nunc nunc nunc.']} />
            <Collapse title='Sécurité' items={['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nunc nunc ultricies nunc, quis ultricies nunc nunc nunc.']} />
        </div>
    </>
  )
}
