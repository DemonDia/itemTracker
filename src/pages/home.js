import Item from "../components/item"
import AddItem from "../components/additem"
import Axios from "axios"
import React, {useState,useEffect} from "react"
import {useGlobalContext} from "../context"
function Home() {
  // for the item
  const {search,setPage,colName,order} = useGlobalContext()
  const [itemList,setItemList] = useState([])
  // uploading the items into the DB
  useEffect(()=>{
    Axios.get("https://task-trackerzxc.herokuapp.com/api/getItems").then((response)=>{
      setItemList(response.data)

      setPage("item")
      window.scrollTo(0, 0)
    })
  },[])
  useEffect(()=>{
    Axios.get("https://task-trackerzxc.herokuapp.com/api/getItems",{params:{colName:colName,order:order}}).then((response)=>{
      setItemList(response.data)
      setPage("item")
      window.scrollTo(0, 0)
    })
  },[colName,order])

// console.log(colName)
// console.log("itemList",itemList)
  return (
  <div id ="home">
    <AddItem/>
    { 
    
      !itemList?null:
            !colName?null:
      itemList.filter(searchItem => String(searchItem[colName]).toLowerCase().includes(search.toLowerCase()) || searchItem[colName] ==="")
      .map(searchItem =>
        <Item key = {searchItem["itemId"]} item = {searchItem}/>
        )


    }
      
  </div>

  );
}

export default Home;