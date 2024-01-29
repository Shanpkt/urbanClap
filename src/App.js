import Topbanner from "./components/molecules/Topbanner/topbanner";
import Slider from "./components/molecules/policislider/policislider";
import images from "./components/data/policie.json"
import newwothy from "./components/data/newWorthy.json"
import womenSlon from "./components/data/womenSlon.json"
import GoBaner from "./components/molecules/goLaserBaner/goBaner";
import databaner from "./components/data/bannerdata.json"
import Navbar from "./components/molecules/navbar/navbar";
import SliderWrapper from "./components/molecules/sliderWrapper/sliderWrapper";
function App() {
  return (
    <div className="App">
      <Topbanner/>
      {/* <Navbar/>
      <Topbanner/>
      <Slider images={images}/>
      <Slider images={newwothy}/> */}
      <Slider images={womenSlon}/>
      <SliderWrapper images={womenSlon} />
      {/* <GoBaner banner={databaner[0]}/>
      <GoBaner banner={databaner[1]}/> */}
    </div>
  );
}

export default App;
