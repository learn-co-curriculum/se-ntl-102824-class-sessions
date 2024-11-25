import React from 'react'

function Filter({
  isShowGreased,
  onCheckGreased,
  onSelectSort,
  sortBy
}) {
  return (
    
    <div className='ui menu'>
      <div className='ui item'>
        <label>Greased Pigs Only?</label>
      </div>
      <div className='ui item'>
        <input
          className="ui toggle checkbox"
          type="checkbox"
          checked={isShowGreased}
          onChange={e => onCheckGreased(e.target.checked)}
         />
      </div>
      <div className='ui item'>
        <label>Sort by</label>
      </div>
      <div className='ui item'>
        <select
          className="ui selection dropdown"
          value={sortBy}
          onChange={e => onSelectSort(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>

    </div>
  )
}

export default Filter