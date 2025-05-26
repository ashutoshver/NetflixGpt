import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='mt-30 absolute w-[100%] flex justify-center'>
        <form className='text-white flex gap-5 items-center w-[40%]'>
            <input type='text' className='p-2 w-[100%] border-1 border-white rounded-md' placeholder='What would you like to watch today' />
            <button className='bg-white text-black px-4 py-2 rounded-md'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar