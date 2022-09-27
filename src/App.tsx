import React, {useEffect, useState} from 'react';
import './App.css';
import {useDebounce} from "use-debounce";

// import useDebounce from "./useDebounce";

function App() {
    type Point = {
        x: number
        y: number
    }
    useEffect(() => {
        let initialState: Point[][] = [[]]
        for (let y = 0; y < 20; y++) {
            let row = []
            for (let x = 0; x < 30; x++) {
                row.push({x, y})
            }
            initialState.push(row);
        }
        setGrid(initialState)
    }, [])
    const [grid, setGrid] = useState<Point[][]>([])
    const [hoveredPoint, setHoveredPoint] = useState<Point>({x: 0, y: 0})
    const [counter, setCounter] = useState(0)
    const [debouncedValue] = useDebounce<Point>(hoveredPoint, 200)
    return (
        <>
            <div>hover: {debouncedValue.x}/{debouncedValue.y}</div>
            <div>counter: {counter}</div>
            <div id="container"
                 onClick={event => setCounter(counter + 1)}
            >
                {grid.map((row, index) =>
                    <span key={index}>
                        {row.map((p, index) =>
                            <span
                                key={index}
                                onMouseEnter={() => setHoveredPoint(p)}
                            >
                            </span>
                        )}
                    </span>
                )}
            </div>
        </>
    );
}

export default App;
