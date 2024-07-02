import { revalidateTag } from 'next/cache';
import { redirect } from 'next/dist/server/api-utils';
import React from 'react'

function ISR({data}) {
  

    console.log(data);
  return (
    <div>
        <h1 className='text-3xl font-bold text-center pt-10'>Incrementar Side Regeneration (ISR)</h1>
        {data.users && data.users.map(user => (
        <li key={user.id} className='ml-20'> 
          {user.firstName}
        </li>
       
      ))}
    </div>
  )
}

export const getStaticProps=async()=>{
    const data=await(await fetch(`http://localhost:3000/api/users`)).json();
    //REDIRECT TO ANOTHER PAGE
    //   if(data){
    //     return{
    //         redirect:{
    //             destination:'/About',
    //             permenent:'false'
    //         }
    //     }
    // }
    return{
        props:{
            data,
        },
        revalidate:10,
    };
 }
export default ISR