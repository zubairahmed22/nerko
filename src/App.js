import Header from "./Component/Header";
import HeroSection from "./Component/HeroSection";
import ImageSection from "./Component/imageSection";
import ChooseUs from "./Component/Chooseus";
import Platform from "./Component/platform";
import MultipleChain from "./Component/multipleChain";
import Crew from "./Component/crew";
function App() {
  return (
    <div className="flex flex-col">
    <section className=" h-[700px] bg-[url(../public/assets/collection-grid.png)] bg-no-repeat relative bg-center   bg-cover py-10 opacity-30 ">
   
    </section>
    <Header/>
    <HeroSection/>
    <ImageSection/>
    <ChooseUs/>
    <Platform/>
    <MultipleChain/>
    <Crew/>
    

    </div>
  );
}

export default App;
