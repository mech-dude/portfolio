import Navbar from "./components/Navbar";
import Home from "./components/Home";
import WebFont from 'webfontloader';
import Dots from "./components/Dots"


WebFont.load({
    custom: {
      families: ['Chivo'],
    },
});

function App() {
  return (
    <div>      
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
      <h1>Hello World</h1> 
      <Navbar/>
      <Home />  
      <Dots />
    </div>
  );
}

export default App;