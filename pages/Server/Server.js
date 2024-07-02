import React from 'react'
import Link from 'next/link';
function Server({data}) {
    console.log("Data received from Server",data);
    
  return (
    <div>
        <h1 className='text-2xl text-center pt-20 text-bold'>
        Server Side Rendering</h1>
        <ul>
        {data.data.users && data.data.users.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <div className='ml-20'>{user.lastName} </div>
          </Link>
        ))}
      </ul>

     
        </div>
  )
}

export const getServerSideProps= async()=>{
  
    const data= await(await fetch('http://localhost:3000/api/users')).json();
    
  
    return{
        props:{
            data:{data},
        },
    };
    
}

export default Server



