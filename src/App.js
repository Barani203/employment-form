import "./App.css";
import Sidebar from "./Sidebar";
import Tapbar from "./Tapbar";
import Dashboard from "./Dashboard";
import Userlist from "./Userlist";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Usercreate from "./Usercreate";
import Useredit from "./Useredit";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar> </Sidebar>

        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Tapbar />
            <div class="container-fluid">
              {/* <Dashboard/> <Userlist /> */}
              <Routes>
                <Route path="/" element={<Userlist />}></Route>
                <Route path="/user" element={<Userlist />}></Route>
              <Route path="/usercreate" element={<Usercreate/>}></Route>
              <Route path="/user-edit/:id" element={<Useredit/>}></Route>
             
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
