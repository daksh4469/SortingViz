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

    function arraysort(){
        let temp;
        for(let i = 0;i<99;i++){
            for(let j = 0;j<99-i;j++){
                if(array[j]>array[j+1]){
                    temp = array[j];
                    array[j] = array[j+1];
                    document.getElementsByClassName('bars')[j].style.height = `${array[j+1]/2}px`;
                    array[j+1] = temp;
                    document.getElementsByClassName('bars')[j+1].style.height = `${temp/2}px`;
                }
            }
        }

    }

    useEffect(()=>{
        generateNewArray();
    },[]);

    return (
        <div>
            <h1>Hello World</h1>
            <button onClick={generateNewArray}>Generate New Array</button>
            <button onClick={arraysort}>Sort</button>
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