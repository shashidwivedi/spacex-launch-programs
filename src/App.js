import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Filters from './Filters';
import LaunchPrograms from './LaunchPrograms';

const YEARSLIST = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016,
                    2017, 2018, 2019, 2020];

function App() {
  const [year, setYear] = useState('');
  const [successLaunch, setSuccessLaunch] = useState();
  const [successLanding, setSuccessLanding] = useState();
  const [launches, setLaunches] = useState([]);
  const [url, setUrl] = useState(
    `https://api.spacexdata.com/v3/launches?limit=100`
  )

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      console.log(result.data);
      setLaunches(result.data);
    };
 
    fetchData();
  }, [url]);

  useEffect(() => {
    setUrl(
      `https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=${successLaunch}&amp;land_success=${successLanding}&amp;launch_year=${year}`
    )
  }, [year, successLaunch, successLanding]);



  return (
    <div className="App">
      <header className="App-header">
        <h1>SpaceX Launch Programs</h1>
        <div className="row-md">
          <Filters yearslist={YEARSLIST} 
            year={year} 
            setYear={setYear} 
            setSuccessLaunch={setSuccessLaunch} 
            setSuccessLanding={setSuccessLanding} 
            successLaunch={successLaunch} 
            successLanding={successLanding} 
          />
          <LaunchPrograms launches={launches} />
        </div>
        <p className="footnote"><b>Developed By:</b> Shashi</p>
      </header>
    </div>
  );
}

export default App;
