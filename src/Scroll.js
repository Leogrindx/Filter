import React from 'react'

const Scroll = (arr) =>{
    return (
            <div className="scroll">
                {arr.arr.map(el => (
                    <label key={el} htmlFor={el}>
                    <div className="element">
                        <p>{el}</p>
                        <input type="checkbox" className={arr.name} name={arr.name} id={el} value={el} onClick={arr.data.data}/>
                    </div>
                    </label>
                ))}
            </div>
    )
            
}

export default Scroll