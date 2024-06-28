// import React from 'react'
// import {BsChevronLeft} from 'react-icons/bs'
// const Prevarrow = ({onClick}) => {
//   return (
//     <div className=' left-[20px] '  onClick={onClick}>
// <div className='bg-[#fab1a0] h-[50px] w-[50px] rounded-full cursor-pointer grid 
// place-items-center'>
//     <BsChevronLeft/>
// </div>
//     </div>
//   );
// }

// export default Prevarrow  




import React from 'react'
import {BsChevronLeft} from 'react-icons/bs'

const Prevarrow = ({ onClick }) => {
  return (
    <div className='absolute right-[100px]  top-1/2 transform -translate-y-1/2 -top-[80px] z-10  hidden md:block' onClick={onClick}>
      <div className=' h-[50px] w-[50px] rounded-full cursor-pointer grid place-items-center'>
        <BsChevronLeft className='text-5xl'/>
      </div>
    </div>
  );
}

export default Prevarrow
