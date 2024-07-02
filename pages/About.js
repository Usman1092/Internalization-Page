import React from 'react'

const About = (props) => {
  
    console.log(props);
  return (
    <div>
        <h1 className='text-3xl text-center text-bold '>Server Side Rendering (SSR)</h1>
   
   
    </div>
  )
}

export const getServerSideProps=async()=>{
  

    return{
        props:{
   name:"usman"
        },
    };   
};
export default About



