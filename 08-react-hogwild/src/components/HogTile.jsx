import React, { useState } from 'react'
import HogDetail from './HogDetail'

function HogTile({ hog }) {
    const { image, name } = hog
    const [isShowDetail, setIsShowDetail] = useState(false)
    const [isShowing, setIsShowing] = useState(true)

  return (
    <div className='ui card eight wide column pigTile'>
        <div className="image">
            <img src={image} alt={`${name} thumbnail`} />
        </div>
        <div className="content">
            <h3 className="header">{name}</h3>
        </div>
        {isShowDetail && <HogDetail {...hog}/>}
        <button 
            className="ui button"
            onClick={() => setIsShowDetail(!isShowDetail)}>{isShowDetail ? "Less Info": "More Info"}
        </button>
        <button 
            className="ui button"
            onClick={() => setIsShowing(false)}>Hide Hog {"🐽"}
        </button>
    </div>
  )
}

export default HogTile