import React, { Component } from 'react';

class Moves extends Component {
    render() {
        return (
            <div className="moves">
                <p>
                    <strong>Moves : {this.props.moves}</strong>
                    <i>Use arrow keys to move numbers</i>
                </p>
            </div>
        );
    }
}

export default Moves;