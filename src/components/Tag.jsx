import React from 'react'

export default function Tag(props) {
    const { tagTitle } = props;
  return (
    <>
        <div className="tag">
            <p>{tagTitle}</p>
        </div>
    </>
  )
}
