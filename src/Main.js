import React, { useEffect, useState } from 'react';
import './Main.css'
function Main(){
    const [array,setArray] = useState([]);
    const [start,setStart] = useState(false);
    const [arraysize,setArraysize] = useState(50);

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    function generateNewArray(){
        if(start){
            return;
        }
        let newarray = [];
        for(let i = 0;i<arraysize;i++){
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
        for(let i = 0;i<arraysize-1;i++){
            for(let j = 0;j<arraysize-1-i;j++){
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
                await sleep(2000/arraysize);
                document.getElementsByClassName('bars')[i1].style.backgroundColor = "aquamarine";
                document.getElementsByClassName('bars')[i2].style.backgroundColor = "aquamarine";
            }
            // document.getElementsByClassName('bars')[99].style.backgroundColor = "blue";
            await sleep(75);
        }
        setStart(false);
    }

    const initial = async()=>{
        await sleep(1000);
        changeArraysize();
    }

    useEffect(()=>{
        generateNewArray();
        // initial();
    },[arraysize]);

    function changeArraysize(){
        let as = prompt("Please enter the array size between 10 and 100");
        console.log("as: "+as);
        if(as.length==0){
            changeArraysize();
        }
        setArraysize(as);
        generateNewArray();
    }

    return (
        <div>
            <h1>SortingViz</h1>
            <button onClick={generateNewArray} style={start ? {opacity: "0.5"} : {opacity: "1"}}>Generate New Array</button>
            <button onClick={changeArraysize} style={start ? {opacity: "0.5"} : {opacity: "1"}}>Change Array Size</button>
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