import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import UnderNavBar from '../Components/BelowNavBar/UnderNavBar';
import MainLandingPage from '../Components/LandingPage/MainLandingPage';

function index() {
  return (
    <>
        <Navbar />
        <UnderNavBar />
        <MainLandingPage />
    </>
  )
}

export default index