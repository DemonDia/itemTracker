import './App.css';
import Home from "./pages/home";
import Edit from "./pages/edit";
// import Works from "./pages/works";
import History from "./pages/history"
import NavBar from "./components/navbar"
import Filter from "./components/filter"
import {useGlobalContext} from "./context"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  const {page} = useGlobalContext()
  return (
    <div>
      
      <Router>
        <NavBar/>
        {
          !(page==="edit")?<Filter/>:null
        }
        

        <div id  = "body">
          <Switch>
            <Route exact path = "/itemTracker"><Home/></Route>
            <Route  exact path = "/itemTracker/history"><History/></Route>
            <Route  exact path = "/itemTracker/edit/:id"><Edit/></Route>
          </Switch>


        </div>
      </Router>
    </div>
  );
}

export default App;
