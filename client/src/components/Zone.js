import React from 'react'
import Shelf from './Shelf'


export default function Zone({zone}) {
  return (
    <div style={{ marginLeft: '20px' }}>
      <h3>Zone {zone.zoneNumber}</h3>
      <ul>
          {zone.shelves.map(shelf => (
              <Shelf key={shelf._id} shelf={shelf} />
          ))}
      </ul>
  </div>
  )
}