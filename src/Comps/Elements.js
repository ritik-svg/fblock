import React, {useState, useEffect} from 'react'
import './Input.css';

const url="https://sheetdb.io/api/v1/t0eh3k856nz7v";

export default function Elements({Text}) {

    const [items, setInfo] = useState([]);

    const fetchUsers = async(API) => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            if(data.length > 0) {
                 setInfo(data);
            }
        }catch(e) {
            console.error()
        }
    }
    useEffect(()=>{
        fetchUsers(url);
    }, [])
    const foundItem=items.find((item)=>{
        return item.Symbol === Text
      })
      
  return (
    <>
    <div className='labelStyle'>
        {foundItem ? (
        <div>
            <h4>Name: {foundItem.Name}</h4>
            <h4>Atomic Number : {foundItem.AtomicNo}</h4>
            <h4>Electronic Configuration: </h4>
            <h1>[{foundItem.NobleG}] {foundItem.Series}f<sup> {foundItem.F}</sup> {parseInt(foundItem.Series, 10)+1}d<sup>{foundItem.D}</sup>  {parseInt(foundItem.Series, 10)+2}s<sup>2</sup></h1>
        </div>
        ) : (
            <div>
            <h6>Enter the symbol of a valid f-block element</h6>
            </div>
        )}
    </div>
    </>
  )
}
