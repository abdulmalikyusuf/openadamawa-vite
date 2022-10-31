import React from 'react'
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';


function Template() {
  return (
    <main className=''>
        <Header/>
        <div className="bg-white overflow-hidden">
          <Outlet/>
          <Footer/>
        </div>
      </main>
  )
}

export default Template