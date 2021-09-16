import React, {useState} from 'react'
import Material from './filters/Material'
import Color from './filters/Color'
import {Link} from "react-router-dom";


const Filter = (data) =>{
    const [state, setState] = useState(true)
    console.log(data.url)
    const show_hide = (e) => {
        if(e.target.parentNode.className === 'filter' || e.target.parentNode.className === 'mark'){
            if(state){
                let filter = e.target.parentNode
                filter.style.maxHeight = "400px"
                let mark = filter.querySelector('.mark')
                mark.style.transform = 'rotate(-270deg)'
                setState(false)
            }else{
                let filter = e.target.parentNode
                filter.style.maxHeight = "28px"
                let mark = filter.querySelector('.mark')
                mark.style.transform = 'rotate(-90deg)'
                setState(true)
            }
        }
    }


    return (
        <div className="filters">
            <div className="filter" onClick={show_hide}>
                <h3>Material</h3>
                <div className="mark">〱</div>
                <Material data={data} />
                <div>
                    <button>Clear</button>
                    <Link to={`/${data.url}`}><button className="btn_done" >Done</button></Link>
                    
                </div>
            </div>

            <div className="filter" onClick={show_hide}>
                <h3>Color</h3>
                <div className="mark">〱</div>
                    <Color data={data} />
                <div>
                    <button>Clear</button>
                    <Link to={data.url}><button className="btn_done" name="color" >Done</button></Link>
                </div>
            </div>
        </div>
    )

}

export default Filter