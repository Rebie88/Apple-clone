import Footer from "./commonResource/Footer/Footer";
import Header from "./commonResource/Header/Header";
import Main from "./commonResource/Main/Main";

import {Routes, Route} from 'react-router-dom'
import Iphone from "./commonResource/Pages/Iphone/Iphone";
import Four04 from "./commonResource/Pages/Four04/Four04";
import Productpage from "./commonResource/Pages/Productpage/Productpage";
import Ipad from "./commonResource/Pages/Ipad/Ipad";
import TV from "./commonResource/Pages/TV/TV";
import Watch from "./commonResource/Pages/Watch/Watch";
import Music from "./commonResource/Pages/Music/Music";
import Support from "./commonResource/Pages/Support/Support";
import Cart from "./commonResource/Pages/Cart/Cart";
import Mac from "./commonResource/Pages/Mac/Mac";


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mac" element={<Mac/>} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/TV" element={<TV />} />
        <Route path="/Watch" element={<Watch />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/iphone/:productID" element={<Productpage/>} />
        <Route path="*" element={<Four04/>} />
        
      </Routes>
   
      <Footer/>
    </>
  );
}

export default App;
