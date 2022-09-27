import React, {useState} from 'react';
import './App.css';

function App() {
    type Point = {
        x: number
        y: number
    }
    let initialState : Point[][] = [[]]
    for (let y = 0; y < 20; y++) {
        let row = []
        for (let x = 0; x < 30; x++) {
            row.push({x,y})
        }
        initialState.push(row);
    }
    const [grid, setGrid] = useState(initialState)

    return (
        <>
            <div id="container">
                {grid.map(row =>
                    <span>
                        {row.map(p =>
                            <span>{p.x},{p.y}</span>
                        )}
                    </span>
                )}
            </div>
        </>
    );
}

export default App;
