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
import { motion } from 'framer-motion';

const Nextarrow = ({ onClick }) => {
  return (
    <motion.div initial={{ x: 50 }} whileInView={{ x: 0 }} transition={{   duration: 2 }}     className='absolute right-[20px]  transform -translate-y-1/2 -top-[80px] z-10  hidden md:block' onClick={onClick}>
      <div  initial={{ x: 1000 }}  className=' h-[50px] w-[50px] rounded-full cursor-pointer grid place-items-center'>
        <BsChevronRight className='text-5xl'/>
      </div>
    </motion.div>
  );
}

export default Nextarrow
