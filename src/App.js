import Header from "./Component/Header";
import Footer from "./Component/footer";
import Home from "./Home";
import Presale from "./presale";
import { Routes, Route} from "react-router-dom"



function App() {
  return (
    <div className="flex flex-col">
    
    
    <Header/>
    <Routes>
    <Route path="/" element={ <Home/>}/>
    <Route path="/Presale" element={ <Presale/>}/>

    </Routes>
    <Footer/>
  
    

    </div>
  );
}

export default App;
