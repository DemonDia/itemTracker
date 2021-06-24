import React,{useContext,useState,useEffect} from "react"
const AppContext = React.createContext()


const AppProvider = ({children}) =>{
    const [search,setSearch] = useState("")
    const [filter,setFilters] = useState("")
    

    // for filtering
    const [page,setPage] = useState("") //item or transaction
    const [colName,setColName] = useState(null)
    const [order,setOrder] = useState(null)
    // const [categories,setCategories] = useState([])

    return(
        <AppContext.Provider
        value = {{setSearch,search,
        filter,setFilters,
        page,setPage,
        colName,setColName,
        order,setOrder,
        }}>{children} 
        </AppContext.Provider>
    )
}
export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}