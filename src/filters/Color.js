import React from 'react'
import Scroll from '../Scroll'

const Color = (data) =>{

    const color = [
    'black',
    'brown',
    'beige',
    'gray',
    'white',
    'blue',
    'turquoise',
    'green',
    'olive',
    'yellow',
    'orange',
    'red',
    'pink',
    'plum',
    'gold',
    'silver']

    return (
        <Scroll arr={color} name="color" data={data.data}/>
    );
}

export default Color