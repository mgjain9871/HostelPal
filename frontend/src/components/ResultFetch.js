import React,{useEffect, useState} from 'react';
import ShowComplaint from './ShowComplaint';
import Axios from 'axios'

function ResultFetch() {
    const[data,setData]=useState([]);
    useEffect(()=>{
      const getData = async() => {
            const res=await Axios.get("http://localhost:5000/data");
            setData(res.data);
        }

        getData();

    },[])
    
// console.log(data);
    return (
        <div>
            <ShowComplaint column={data} />
        </div>
    );
}

export default ResultFetch;