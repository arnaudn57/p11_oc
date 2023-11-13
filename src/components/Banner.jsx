import React from 'react';

export default function Banner(props) {
    const { backgroundImageName, text } = props;
    const background_image = `../../../public/${backgroundImageName}`;

    return (
        <div className="banner" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
                                rgba(0, 0, 0, 0.5)), url(${background_image})`
        }}>
            <div className="banner__content">
                <h1>{text}</h1>
            </div>
        </div>
    );
}
