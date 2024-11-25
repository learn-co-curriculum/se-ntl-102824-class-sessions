import React from 'react'
import HogTile from './HogTile'

function HogList({ hogs }) {

    const tiles = hogs.map(hog => <HogTile key={hog.name + hog.weight} hog={hog} />)
  return (
    <div className="ui grid container">{tiles}</div>
  )
}

export default HogList