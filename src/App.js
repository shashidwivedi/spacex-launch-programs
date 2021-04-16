import { useEffect, useState } from 'react';
import './App.css';
import Filters from './Filters';
import LaunchPrograms from './LaunchPrograms';

const YEARSLIST = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016,
                    2017, 2018, 2019, 2020];

function App() {
  const [year, setYear] = useState('2006');
  const [successLaunch, setSuccessLaunch] = useState();
  const [successLanding, setSuccessLanding] = useState();
  const [launches, setLaunches] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>SpaceX Launch Programs</h1>
        <Filters yearslist={YEARSLIST} year={year} successLaunch={successLaunch} successLanding={successLanding} />
        <LaunchPrograms launches={launches} />
        <p className="footnote"><b>Developed By:</b> Shashi</p>
      </header>
    </div>
  );
}

export default App;
