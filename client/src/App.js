import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Allclasses from "./pages/allclasses/Allclasses";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Homepage from "./pages/hompepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage/>}/>
        <Route path="/allclasses" element={<Allclasses/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
