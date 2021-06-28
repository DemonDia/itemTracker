
import { MdSystemUpdateAlt,MdDelete,MdCancel } from "react-icons/md";
import { useParams, Link } from "react-router-dom";
import Axios from "axios"
import React, {useEffect,useState} from "react";
import {useGlobalContext} from "../context"
function EditItem() {
  let {id} = useParams(
  )
  const [currentItem,setCurrentItem] = useState(null) // item chosen


  const [newName,setNewName] = useState("")
  const [newQty,setNewQty] = useState(0)
  const [newMinQty,setNewMinQty] = useState(0)

  const {setPage} = useGlobalContext()

  useEffect(()=>{
    // console.log(id)
    Axios.get("/api/getItem",{params:{itemId:id}})
    .then((result)=>{
      setPage("edit")
      if(!currentItem){
        // const item = result.data
        setCurrentItem(result.data)
        
      }
      else{
        setNewName(currentItem.name)
        setNewQty(currentItem.qty)
        setNewMinQty(currentItem.minQty)
      }
      
    })
  },[currentItem])

// console.log(currentItem)

  const handleName = (e) =>{
    setNewName(e.target.value)
    // console.log(newName)
  }
  const handleQty = (e) =>{
    setNewQty(e.target.value)
  }
  const handleMinQty = (e) =>{
    setNewMinQty(e.target.value)
  }

  const updateItem = () =>{
    //  parse in the updated values and the ID
    console.log(id)
    console.log(newName,currentItem.name)
    console.log(newQty,currentItem.qty)
    console.log(newMinQty,currentItem.minQty)
    let currID = parseInt(id)
    let intNewQty = parseInt(newQty)
    let intNewMinQty = parseInt(newMinQty)
    let action = "UPDATE"
    let error = false
    // if nth changes
    console.log("newmin",intNewMinQty)
    console.log("newqty",intNewQty)
    if((newName === currentItem.name) && (newQty ===currentItem.qty)&& (newMinQty === currentItem.minQty)){
      console.log("no change")
    }
    else{
    if((intNewQty >= 0) &&	(intNewMinQty > 0)){
    if(intNewQty>currentItem.qty){
      action = "RESTOCK"
      // setAction("REFILL")
      console.log(action)
    }
    else if(intNewQty < currentItem.qty){
      // setAction("REFILL")
      action = "USE"
      console.log(action)
    }
  
  
  }
    else{
      error = true
      console.log("error")
    }
    console.log("error",error)
    if(error === false){
    Axios.post("/api/updateItem",{itemId:currID,name:newName,qty:intNewQty,minQty:intNewMinQty,action:action})}
    // 

  }}

  const deleteItem = () =>{
    console.log(id)
    // id = parseInt(id)
    Axios.post("/api/deleteItem",{itemId:id})
    console.log("done")
  }
  return (
    <div id ="edit">
      {
        !currentItem? <h1>Item not found</h1>:
         
          <form>
          <h3 style = {{"textAlign":"center"}}>Update Good's Name</h3>
          <table className = "formTable">
            <tbody>
              <tr>
                <th>ID:</th>
                <td>{currentItem.itemId}</td>
              </tr>
  
              <tr>
                <th>Name:</th>
                <td><input type= 'text' defaultValue = {currentItem.name} onChange = {(e)=>{handleName(e)}}/> </td>

              </tr>
  
              <tr>
                <th>Current Qty:</th>
                <td><input type= 'number' defaultValue = {currentItem.qty}  onChange = {(e)=>{handleQty(e)}}/> </td>
              </tr>
  
              <tr>
                <th>Min Qty:</th>
                <td><input type= 'number' defaultValue = {currentItem.minQty}  onChange = {(e)=>{handleMinQty(e)}}/></td>
              </tr>
  
              <tr>
                <th>Status:</th>
                <td>{currentItem.status}</td>
              </tr>
              <tr>
                <td colSpan = "2" style = {{"textAlign":"center"}}>
                  <Link to  = "/itemTracker/" onClick = {updateItem}>
                    <button>Update <MdSystemUpdateAlt/></button>
                  </Link>
                  </td>
              </tr>
              <tr>
                <td colSpan = "2" style = {{"textAlign":"center"}}>
                  <Link to  = "/itemTracker/" onClick = {deleteItem}>

                    <button>Delete <MdDelete/></button>
                  </Link>
                  </td>
                  
              </tr>
  
              <tr>
                <td colSpan = "2" style = {{"textAlign":"center"}}>
                  <Link to = "/itemTracker/">
                    <button>Cancel <MdCancel/></button>
                  </Link>
                </td>
              </tr>
  
  
            </tbody>
          </table>
  
        </form>
      
        
        

      }


    </div>
    

  );
}

export default EditItem;