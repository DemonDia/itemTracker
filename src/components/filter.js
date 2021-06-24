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
        Axios.get("https://task-trackerzxc.herokuapp.com/api/getTable",{params:{table:page}}).then((response)=>{
            if(response){
                console.log("resp",response.data)

                setCategories(response.data)
                if(categories.length>0){
                        console.log(categories[0].COLUMN_NAME)
                        setColName(categories[0].COLUMN_NAME)

                }

                // setColName(response.data[0].COLUMN_NAME)


            }

        })

    },[page])

    useEffect(()=>{
        // if(!colName){ //set default
            if(categories.length != 0){
                // console.log("cat",categories)
                console.log("cats",categories)
                setColName(categories[0].COLUMN_NAME)
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


// console.log("page",page)
// console.log("categories",categories)
// console.log("colName",colName)
return(
    <div className = "filter">
        <label>Group by: </label>
        <select onChange = {(e)=>{changeCol(e)}}
        defaultValue = {
            colName?colName[0].COLUMN_NAME:null
        }>
            {
                
                categories.map((category,i)=>{
                    return(
                        <option value = {category.COLUMN_NAME} key = {i}>
                            {category.COLUMN_NAME}
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
            {/* <option>
                Ascending
            </option>

            <option>
                Descending
            </option> */}
        </select>

    </div>
)
}
export default Filter;