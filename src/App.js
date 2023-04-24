import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./componets/navbar/index";
import Body from "./componets/body/index";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Body/>

    </BrowserRouter>
  );
}

export default App;
