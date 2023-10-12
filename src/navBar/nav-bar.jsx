import React, { useContext } from "react";

import { GlobalsContext } from "../Context/GlobalContext";
import './style.css';


export const Navbar = () => {

    const { speed, setSpeed, len, setLen } = useContext(GlobalsContext);

    return (
        <nav>
            <div className="nav-main">
                <ul className="menu">
                    <li>
                        <b>Sorting Visualizer</b>
                    </li>
                    <div className="nav-right">
                        <li style={{
                            display: 'flex',
                            borderRight: '1px solid white',
                            paddingRight: '8px',
                            borderLeft: '1px solid white'
                        }}>
                            <p>Speed</p>
                            {/*<input type="range" min="0" max="10" onInput={e => this._rangeInput()} onChange={e => this._rangeChange(e)}/>*/}
                            <p style={{ fontSize: 12, marginTop: 20, marginLeft: 4, }}>{10 - speed}</p>
                            <input
                                className="slider__input_slider"
                                type="range"
                                min="1"
                                max="10"
                                step="0.8"
                                value={10 - speed}
                                onChange={e => setSpeed(e.target.value)}
                            />
                        </li>
                        <li style={{ display: 'flex' }}>
                            <p>Array Size</p>

                            <p style={{ fontSize: 12, marginTop: 20, marginLeft: 4, }}>{len}</p>
                            <input
                                className="slider__input_slider"
                                type="range"
                                min="10"
                                max="180"
                                step="1"
                                value={len}
                                onChange={e => setLen(e.target.value)}
                            />
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    );
}
