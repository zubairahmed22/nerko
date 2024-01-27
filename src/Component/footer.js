import React from 'react'

const footer = () => {
  return (
    <div className='flex [url(../public/assets/footer-bg.png)] w-[85% m-auto]'>
     <div className='flex justify-center'>
        <div>
            <p className='text-gray-400'>Privacy policy</p>
            <p className='text-gray-400'> Terms of use</p>
        </div>
        <div>
            <p className='text-gray-400'>© 2023 Nerko. All rights reserved.</p>
        </div>
     </div>
    </div>
  )
}

export default footer