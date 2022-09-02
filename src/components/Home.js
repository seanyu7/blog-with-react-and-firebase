import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className='homePage'>
      <div className='postContents'>
        <div className='postHeader'>
          <h1>Title</h1>
        </div>
      
      <div className='postTextContainer'>
       put some tweet here as your tweet for the day
      </div>
      <div className='nameAndDeleteButton'>
        <h3>@SeanYuTakaki</h3>
        <button>Delete</button>
      </div>
      </div> 
    </div>
  )
}

export default Home