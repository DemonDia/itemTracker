
import React, {useState, useRef,useEffect} from "react"
import { BrowserRouter, Route, Link } from "react-router-dom";
import {FaBars} from "react-icons/fa";
import {useGlobalContext} from "../context"
// import Axios from "axios"

// import { BiSearch } from "react-icons/bi";


    const Navbar = () =>{
        const [showLinks,setShowLinks] = useState(false);
        const linksContainerRef = useRef(null);
        const linksRef = useRef(null);
        const {search,setSearch,page} = useGlobalContext()
        const handleChange = (e)=>{
            setSearch(e.target.value)
        }
    
        useEffect(()=>{//callback
            //check link height and then change height
            const linksHeight = linksRef.current.getBoundingClientRect().height
            if(showLinks){
                linksContainerRef.current.style.height = `${linksHeight}px`
            }
            else{
                linksContainerRef.current.style.height = "0px"
            }
    
        },[showLinks])
        // show options

        return(
            <nav id = "navz">
                <div className = "nav-center">
                    <div className = "nav-header">
                        <button className = "nav-toggle" onClick = {()=> setShowLinks(!showLinks)}>
                            <FaBars/>
                        </button>
                        

                        <input className = "searchBar" type = "text" placeholder = "🔎︎ Search for item"
                        onChange = {(e)=>{handleChange(e)}} 
                        value = {search}></input>

                    </div>
                    {/* {search} */}
                    
    
                    <div 
                        className = "links-container"
                        ref = {linksContainerRef}
                        >
                        <ul 
                        className = "links"
                        
                        ref = {linksRef}>


                            <li>
                                <Link to = "/itemTracker/">Home</Link>
                            </li>
                            <li>
                                <Link to = "/itemTracker/history">History</Link>
                            </li>
 

                        </ul>
                    </div>
                </div>
            </nav>
        )
    
    }
    export default Navbar;