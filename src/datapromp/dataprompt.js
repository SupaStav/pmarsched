import './dataprompt.css';
import Schedule from '../util/schedule';
import { useState, useEffect } from "react";

import './createschedule.css';

    let pretdat = [
        {
            'id': 'a',
            
        },
        {
            'id':'b'
        }
    ]

function getSchedules()
{
    let schedule = JSON.parse(localStorage.getItem("schedules"));
    if(schedule == null || schedule == "")
    {
        let a = new Schedule;
        a.id = "Default";
        return [a];
    }
    return schedule;
    /*
    for(let i = 0; i < schedule.length(); i++)
    {
        if(schedule.id == name)
        {
            return schedule;
        }
    }*/



        // temp
 /*
    for(let i = 0; i < pretdat.length; i++)
        {
            if(pretdat[i].id == name)
            {
                return pretdat[i];
            }
        }
    return null;*/


}


function getActiveSchedule()
{
    let schedule = JSON.parse(localStorage.getItem("schedule"));
    if(schedule == null || schedule == "")
        {
            return 'Default'
        }
    return schedule;
}

function Dataprompt()
{
    const [create, setCreate] = useState(false)
    const [schedules, updateSchedules] = useState(getSchedules());
    const [sched, setSelectedValue] = useState(getActiveSchedule());
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    
    useEffect(() => {
        // storing input name
        localStorage.setItem("schedule", JSON.stringify(sched));
    }, [sched]);

    return (
                  
          <div className='bottom-right-container'>            
            <div className='schedule'>
            <select value={sched}>
                {schedules.map((i) => (<option key={i.id} value={i.id} onClick={handleChange}>{i.id}</option>))}
            </select>
            
            <div className='addSchedule' onClick={()=>setCreate(true)}><b>+</b></div>
            <p style={{display:'inline-block', marginLeft:'5px'}}>SCHEDULE</p>

            {create &&     <div className="createSchedule">
                Create new schedule:
                <div className='checkButton'>
                    <i className='material-icons' style={{scale:'.75'}}>check</i>
                </div>
                <div className='checkButton' style={{backgroundColor:'red'}} onClick={()=>setCreate(false)}>
                    <i className='material-icons' style={{scale:'.75'}}>close</i>
                </div>


            </div>}
            </div>  
            <p>CREDITS DISPLAYED: </p>
            
          </div>
    )
}

export default Dataprompt;