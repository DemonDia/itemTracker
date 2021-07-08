import Transaction from "../components/transaction"
import {useGlobalContext} from "../context"
import React, {useState,useEffect} from "react"
import Axios from "axios"
const History = () =>{
    const [transactions, getTransactions] = useState([])
    const {search,setPage,colName,order} = useGlobalContext()
    // useEffect(()=>{
    //     Axios.get("http://localhost:3302/api/getTransactions").then((response)=>{
    //         getTransactions(response.data)
    //         setPage("transaction")
    //         window.scrollTo(0, 0)
    //     })
    // },[])

    useEffect(()=>{
        Axios.get("https://task-trackerzxc.herokuapp.com/api/getTransactions",{params:{colName:colName,order:order}}).then((response)=>{
            getTransactions(response.data)
          setPage("transaction")
          window.scrollTo(0, 0)
        })
      },[colName,order])
    return (
    <div id ="history">
        <table>
            <tbody>
                <tr>
                        <th> ID 

                        </th>

                        <th> Item ID 

                        </th>


                        <th>Type
                            
                        </th>

                        <th>Qty
                            
                        </th>

                        <th>Date
                            
                        </th>
                        

                </tr>

                {
           
                    !transactions?null:
                        //   !colName?null:
                          transactions.filter(searchItem => String(searchItem[colName]).toLowerCase().includes(search.toLowerCase()) || searchItem[colName] ==="").map(searchItem =>
                      <Transaction key = {searchItem["id"]} transaction = {searchItem}/>
                      )
                }



            </tbody>
        </table>
    </div>
  
    );
  }
  
  export default History;