import React from 'react'
// Components
import UserProfileImage from '../components/UserProfileImage'
import Button from '../components/Button'
import Posts from '../components/Posts'
import Listings from '../components/Listings'

function Dashboard() {

  return (

  <div className='flex flex-col bg-slate-100 gap-5'>
    <div className='flex justify-around items-center flex-col sm:flex-row'>
        <UserProfileImage name={'Gavin'}  />
        <div className='flex gap-2'>
          <Button buttonText={'Find'}  />
          <Button buttonText={'Post'}  />
        </div>
    </div>
     <Posts />
     <Listings />
     <Listings />
  </div>
    
  )
}

export default Dashboard