import React from 'react'

const SearchBox = ({ searchChange }) => {
  return (
    <>
      <div className='p-3'>
        <input
          className='p-3 border-green bg-teal-100 rounded'
          type='search'
          placeholder='search robots'
          onChange={searchChange}
        />
      </div>
    </>
  )
}

export default SearchBox