import React from 'react'

const Title = ({subtitle, title }) => {
  return (
    <div>
      <div className='heading'>
        <h3>{subtitle}</h3>
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default Title
