import React,{useState,useEffect} from "react"
import {useGlobalContext} from "../context"
import Axios from "axios"

const Filter = () =>{
    const {page,colName,setColName,setOrder} = useGlobalContext()
    const [categories,setCategories] = useState([])
    // const [colName,setColName] = useState(null)
    // const [order,setOrder] = useState(null)
    const orders = ["asc","desc"]
    console.log("page",page)




    
    useEffect(()=>{
        if(page!==""){
            Axios.get("https://task-trackerzxc.herokuapp.com/api/getTable",{params:{table:page}}).then((response)=>{
                if(response){
                    // console.log("resp",response.data)
                    // console.log("cats",categories)
                    // let cats = [response.data.map()]
                    setCategories(response.data)
                    if(categories.length>0){
                            console.log(categories[0].Field)
                            setColName(categories[0].Field)
    
                    }
    
                    // setColName(response.data[0].COLUMN_NAME)
    
    
                }
    
            })

        }


    },[page])

    useEffect(()=>{
        // if(!colName){ //set default
            if(categories.length != 0){
                // console.log("cat",categories)
                console.log("cats",categories)
                setColName(categories[0].Field)
                setOrder(orders[0])
            }
        // }

    },[categories])
    const changeCol = (e)=>{
        console.log(e.target.value)
        setColName(e.target.value)

    }
    const changeOrder = (e)=>{
        console.log(e.target.value)
        setOrder(e.target.value)

    }


return(
    <div className = "filter">
        <label>Group by: </label>
        <select onChange = {(e)=>{changeCol(e)}}
        defaultValue = {
            colName?colName[0].Field:null
        }>
            {
                
                categories.length<=0?null:categories.map((category,i)=>{
                    return(
                        <option value = {category.Field} key = {i}>
                            {category.Field}
                        </option>
                    )
                })
            }
        </select>
        <label>Sort/Search by: </label>
        <select onChange = {(e)=>{changeOrder(e)}}
        defaultValue = {orders[0]}> 
            {
                orders.map((order)=>{
                    return(
                        <option value = {order} key = {order}>
                            {order+"ending"}
                        </option>
                    )
                })
            }
        </select>

    </div>
)
}
export default Filter;