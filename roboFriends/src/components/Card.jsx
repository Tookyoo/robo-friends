import React from 'react'

const Card = ({ id, name, email }) => {
  return (
    <>
      <div className='text-center bg-emerald-200 inline-block 
      rounded-lg p-3 m-2 border-2 shadow-lg transition-transform duration-300
      hover:scale-105 active:scale-95'>
        <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
        <div>
          <h1 className='font-black text-xl p-4'>{name}</h1>
          <p>{email}</p>
        </div>
      </div>
    </>
  )
}

export default Card;