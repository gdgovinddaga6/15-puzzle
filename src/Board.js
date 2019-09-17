import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
    render() {
        var cols = [];
        for(let i=0; i<16; i++)
        {
            var numberDiv = <div key={"square-"+i} className="column">
                                <Square number={this.props.numbers[i]} />
                            </div>;
            var rowSeperationDiv = <div key={"row-"+i} className="w-100"></div>;

            if(i%4 === 0 && i!==0)
            {
                cols.push(rowSeperationDiv);
            }
            cols.push(numberDiv);
        }
        return (
            <div className="board-container">
                <div className="board">
                    <div className="container">
                        <div className="row">
                            {cols}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;