import React from 'react'
import Scroll from '../Scroll'

const Material = (data) =>{
    const material = [
        'Cotton',
        'cotton_(100)',
        'sequins',
        'Denim',
        'Knitted',
        'Jersey',
        'Different',
        'Rubber',
        'Lace',
        'Lacquer',
        'Material',
        'Mesh',
        'Ribbed',
        'Satin',
        'Skin',
        'Artificial_leather',
        'Softshell',
        'Corduroy',
        'Plastic',
        'Wool',
        'With_a_weave']

    return (
        <Scroll arr={material} name="material" data={data.data}/>
    );
}

export default Material