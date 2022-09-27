import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    type Point = {
        x: number
        y: number
    }
    useEffect(()=>{
        let initialState: Point[][] = [[]]
        for (let y = 0; y < 20; y++) {
            let row = []
            for (let x = 0; x < 30; x++) {
                row.push({x, y})
            }
            initialState.push(row);
        }
        setGrid(initialState)
    },[])
    const [grid, setGrid] = useState<Point[][]>([])
    const [hoveredPoint, setHoveredPoint] = useState<Point>({x: 0, y: 0})
    const [counter, setCounter] = useState(0)
    return (
        <>
            <div>hover: {hoveredPoint.x}/{hoveredPoint.y}</div>
            <div>counter: {counter}</div>
            <div id="container"
            onClick={event => setCounter(counter+1)}
            >
                {grid.map((row,index) =>
                    <span key={index}>
                        {row.map((p, index) =>
                            <span
                                // key={p.x + '/' + p.y}
                                key={index}
                                onMouseEnter={() => setHoveredPoint(p)}
                                // className={(p.x + p.y) % 2 === 0 ? 'even' : 'odd'}
                            >
                                {/*{p.x},{p.y}*/}
                            </span>
                        )}
                    </span>
                )}
            </div>
        </>
    );
}

export default App;
