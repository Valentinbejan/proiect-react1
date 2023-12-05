import React from 'react';
import logo from './logo.svg';
import './App.css';




import { Department } from './components/Department';
import { Employee } from './components/Employee';
import { Salut } from './components/Salut';
import { Salut2 } from './components/Salut2';
import Tabletest, { Table } from './components/Tabletest';


import Home from './components/Home';
import CustomSpin from './components/CustomSpin';



function App() {
  return (
    <div className="container">
    <div className="left-half">
      <Home />
      <br /> 
      <br />
      
    <Department />

    <br />
    
    <Salut2 />
    <Tabletest  />
    
    </div>
    <div className="right-half">
    <Salut />
    <br /> 
      
    <Employee />
    <br />
    <CustomSpin />

    </div>
  </div>

/*
<React.Fragment>
  <select>
    <div className="'W-screem h-screen"> 
    <div>

    </div>
    </select>  
    </React.Fragment>

    */
  );
}



/*
import { Select, Space } from 'antd';
const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const App = () => (
  <Space
    style={{
      width: '100%',
    }}
    direction="vertical"
  >
    <Select
      mode="multiple"
      allowClear
      style={{
        width: '100%',
      }}
      placeholder="Please select"
      defaultValue={['a10', 'c12']}
      onChange={handleChange}
      options={options}
    />
    <Select
      mode="multiple"
      disabled
      style={{
        width: '100%',
      }}
      placeholder="Please select"
      defaultValue={['a10', 'c12']}
      onChange={handleChange}
      options={options}
    />
  </Space>
);
*/
export default App;




