

import React, { Component } from 'react';

/*
import {Button} from "antd"

const Home = () => {
    return (
        <div>
            <Button>ghjgjhgjh</Button>
            </div>
    )
}
*/

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
const Home = () => (
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
      defaultValue={[]}
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
      defaultValue={[]}
      onChange={handleChange}
      options={options}
    />
  </Space>
);



export default Home;