import 'bootstrap/dist/css/bootstrap.min.css';
import Menu  from './component/menu'
import Login  from './component/login'
import Signup  from './component/signup'
import Home   from './component/home'

import { BrowserRouter as Router,Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Route  path="/" component={Menu } />
        <Route  path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Router>
   </>
  );
}

export default App;
