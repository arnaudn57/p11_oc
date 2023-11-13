import React, { useState } from 'react';
import ArrowBack from '../assets/arrow-back-collapse.svg';

export default function Collapse(props) {
  const { title, items } = props;
  const [isOpened, setIsOpened] = useState(false);

  const toggle = () => setIsOpened((wasOpened) => !wasOpened);

  const arrowClass = isOpened ? 'rotate-180' : '';
  return (
    <>
      <div className="collapse" onClick={toggle}>
        <div className="collapse-title">
          <h2>{title}</h2>
          <img
            src={ArrowBack}
            className={arrowClass}
            alt="Arrow"
          />
        </div>
        {isOpened ? (
          <div className="collapse-content">
            <ul className="collapse-content-items">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}
