
/*
import React, { Component } from 'react';

export class Department extends Component {
    render() {
        return (
            <div className="mt-5 f-flex jsutify-content-left">
                <h3>Welcome to the Department Page. Salut.</h3>
            </div>
        )
    }
}
*/


import React, { Component } from 'react';
import { Checkbox } from 'antd';

export class Department extends Component {
    render() {
        return (
            <div  className="mt-5 d-flex justify-content-left"
            style={{
           
                top: '740px',
                left: '500px',
                position: 'absolute',
                top: '100px',
                left: '160px'
            }}
            
            >
                <Checkbox>Aici este un Checkbox</Checkbox>
            </div>
        )
    }
}
