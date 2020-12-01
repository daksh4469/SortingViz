import React, { useEffect, useState } from 'react';
import './Main.css'
function Main(){
    const [array,setArray] = useState([]);

    function generateNewArray(){
        let newarray = [];
        for(let i = 0;i<100;i++){
            newarray.push(Math.floor(Math.random()*(991)+10));
        }
        setArray(newarray);
        console.log(array);
    }

    useEffect(()=>{
        generateNewArray();
    },[]);

    return (
        <div>
            <h1>Hello World</h1>
            <button onClick={generateNewArray}>Generate New Array</button>
            <button>Sort</button>
            <div>
                {
                    array.map((num)=>(
                        <div className="bars" style={{height: `${num/2}px`}}>
                            {num}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Main;