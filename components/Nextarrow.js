// import React from 'react'
// import {BsChevronRight} from 'react-icons/bs'
// const Nextarrow = ({onClick}) => {
//   return (
//     <div className='right-[20px]'  onClick={onClick}>
// <div className='bg-[#fab1a0] h-[50px] w-[50px] rounded-full cursor-pointer grid 
// place-items-center'>
//     <BsChevronRight/>
// </div>
//     </div>
//   );
// }

// export default Nextarrow



import React from 'react'
import {BsChevronRight} from 'react-icons/bs'

const Nextarrow = ({ onClick }) => {
  return (
    <div className='absolute right-[20px] top-1/2 transform -translate-y-1/2 -top-[80px] z-10  hidden md:block' onClick={onClick}>
      <div className=' h-[50px] w-[50px] rounded-full cursor-pointer grid place-items-center'>
        <BsChevronRight className='text-5xl'/>
      </div>
    </div>
  );
}

export default Nextarrow
