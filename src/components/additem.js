import React, {useState} from "react"
import Axios from "axios"

const AddItem = () =>{
    const [itemName,setItemName] = useState("")
    const [minQty,setMinQty] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(itemName)
        console.log(minQty)
        // const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ')
        // console.log(currentDate)
        if(itemName){
            if(minQty){
                if(minQty > 0){
                    setItemName("")
                    setMinQty("")
                    Axios.post("https://task-trackerzxc.herokuapp.com/api/addItem",{
                        itemName:itemName,minQty:minQty
                    }).then(()=>{
                        console.log("done")
                    })

                }
                else{
                    console.log("minimum qty must be more than 0")
                }

            }
            else{
                console.log("minimum qty cannot be empty")
            }

        }
        else{
            console.log("name cannot be empty")
        }
        
    }
    return(


        <div className = "addItem">
            <form>
                <b><label>New item:</label><br></br></b>
                <input type = "text" placeholder = "New item name"
                value = {itemName} onChange = {(e)=>{setItemName(e.target.value)}}/>
                <b><label>Min quantity:</label><br></br></b>

                <input type = "number" placeholder = "New item min qty"
                value = {minQty} onChange = {(e)=>{setMinQty(e.target.value)}}/>
                <button onClick = {(e)=>{handleSubmit(e)}}>Add</button>
            </form>
        </div>


    )
}
export default AddItem;