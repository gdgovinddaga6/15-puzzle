import React, { Component } from 'react';
import Moves from './Moves';
import Board from './Board';
import { UP, LEFT, RIGHT, DOWN } from './constants/directions';
import {shuffle, getEmptyIndex, getNeighbour, checkWin} from './Puzzle'
class Game extends Component {
    constructor(props) 
    {
        super(props);
        this.state = this.newGame();

        this.gameDiv = React.createRef();
    }

    componentDidMount() {
        this.focusGameDiv();
    }
    
    // forced focus
    focusGameDiv()
    {
        this.gameDiv.current.focus();
    }
    
    render() {
        return (
            <div className="game" onKeyDown={this.handleKeyPress.bind(this)} tabIndex="0" ref={this.gameDiv} onBlur={() => this.focusGameDiv()} >
                <Moves moves={this.state.moves} />
                <Board numbers={this.state.numbers} />
            </div>
        );
    }

    handleKeyPress(e)
    {
        e.preventDefault();
        switch (e.keyCode) 
        {
            case 37:
                this.makeMove(LEFT)
                break;
            case 38:
                this.makeMove(UP)
                break;
            case 39:
                this.makeMove(RIGHT)
                break;
            case 40:
                this.makeMove(DOWN)
                break;
            default  : break;
        }
    }

    makeMove(direction) 
    {
        
        var emptyIndex = this.state.emptyIndex;
        var neighbourIndex = getNeighbour(emptyIndex, direction);
        
        if(neighbourIndex !== -1)
        {
            var numbers = this.state.numbers.slice();
            numbers[emptyIndex] = numbers[neighbourIndex];
            numbers[neighbourIndex] = null;
            emptyIndex = neighbourIndex;
            
            var isSolved = checkWin(numbers);
            if(isSolved === true)
            {
                alert("you solved the puzzle !!");
                this.setState(this.newGame());
            }
            else
            {
                this.setState({
                    numbers : numbers,
                    isSolved : isSolved,
                    moves : this.state.moves + 1,
                    emptyIndex : emptyIndex
                });
            }
        }  
        
    }

    newGame()
    {
        var numbers = shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null]);
        var emptyIndex = getEmptyIndex(numbers);
        
        return {
            moves : 0,
            numbers : numbers,
            emptyIndex : emptyIndex,
            isSolved : true
        }
    }
}

export default Game;