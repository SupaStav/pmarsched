import './dataprompt.css';
import Schedule from '../util/schedule';
import { useState, useEffect } from "react";

import './createschedule.css';

let currentTerm = "A";
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
        a.id = "Default"
        a.term = "A"
        localStorage.setItem("schedule", `${a.id}`);
        localStorage.setItem("schedules", JSON.stringify([a]));
        return a;
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
    let schedule = localStorage.getItem("schedule");
    if(schedule == null || schedule == "")
        {
            return 'Default'
        }
    return schedule;
}


function Dataprompt()
{
    const [newSchedTerm, setSchedTerm] = useState(currentTerm)
    const [newSchedName, setSchedName] = useState('')
    const [create, setCreate] = useState(false)
    const [schedules, updateSchedules] = useState([].concat(getSchedules())); //avoid having an empty array at first
    const [sched, setSelectedValue] = useState(getActiveSchedule());
    
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleNewTerm = (event) => {
        setSchedTerm(event.target.value);
        window.alert(newSchedTerm)
    }

    const handleNewSchedName = (event) => {
        setSchedName(event.target.value);
    }

    const cancelClick = (event) => {
        setSchedName('')
        setSchedTerm('')
        setCreate(false)
    }

    const saveClick = (event) => {
        //perfom some checks
        if(newSchedName == "")
        {
            window.alert("New schedule needs a name.")
        } else{
            

        let tmps = new Schedule;
        tmps.id = newSchedName;
        tmps.term = newSchedTerm;

        localStorage.setItem("schedules", JSON.stringify([...schedules, tmps]));
        updateSchedules([...schedules, tmps]);

        setSchedName('')
        setSchedTerm('')
        setCreate(false)
        }
    }


    useEffect(() => {
        // storing input name
        localStorage.setItem("schedule", sched);
    }, [sched]);

    return (
                  
          <div className='bottom-right-container'>            
            <div className='schedule'>
            {!create && <select value={sched}>
                {schedules.map((i) => (<option key={i.id} value={i.id} onClick={handleChange}>{i.id}</option>))}
            </select>}
            
            {!create &&<div className='editSchedule'><b><i className='material-icons' style={{marginTop:'4px',fontSize:'small'}}>edit</i></b></div>}
            <div className='addSchedule' style={{ borderRight:'2px solid var(--bg3)', borderLeft:create?'unset':'2px solid var(--bg4)'}} onClick={()=>setCreate(true)}><b><i className='material-icons' style={{ marginTop:'4px',fontSize:'medium', verticalAlign:'center'}}>add</i></b></div>
            
            <p style={{display:'inline-block', marginLeft:'5px'}}>SCHEDULE</p>

            {create &&     <div className="createSchedule">
                
                <div style={{flex:'1'}}>
                <input value={newSchedName} onChange={handleNewSchedName}></input>
                <b style={{display:'inline-block'}}>Schedule Name</b>
                </div>
                <div style={{flex:'1', marginTop:'5px'}}>
                
                <select value={newSchedTerm} onChange={handleNewTerm} style={{outline: '2px solid var(--blue2)',display:'inline-flex', verticalAlign:'middle' , marginRight:'5px'}}>
                    <option>{currentTerm}</option>
                </select>
                <b style={{display:'inline-flex'}}>Term</b>
                </div>
                
                <div style={{flex:'1', marginTop:'5px'}}>
                <div className='checkButton' style={{backgroundColor:'#cc241d'}} onClick={cancelClick}>
                    CANCEL
                </div>
                <div className='checkButton' onClick={saveClick}>
                    SAVE

                </div>
                </div>


            </div>}
            </div>  
            <p>CREDITS DISPLAYED: </p>
            
          </div>
    )
}

export default Dataprompt;