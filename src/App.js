import logo from './logo.svg';
import './App.css';
import Calendar from './calendar/calendar';
import React from 'react';

import { useState, useCallback } from 'react';

function changeViewA()
{
  activeView = true;
  
}

function changeViewB()
{
  activeView = false;
  
}

let activeView;

function App() {
  //0: courseview
  //!0: scheduleview
  const [view, setview ] = useState(true);
  const handleToggle = useCallback(() => setview(false))
  
  return(
    <div className='App'>
              <div class="flex-container">
        
        <div className='left-container'>
          <div className='top-left-container'>
            <div className='top-left-left-container' onClick={handleToggle}>Courses</div>
            <div className='top-left-right-container' onClick={handleToggle}>Schedule</div>
          </div>


          <div className='bottom-left-container'>
            <input name='Filter'/>
          </div>
        </div>
        <div className='right-container'>
            <Calendar active={view}/>

          
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