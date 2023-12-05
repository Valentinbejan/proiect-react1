import React, { Component } from 'react';

export class Salut extends Component {
    getRandomColor() {
        const colors = ['blue', 'red', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black'];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    render() {
        const greetings = [
            'Ce faci?',
            'Faci bine??',
            'Salut frate. Ce mai faci?',
            'Bine fac. Tu?',
            'Sunt la practica.',
        ];
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        const randomColor = this.getRandomColor();

        return (
            <div className="mt-5 d-flex justify-content-left"   style={{
                position: 'absolute',
                top: '70px',
                left: '1150px'
            }}>
                <h3 style={{ color: randomColor }}>{randomGreeting}</h3>
            </div>
        );
    }
}
