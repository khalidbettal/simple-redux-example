import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '../features/theme';

/**
 * Component for changing color.
 */
function ChangeColor() {
    // State hook to store the color value
    const [ color, setColor ] = useState("white");
    const dispatch = useDispatch();

    return (
        <div className='divChongeColor'>
            {/* Input field for entering color */}
            <input  className='inputChongeColor' placeholder='Enter Color' onChange={(e) => setColor(e.target.value)}/>
            {/* Button to trigger color change */}
            <button className='colorButton' onClick={() => dispatch(changeColor(color))}>Change Color</button>
        </div>
    )
}

export default ChangeColor