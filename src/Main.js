import React, { useEffect, useState } from 'react';
import './Main.css';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
function Main(){
    const [array,setArray] = useState([]);
    const [start,setStart] = useState(false);
    const [arraysize,setArraysize] = useState(75);
    const [msg,setMsg] = useState("");

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    function generateNewArray(){
        if(start){
            return;
        }
        setMsg("");
        let newarray = [];
        for(let i = 0;i<arraysize;i++){
            newarray.push(Math.floor(Math.random()*(991)+10));
        }
        setArray(newarray);
        console.log(array);
        for(let i = 0;i<array.length;i++){
            document.getElementsByClassName('bars')[i].style.backgroundColor = "aquamarine";
        }
    }

    const arraysort = async()=>{
        if(start){
            return;
        }
        setMsg("");
        let temp;
        setStart(true);
        let i1 = 0,i2 = 0;
        for(let i = 0;i<arraysize-1;i++){
            for(let j = 0;j<arraysize-1-i;j++){
                document.getElementsByClassName('bars')[j].style.backgroundColor = "royalblue";
                document.getElementsByClassName('bars')[j+1].style.backgroundColor = "royalblue";
                await sleep(1000/arraysize);
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
                else{
                    document.getElementsByClassName('bars')[j].style.backgroundColor = "aquamarine";
                    document.getElementsByClassName('bars')[j+1].style.backgroundColor = "aquamarine";
                }
                await sleep(2000/arraysize);
                if(document.getElementsByClassName('bars')[i1].style.backgroundColor!=="blue"){
                    document.getElementsByClassName('bars')[i1].style.backgroundColor = "aquamarine";
                }
                if(document.getElementsByClassName('bars')[i2].style.backgroundColor!=="blue"){
                    document.getElementsByClassName('bars')[i2].style.backgroundColor = "aquamarine";
                }
                // document.getElementsByClassName('bars')[i2].style.backgroundColor = "royalblue";
            }
            for(let k = arraysize-1;k>=arraysize-i-1;k--){
                document.getElementsByClassName('bars')[k].style.backgroundColor = "blue"; 
            }
            // document.getElementsByClassName('bars')[99].style.backgroundColor = "blue";
            await sleep(75);
        }
        document.getElementsByClassName('bars')[0].style.backgroundColor = "blue";
        setStart(false);
        setMsg("Array is Sorted.");
    }

    useEffect(()=>{
        generateNewArray();
    },[arraysize]);

    function changeArraysize(){
        if(start){
            return;
        }
        let as = prompt("Please enter the array size between 10 and 150");
        console.log("as: "+as);
        if(as==null || as.length==0 || as<10 || as>150){
            changeArraysize();
        }
        setArraysize(as);
        generateNewArray();
        for(let i = 0;i<array.length;i++){
            document.getElementsByClassName('bars')[i].style.backgroundColor = "aquamarine";
        }
    }

    return (
        <div>
            <h1>SortingViz</h1>
            <div className="buttons">
            <Button variant="contained" onClick={generateNewArray} style={start ? {opacity: "0.5"} : {opacity: "1"}}>Generate New Array</Button>
            <Button variant="contained" color="secondary" onClick={changeArraysize} style={start ? {opacity: "0.5"} : {opacity: "1"}}>Change Array Size</Button>
            <Button color="primary" variant="contained" onClick={arraysort} style={start ? {opacity: "0.5"} : {opacity: "1"}}>Sort</Button>
            </div>
            <p>{msg}</p>
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