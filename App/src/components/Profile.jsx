import React, { useEffect } from 'react';
import useData from '../hooks/useData'
import { useNavigate } from 'react-router-dom';

export default function Profile() {

  const { loginUser, login } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    if (login == false) {
      navigate("/");
    }
  }, [])



  return (
    <>

      {
        login == false ? navigate("/") :
          <div>
            <h1 className='text-center'>User Name: {loginUser.fullName}</h1>
            <h1 className='text-center'>User Age: {loginUser.age}</h1>
            <h1 className='text-center'>User Email: {loginUser.email}</h1>
            <h1 className='text-center'>User Phone: {loginUser.phoneNumber}</h1>
            <h1 className='text-center'>User Gender: {loginUser.gender}</h1>
            <h1 className='text-center'>User Password: {loginUser.pwd}</h1>
          </div>
      }

    </>
  )
}
