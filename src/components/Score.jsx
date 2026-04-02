import React, { Component } from 'react';
import '../App.css'
 
class Score extends Component {
    render() {
        const { score, onNextQuestion } = this.props;
 
        return (
            <div>
                <h2 className="mt-5">Ваша оцінка: {score}</h2>
            </div>
        );
    }
}
 
export default Score;
