import React from 'react'
// Components
import UserProfileImage from '../components/UserProfileImage'
import Button from '../components/Button'
import Posts from '../components/Posts'
import Listings from '../components/Listings'
import Navbar from '../components/Navbar';
import UserProfile from '../images/profileimg.jpg'

function Dashboard() {
  const links = ['PROFILE', 'DISCOVER'];

  return (
<>
    <Navbar links={links} />
  <div className='flex flex-col bg-slate-100 gap-5 pt-24'>
    <div className='flex justify-around items-center flex-col sm:flex-row'>
      <UserProfileImage data={{
        heading: 'Your Dashboard',
        subHeading: 'Hello, Gavin!',
        image: UserProfile,
        paragraph: 'Whistler, BC'
      }} />

        <div className='flex gap-2'>
          <Button buttonText={'Find'}  />
          <Button buttonText={'Post'}  />
        </div>
    </div>
     <Posts />
     <Listings />
     <Listings />
  </div>
</>
    
  )
}

export default Dashboard