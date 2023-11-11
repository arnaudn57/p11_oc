import React from 'react';

export default function Banner(props) {
    const { backgroundImageName } = props;
    const background_image = `../../../public/${backgroundImageName}`;

    return (
        <div className="banner" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
                                rgba(0, 0, 0, 0.5)), url(${background_image})`
        }}>
            <div className="banner__content">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    );
}
