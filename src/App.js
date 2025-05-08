import logo from './logo.svg';
import './App.css';
import CourseView from './course/courseview';
import Calendar from './calendar/calendar';
import React, { act } from 'react';
import Cookies from 'js-cookie';

import { useState, useCallback } from 'react';

function getInitState()
{
  if(Cookies.get('state') != "true" && Cookies.get('state') != "false")
  {
    console.log("h")
    return true;
  } else
  {
    switch (Cookies.get('state'))
    {
      case "true":
        return true;
      case "false":
        return false;
    }

  }
}

function App() {
  //0: courseview
  //!0: scheduleview

  const [view, setview ] = useState(getInitState());
  const handleToggleA = useCallback(() => {setview(true); Cookies.set('state', "true", { expires: 7, secure: true, path: '/' });})
  const handleToggleB = useCallback(() => {setview(false); Cookies.set('state', "false", { expires: 7, secure: true, path: '/' });})
  
  return(
    <div className='App'>
              <div class="flex-container">
        
        <div className='left-container'>
          {view == true && <div className='top-left-container'>
            
            <div className='top-left-left-container' onClick={handleToggleA} style={{backgroundColor: 'var(--bg0)'}}>Courses</div>
            <div className='top-left-right-container' onClick={handleToggleB} style={{backgroundColor: 'var(--bg2)'}}>Schedule</div>

          </div>}
          {view == false &&<div className='top-left-container'>
            
            <div className='top-left-left-container' onClick={handleToggleA} style={{backgroundColor: 'var(--bg2)'}}>Courses</div>
            <div className='top-left-right-container' onClick={handleToggleB} style={{backgroundColor: 'var(--bg0)'}}>Schedule</div>

          </div>}

          <div className='bottom-left-container'>
            {view && <CourseView />}

          </div>
        </div>
        <div className='right-container'>
            {view && <Calendar active={view}/>}

          
          <div className='bottom-right-container'>
            <p>CREDITS DISPLAYED: </p>
            
          </div>
        </div>
      </div>
    </div>
  )
/*
  if(activeView === 0){
    return (
      <div className="App">
        <coursesView/>
      </div>
    );
  } else{
    return (
      <div></div>
    )
  }*/
}

export default App;