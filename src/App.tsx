import React, {useState} from 'react';
import './App.css';

function App() {
    let initialState = [
        // as rows
        [1, 2, 3, 4, 5, 0, 0, 0, 0, 6, 7, 8],
        [9, 0, 1, 2, 3, 0, 0, 0, 0, 4, 5, 6],
        [7, 8, 9, 0, 1, 0, 0, 0, 0, 2, 3, 4],
        [5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 1, 2],
        [3, 4, 5, 6, 7, 0, 0, 0, 0, 8, 9, 0],
        [1, 2, 3, 4, 5, 0, 0, 0, 0, 6, 7, 8],
        [9, 0, 3, 4, 5, 0, 0, 0, 0, 6, 7, 8],
        [5, 2, 3, 4, 5, 0, 0, 0, 0, 6, 7, 8],
    ];
    const [grid, setGrid] = useState(
        initialState)

    return (
        <>
            <div id="container">
                {grid.map(row =>
                    <span>
                        {row.map(value =>
                            <span>{value}</span>
                        )}
                    </span>
                )}
            </div>
        </>
    );
}

export default App;
