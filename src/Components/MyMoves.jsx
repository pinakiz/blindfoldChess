import React from 'react'
import Listen from './Listen'

const MyMoves = () => {
  return (
    <div className='flex w-screen justify-around'>

      <div className='flex basis-1/6'>
        <Listen />
    </div>  
        <div className='text-7xl border-black border-2 p-4 items-center flex justify-center basis-1/3'>2 : 00</div>
        <div className=' text-7xl border-2 border-black flex justify-center items-center basis-1/6'>E4 </div>
    </div>
  )
}

export default MyMoves