import React from 'react'
import IC from './IC/IC'
import Header from './Header/Header'
import We from './We/We'
import History from './History/History'
import Form from './Form/Form'
import Footer from './Footer/Footer'
const Home = () => {
  return <>
  <div><Header/></div>
  <div><We/></div>
  <div><History/></div>
  <div> <IC/></div>
  <div><Form/></div>
  <div><Footer/></div>
  </>
}

export default Home