import React from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
const Header = () => {
  return (
  <header className='h-16 shadow-md'>
<div className='h-full container mx-autu flex items-center px-4 justify-between'   >
      <div className=''>
          <Logo w={90} h={50}   /> 

      </div>
      
      <div className='flex items-center w-full justify-between max-w-sm'>
        <input type='text' placeholder='search product here... 'className='w-full outline-none' />

        <div className='text-lg min-w-[50px] h-8 bg-red-600 flex item-center justify-center roudnded-r-full text-white'>
        <GrSearch />

        </div>
      </div>
      
       <div>
        user icons and card
       </div>

</div>



  </header>
  
  
  )
}

export default Header
