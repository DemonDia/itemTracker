const Transaction = ({transaction}) =>{

    
    return(
                    <tr className = "transaction">
                        <td>
                            {transaction.id}
                        </td>

                        <td>
                           {transaction.itemID}
                        </td>


                        <td>
                        {transaction.transType}
                        </td>

                        <td>
                        {transaction.qty}
                        </td>
                        <td>
                        {transaction.transDate}
                        </td>
                    </tr>

    )

}
export default Transaction;