import { act, Component } from 'react';
import './calendar.css';

function Calendar()
{
    return(
        <div className='top-right-container'>
        <div className='top-right-left-container'>
              
              <p style={{marginBottom: 0, marginTop: 0, textAlign: 'start'}}>MON<span style={{float: 'right'}}>FRI</span></p>
              <div className='calendar'>
                <div className='dtlncal'></div>
                <div className='mon'>
                  <div className='calClass' style={{height:`calc(${(3/12)*100}% - 2px)`, top: `${(0/12)*100}%`}}></div>
                  <div className='calClass' style={{height:`calc(${(3/12)*100}% - 2px)`, top: `${(6/12)*100}%`}}></div>
                </div>
                <div className='tue'></div>
                <div className='wed'></div>
                <div className='thur'>
                  
                  <div className='calClass' style={{height:`calc(${(1/12)*100}% - 2px)`, top: `${(4/12)*100}%`}}></div>
                </div>
                <div className='fri'></div>
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