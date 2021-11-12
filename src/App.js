import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import './App.css';
import Aboutus from './Pages/Aboutus/Aboutus';
import Contact from './Pages/Contact/Contact';
import Doctordetails from './Pages/Doctordetails/Doctordetails';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Ourdoctors from './Pages/Ourdoctors/Ourdoctors';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header';
import Authprovider from './Context/Authprovider';
import Privateroute from './Pages/Login/Privateroute/Privateroute';
import Contract from './Contract/Contract';
import Notfound from './Notfound/Notfound';
import Addservice from './Pages/Addservice/Addservice';
import MyOrder from './Pages/MyOrder/MyOrder';
import Register from './Pages/Login/Register/Register';
import Dashboard from './Pages/Dashborad/Dashboard';
import ManageAllOrder from './Pages/ManageAllOrder/ManageAllOrder';
import Allservices from './Pages/Allservices/Allservices';

function App() {
  return (
    <div className="App">
       <Authprovider>
       <Router>
          <Header></Header>
           <Switch>
              <Route exact path="/">
                  <Home></Home>
              </Route>

              <Route path="/home">
                  <Home></Home>
              </Route>

              <Route path="/allservices">
                  <Allservices></Allservices>
              </Route>

              <Privateroute path="/ourdoctors">
                  <Ourdoctors></Ourdoctors>
              </Privateroute>

              <Privateroute path="/aboutus">
                  <Aboutus></Aboutus>
              </Privateroute>

              <Route path="/contact">
                  <Contact></Contact>
              </Route>
              <Route path="/register">
                  <Register></Register>
              </Route>

              <Route path="/login">
                  <Login></Login>
              </Route>

              
                
              

              <Privateroute path="/details/:id">
                  <Doctordetails></Doctordetails>
              </Privateroute>
              
              <Privateroute path="/manageallorder">
                  <ManageAllOrder></ManageAllOrder>
              </Privateroute>

              <Privateroute path="/myOrder">
                  <MyOrder></MyOrder>
              </Privateroute>
              <Privateroute path="/dashboard">
                  <Dashboard></Dashboard>
              </Privateroute>

              <Route path="/contract">
                <Contract></Contract>
              </Route>

              <Route path='/addservice'>
                  <Addservice></Addservice>
              </Route>

              <Route path="*">
                  <Notfound></Notfound>
              </Route>

           </Switch>
             <Footer></Footer>
        </Router>
       </Authprovider>
    </div>
  );
}

export default App;
