import { useEffect, useState } from "react";
import "./App.css";
import CTA from "./containers/cta/CTA";
import CTA2 from "./containers/cta/CTA2";
import Customers from "./containers/customers/Customers";
import Header from "./containers/header/Header";
import Navbar from "./containers/navbar/Navbar";
import Footer from './containers/footer/Footer'
function App() {
  const [switched,setSwitched] = useState(false)
  useEffect(() => {
    const pa = document.getElementById('parallax2')
    window.addEventListener('scroll',function(){
      let offset = window.pageYOffset;
      var coords = (offset * 0.6) + 'px'
      if(offset <200 ){
        document.getElementById('sub').style.visibility="visible"
        document.getElementById('yo').style.visibility="visible"
        setSwitched(false)
      }
      if(offset < 2300){
        console.log(offset)
        pa.style.transform = 'translateY(' + coords + ')';
      }
      if(offset > 200&& !switched){
        document.getElementById('sub').style.visibility="hidden"
        document.getElementById('yo').style.visibility="hidden"
        setSwitched(true)
      }
      if(offset > 800){
        document.getElementById('code').style.opacity= 0
        
       
      }
     
  
     
    })
  },[])
  return (
    <>
      <div>
        <section> 
          <div id="parallax2">
        <Header />
        </div>
        </section>
      
        <section >
        <CTA/>
        </section>
        <div className="parallax"></div>
       
        <section>
        <Customers/>
        <Footer/>
        </section>
      </div>
    </>
  );
}

export default App;
