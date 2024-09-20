import React from 'react'
import wave from "../assets/wave.svg";
// react router dom import
// it allows to access whatever is in the loader fn
import{Outlet, useLoaderData} from "react-router-dom";

//helper fn
import { fetchData } from '../helpers'
//componenets
import Nav from '../components/Nav';
//LOADER FN

// when you hit a path this fn tells how to load that data in 
// each individual route

//exporting this fn so that u can import this in app.jsx
export function mainloader(){

// this fn hits some end point and loads it and passes it back

    // load a username
    const userName=fetchData("userName");   //username is the key
//retruning an obj bcz u need to return a couple of things
    return{userName}

}

const Main = () => {
    // useLoaderData is a hook 

    // u get this username from the fn above everytime
    // u hit this route
    const {userName}=useLoaderData()
    return (
    <div className='Layout'>
    <Nav userName={userName}/>
    {/* it is like a slot- 
    any children that are going to pass down will drop 
    in the outlet componenent */}
    <main>
    <Outlet/>
    </main>
    <img src={wave}   
    style={{marginTop:'90px'}}
    alt="wave svg"/>
    </div>
  )
}

export default Main