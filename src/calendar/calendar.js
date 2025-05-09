import { act, Component } from 'react';
import './calendar.css';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import classColors from '../util/color';

function getSchedule()
{
  //let schedule = Cookies.get('schedule');

  let schedule = {
    monday:[
    {
      'classid': 'a123',
      'starttime': 8,
      'endtime': 12
    },
    {
      'classid': 'b123',
      'starttime': 2,
      'endtime': 5
    }
  ],
  tuesday: [
    {
      'classid': 'b123',
      'starttime': 2,
      'endtime': 5
    }
  ],
  wednesday: [
    {
      'classid': 'b123',
      'starttime': 6,
      'endtime': 8
    }
  ],
  thursday: [

  ],
  friday: [
    {
      'classid': 'a123',
      'starttime': 8,
      'endtime': 12
    },
  ]
}

  if(schedule == null)
  {
    return [];
  }
  else {
    return schedule;
  }
}


function Calendar()
{


  const [isHovered, setIsHovered] = useState('');


  const schedmon = getSchedule().monday.map(i => <div className='calClass' onMouseEnter={()=>setIsHovered(`${i.classid}`)} onMouseLeave={()=>setIsHovered('')} style={{
    height:`calc(${((i.endtime-i.starttime)/12)*100}% - 2px)`, 
    top: `${(i.starttime/12)*100}%`,
    background: (isHovered == i.classid) ? `${classColors.yellowsel}` : `${classColors.yellow}`,
    border: (isHovered == i.classid) ? `1px dashed ${classColors.purple}`:`1px dashed var(--bg0)` 
  }}>{i.classid}</div>);
  
  const schedtue = getSchedule().tuesday.map(i => <div className='calClass' onMouseEnter={()=>setIsHovered(`${i.classid}`)} onMouseLeave={()=>setIsHovered('')} style={{
    height:`calc(${((i.endtime-i.starttime)/12)*100}% - 2px)`, 
    top: `${(i.starttime/12)*100}%`,
    background: (isHovered == i.classid) ? `${classColors.yellowsel}` : `${classColors.yellow}`,
    border: (isHovered == i.classid) ? `1px dashed ${classColors.purple}`:`1px dashed var(--bg0)` 
  }}>{i.classid}</div>);

  const schedwed = getSchedule().wednesday.map(i => <div className='calClass' onMouseEnter={()=>setIsHovered(`${i.classid}`)} onMouseLeave={()=>setIsHovered('')} style={{
    height:`calc(${((i.endtime-i.starttime)/12)*100}% - 2px)`, 
    top: `${(i.starttime/12)*100}%`,
    background: (isHovered == i.classid) ? `${classColors.yellowsel}` : `${classColors.yellow}`,
    border: (isHovered == i.classid) ? `1px dashed ${classColors.purple}`:`1px dashed var(--bg0)` 
  }}>{i.classid}</div>);

  const schedthu = getSchedule().thursday.map(i => <div className='calClass' onMouseEnter={()=>setIsHovered(`${i.classid}`)} onMouseLeave={()=>setIsHovered('')} style={{
    height:`calc(${((i.endtime-i.starttime)/12)*100}% - 2px)`, 
    top: `${(i.starttime/12)*100}%`,
    background: (isHovered == i.classid) ? `${classColors.yellowsel}` : `${classColors.yellow}`,
    border: (isHovered == i.classid) ? `1px dashed ${classColors.purple}`:`1px dashed var(--bg0)` 
  }}>{i.classid}</div>);

  const schedfri = getSchedule().friday.map(i => <div className='calClass' onMouseEnter={()=>setIsHovered(`${i.classid}`)} onMouseLeave={()=>setIsHovered('')} style={{
    height:`calc(${((i.endtime-i.starttime)/12)*100}% - 2px)`, 
    top: `${(i.starttime/12)*100}%`,
    background: (isHovered == i.classid) ? `${classColors.yellowsel}` : `${classColors.yellow}`,
    border: (isHovered == i.classid) ? `1px dashed ${classColors.purple}`:`1px dashed var(--bg0)` 
  }}>{i.classid}</div>);



    return(
      
        <div className='top-right-container'>
        <div className='top-right-left-container'>
              
              <p style={{marginBottom: 0, marginTop: 0, textAlign: 'start'}}>MON<span style={{float: 'right'}}>FRI</span></p>
              <div className='calendar'>
                <div className='dtlncal'></div>
                <div className='mon'>
                  {schedmon}
                </div>
                <div className='tue'>
                  {schedtue}
                </div>
                <div className='wed'>
                  {schedwed}
                </div>
                <div className='thur'>
                  {schedthu}
                </div>
                <div className='fri'>
                  {schedfri}
                </div>
                </div>
            </div>
            
            <div className='top-right-right-container'>
              <i className='material-icons' style={{flex:1, verticalAlign: 'top', fontSize:'medium'}}>sunny</i>
              <i className='material-icons' style={{fontSize:'medium'}}>bedtime</i>
            </div>
            </div>
    );
}

export default Calendar;