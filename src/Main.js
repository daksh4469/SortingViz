import React, { useEffect, useState } from 'react';
import './Main.css'
function Main(){
    const [array,setArray] = useState([]);
    const [start,setStart] = useState(false);

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    function generateNewArray(){
        if(start){
            return;
        }
        let newarray = [];
        for(let i = 0;i<100;i++){
            newarray.push(Math.floor(Math.random()*(991)+10));
        }
        setArray(newarray);
        console.log(array);
    }

    const arraysort = async()=>{
        if(start){
            return;
        }
        let temp;
        setStart(true);
        let i1 = 0,i2 = 0;
        for(let i = 0;i<99;i++){
            for(let j = 0;j<99-i;j++){
                if(array[j]>array[j+1]){
                    temp = array[j];
                    array[j] = array[j+1];
                    document.getElementsByClassName('bars')[j].style.backgroundColor = "red";
                    document.getElementsByClassName('bars')[j].style.height = `${array[j+1]/2}px`;
                    // document.getElementsByClassName('bars')[j].style.backgroundColor = "aquamarine";
                    array[j+1] = temp;
                    document.getElementsByClassName('bars')[j+1].style.backgroundColor = "red";
                    document.getElementsByClassName('bars')[j+1].style.height = `${temp/2}px`;
                    i2 = j+1;
                    i1 = j;
                    // document.getElementsByClassName('bars')[j+1].style.backgroundColor = "aquamarine";
                }
                await sleep(20);
                document.getElementsByClassName('bars')[i1].style.backgroundColor = "aquamarine";
                document.getElementsByClassName('bars')[i2].style.backgroundColor = "aquamarine";
            }
            // document.getElementsByClassName('bars')[99].style.backgroundColor = "blue";
            await sleep(75);
        }
        setStart(false);
    }

    useEffect(()=>{
        generateNewArray();
    },[]);

    return (
        <div>
            <h1>SortingViz</h1>
            <button onClick={generateNewArray} style={start ? {opacity: "0.5"} : {opacity: "1"}}>Generate New Array</button>
            <button onClick={arraysort} style={start ? {opacity: "0.5"} : {opacity: "1"}}>Sort</button>
            <div className="array-container">
                {
                    array.map((num)=>(
                        <div className="bars" style={{height: `${num/2}px`}}>
                            {/* {num} */}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Main;