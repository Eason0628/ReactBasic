import Square from './Squaer.jsx';

function getNextPlayer (squares) {
    const filledSquares = squares.filter(item => (item === 'X' || item === 'O'));
    let filledNumber = filledSquares.length;
    let nextLetter = (filledNumber % 2 === 0) ? 'X' : "O"
    return nextLetter;
}

// This is the most important point for the BoardGame.
// When the square is clicked, the parent component will re-render and calculate the next player or determine the winner.
function Board ({squares,onChange,winner}) {
    const nextPlayer = getNextPlayer(squares);
    const status = winner ? `${winner} is winner` : `Next player: ${nextPlayer}`;

    const clickHandle = (index) => {
        let currentSquare = squares[index]
        if (currentSquare === null && !winner) {
            const newSquares = squares.slice()
            newSquares[index] = nextPlayer;
            onChange(newSquares);
        }
    }

    return (
        <>
            <span className='status'>{status}</span>
            <div className="board-row">
                <Square value={squares[0]} index={0} onClick={clickHandle} />
                <Square value={squares[1]} index={1} onClick={clickHandle} />
                <Square value={squares[2]} index={2} onClick={clickHandle} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} index={3} onClick={clickHandle} />
                <Square value={squares[4]} index={4} onClick={clickHandle} />
                <Square value={squares[5]} index={5} onClick={clickHandle} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} index={6} onClick={clickHandle} />
                <Square value={squares[7]} index={7} onClick={clickHandle} />
                <Square value={squares[8]} index={8} onClick={clickHandle} />
            </div>
        </>
    );
}
export default Board;