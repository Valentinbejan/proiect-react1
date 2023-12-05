import { Spin } from "antd";
const CustomSpin = () => {
  return (
    <div>
      <div>
        <Spin
          style={{
            position: "absolute",
            top: "530px",
            left: "1100px",
          }}
        />
      </div>
      <div>
        <Spin
          style={{
            position: "absolute",
            top: "570px",
            left: "1100px",
          }}
        />
      </div>
      <div>
        <Spin
          style={{
            position: "absolute",
            top: "700px",
            left: "1100px",
          }}
        />
      </div>
      <div>
        <Spin
          style={{
            position: "absolute",
            top: "770px",
            left: "1100px",
          }}
        />
      </div>


    </div>
  );
};
export default CustomSpin;

/*
import { Spin } from 'antd';
import React, { Component } from 'react';
export class Spin extends Component {
    render() {
        return (
        <div>
        <Spin />
        </div>
    )


} }*/
/*
import { Spin } from 'antd';

const CustomSpin = () => {
  return (
    <div>
      <Spin />
    </div>
  );
};

export default CustomSpin;
*/
