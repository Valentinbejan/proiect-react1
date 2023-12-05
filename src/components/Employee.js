import React, { Component } from 'react';
/*
export class Employee extends Component {
    render() {
        return (
            <div className="mt-5 f-flex jsutify-content-left">
                <h3>Welcome to the Employee Page. Bine fac.</h3>
            </div>
        )
    }
}
*/
/*
import { Button, Space } from 'antd';
const Employee = () => (
  <Space wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Space>
);
*/

/*
import { Button } from 'antd';

export class Employee extends Component {
    render() {
        return (
            <div className="mt-5 f-flex justify-content-left">
                <Button type="primary">Employee</Button>
            </div>
        )
    }
}
*/


import { Button } from 'antd';

export class Employee extends Component {
    render() {
        return (
            <div className="mt-5 d-flex justify-content-left"
            
            style={{
                position: 'absolute',
                top: '150px',
                left: '1050px'
            }}
            >
                <Button type="primary" className="mr-2"  style={{
                position: 'absolute',
                top: '50px',
                left: '10px'
            }}    >Primary Button</Button>
                <Button type="dashed" className="mr-2"    style={{
                position: 'absolute',
                top: '100px',
                left: '50px'
            }}>Dashed Button</Button>
                <Button type="text" className="mr-2"  style={{
                position: 'absolute',
                top: '150px',
                left: '100px'
            }} >Text Button</Button>
                <Button type="link" href="https://www.goolge.com"    style={{
                position: 'absolute',
                top: '200px',
                left: '150px'
            }}>Google</Button>

            </div>
        )
    }
}






