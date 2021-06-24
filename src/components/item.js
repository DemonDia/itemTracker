import { BrowserRouter, Route, Link } from "react-router-dom";

// status: OK, REFILL
const Item = ({item}) =>{
    // const id = item.itemId
    // console.log(id)
    // go to the edity
    // console.log(item)

    return(
        
        <div className = "itemContainer"><Link to = {`/itemTracker/edit/${item.itemId}`}>
            <table>
                <tbody>

                    <tr>
                        <th>ID:</th>
                        <td>{item.itemId} </td>
                    </tr>


                    <tr>
                        <th>Name:</th>
                        <td>{item.name}</td>
                    </tr>

                    <tr>
                        <th>Qty:</th>
                        <td>{item.qty}</td>
                    </tr>

                    <tr>
                        <th>Min Qty:</th>
                        <td>{item.minQty}</td>
                    </tr>

                    <tr>
                        <th>Status:</th>
                        <td>{item.status}</td>
                    </tr>
                    <tr>
                        <th>Added Date:</th>
                        <td>{item.addedDate}</td>
                    </tr>
                </tbody>
            </table>
            </Link></div>
        
    )
}
export default Item;
