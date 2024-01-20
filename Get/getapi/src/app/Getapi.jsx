"use client"
import React, { useState, useEffect } from "react";

export default function GetApi() {
    let API = "http://hn.algolia.com/api/v1/search?query=html"
    const [loder,setloader] = useState(true);
    
    const fetchApiData = async (url) => {
        try {
            // promise return karta hai to data ko get karne ky ly wait karna padega
            const res = await fetch(url);
            // humara system response ko read nahi kar skta so we need to 
            // convert
            const data = await res.json();
            setloader(false);
            console.log(data); 
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchApiData(API);

    },[]);
    //array dependancy pass kari taki sirf ek baar run ho
    if(loder){
        return (
            <>
            <h1>Loading..</h1>
            </>
        )
    }
    return (
        <div className="App">
            <h1>Get API Call </h1>
            {/* <table border={4} className=" border-violet-950 border-4 ">
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Mobile</td>
                    </tr>
                    {
                        users.map((item, i) =>
                            <tr key={i}>
                                <td>{item.userId}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table> */}
        </div>
    );
}
