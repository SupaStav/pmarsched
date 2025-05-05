import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <div class="flex-container">
        
        <div className='left-container'>
          <div className='top-left-container'>
            <div className='top-left-left-container'>Courses</div>
            <div className='top-left-right-container'>Schedule</div>
          </div>


          <div className='bottom-left-container'>
            <input name='Filter'/>
          </div>
        </div>
        <div className='right-container'>
          <div className='top-right-container'>
            <div className='top-right-left-container'>
              
              <p style={{marginBottom: 0, marginTop: 0, textAlign: 'start'}}>MON<span style={{float: 'right'}}>FRI</span></p>
              <div className='calendar'>
                <div className='dtlncal'></div>
                <div className='mon'></div>
                <div className='tue'></div>
                <div className='wed'></div>
                <div className='thur'></div>
                <div className='fri'></div>
                </div>
            </div>
            
            <div className='top-right-right-container'>
              <i className='material-icons' style={{flex:1, verticalAlign: 'top', fontSize:'medium'}}>sunny</i>
              <i className='material-icons' style={{fontSize:'medium'}}>bedtime</i>
            </div>
          </div>
          
          <div className='bottom-right-container'>
            <p>CREDITS DISPLAYED: </p>
            
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;
