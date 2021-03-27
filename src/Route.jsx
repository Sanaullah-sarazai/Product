import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";



import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Product/Product";
import ProductItem from "./Components/ProductItem/ProductItem";



function RouterConfig() {

    return (
        <div>
      <Router>
          <Navbar />
           <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/about" component={About} />
               <Route exact path="/Product" component={Product} />
               <Route path="/Product/:id" component={ProductItem} />
               <Route path="*" component={()=><h2>404 Not Found</h2>}/>
           </Switch>
      </Router> 
        </div>
    )
}

export default RouterConfig;