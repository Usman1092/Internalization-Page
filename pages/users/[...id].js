import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const UserInfo = () => {
  const router = useRouter();
  const { id } = router.query;
  const [userInfo, setUserInfo] = useState(null);


  useEffect(() => {
    if (id) {
      async function fetchUserData(userId) {
        try {
          const response = await fetch(`http://localhost:3000/api/users/${userId}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setUserInfo(data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
      fetchUserData(id);
    }
  }, [id]);

  if (!userInfo) return <h1>Loading...</h1>;

  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>PAGE RENDERING</h1>
     <div className='pt-20 flex flex-col justify-center  '> 
      <p className='ml-20 pt-10 text-xl'>Name: {userInfo.firstName} {userInfo.lastName}</p>
      <p className='ml-20 pt-10  text-xl'>Gender: {userInfo.gender}</p>
      <p className='ml-20 pt-10 text-xl'>Age: {userInfo.age}</p>
      </div>
     
    </div>
  );
};

export default UserInfo;





