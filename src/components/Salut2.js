/*
import React, { Component } from 'react';

export class Salut2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'blue',
        };
    }

    changeColor = () => {
        const newColor = this.state.color === 'blue' ? 'red' : 'blue';
        this.setState({ color: newColor });
    }

    render() {
        return (
            <div className="mt-5 f-flex jsutify-content-left">
                <h3>Salut2.</h3>
                <button 
                  style={{ backgroundColor: this.state.color }} 
                  onClick={this.changeColor}
                >
                    Apasa pe mine
                </button>
            </div>
        )
    }
}
*/

import React, { Component } from "react";

export class Salut2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorIndex: 0,
      colors: [
        "blue",
        "red",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "brown",
        "black",
      ],
    };
  }

  changeColor = () => {
    this.setState((prevState) => ({
      colorIndex: (prevState.colorIndex + 1) % prevState.colors.length,
    }));
  };

  render() {
    return (
      <div
        className="mt-5 d-flex justify-content-start"
        style={{
          backgroundColor: this.state.colors[this.state.colorIndex],
          height: "200px",
          width: "200px",
          borderRadius: "10%",
          position: "absolute",
          top: "500px",
          left: "500px",
        }}
        onClick={this.changeColor}
      ></div>
    );
  }
}
