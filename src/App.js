import logo from './logo.svg';
import './App.css';
import {React,useState} from 'react';

function App() {
  const[cityName,setCityName]=useState("");
  const[weatherData,setWeatherData]=useState([]);
  const onChange=(e)=>{
    console.log(e.target.value);
      setCityName(e.target.value);
  }
  const searchCity=()=>{
    fetch("https://api.openweathermap.org/data/2.5/forecast?units=metric&APPID=8ff8452c821d127d7afc17c8988f6e44&q="+cityName)
    .then(res=>res.json())
    .then(json=>{
      setWeatherData(json);
    });
  }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

      <div>
          <input type="text" value={cityName} onChange={onChange} ></input>
          <button onClick={searchCity}>Search</button><br/>
          <div className='col-md-12'>
          {weatherData!=undefined && weatherData.length!=0 &&
          <div>
              <div>
                <h1>{weatherData.city.name}</h1><br/>
                {weatherData.list.splice(0,7).map((dayData,index)=>{   
                  var timestamp=dayData.dt;
                  var date=new Date(timestamp);        
                return(
                  <div>
                  <div>
                    <h6>{date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()}</h6>
                    <h6>{dayData.main.temp_min}  {dayData.main.temp_max}</h6>
                  </div>
                  </div>
                )
                })}
              </div>
            </div>}
          </div>
      </div>
  );
}

export default App;
