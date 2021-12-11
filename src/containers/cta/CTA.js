import React, { useState } from 'react'
import './CTA.css'
import city from '../../assets/city7.gif'
import { useEffect } from 'react'

import city2 from '../../assets/city6.gif'
import city3 from '../../assets/city8.gif'
const CTA = () => {
    const [image,setImage ] = useState(city)
    useEffect(() => {
        let options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.3
        };
       
      let observer = new IntersectionObserver(callbackFunc, options);
      observer.observe(document.getElementById('cont-1'));
      observer.observe(document.getElementById('cont-2'));
      observer.observe(document.getElementById('cont-3'));
      observer.observe(document.getElementById('yo'));

      },[])
      function callbackFunc(entries, observer)
    {
      entries.forEach(entry => {
        if(entry.isIntersecting){
            if(entry.target.id==='cont-1' || entry.target.id==='yo' ){

                entry.target.classList.add('inview');
                setImage(city)
            }
           
                    
            if(entry.target.id==='cont-2'){
                entry.target.classList.add('inview');
                setImage(city2)
            }
                   
            if(entry.target.id==='cont-3'){
                entry.target.classList.add('inview');
                setImage(city3)
            }
            if(entry.target.id==="hey"){
                entry.target.classList.add('inview');
            }
                    
        }else{
            //entry.target.classList.remove('inview');
        }
        
      
      });
    }

    useEffect(() => {
        window.addEventListener('scroll',function(e){
            var scrolled = window.pageYOffset;
            if(scrolled > 750 && scrolled < 2050){
            document.getElementById('hi').style.transform = `translateY(${(scrolled-750) * 1.05}px)`;
            }
        })
    },[])
    
    return (
        <>
            <div id="hi2" className="cta-outer-flex-wrapper" style={{display: 'flex',justifyContent: 'space-evenly'}}>
                <div id="hi" className="cta-inner-flex-image">
                    <img   src={image} style={{flexBasis: '40%'}} />
                </div>
                <div className="cta-right-container" style={{display:'flex',flexDirection: 'column',flexBasis: '50%',position: 'fixws'}}>
                <div id ="cont-1" className="cta-inner-text" >
                    <p className="cta-header"> Possibilities are Endless</p>
                    <p className="cta-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin aliquam ultrices sagittis orci a. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Potenti nullam ac tortor vitae purus. Sit amet consectetur adipiscing elit ut aliquam. Volutpat diam ut venenatis tellus in. Varius morbi enim nunc faucibus a. Posuere urna nec tincidunt praesent semper feugiat nibh. Lacus vestibulum sed arcu non odio euismod lacinia. Pharetra vel turpis nunc eget lorem dolor sed</p>
                </div>
               
                <div id="cont-2" className="cta-inner-text" >
                    <p className="cta-header">Anything is possible</p>
                    <p className="cta-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin aliquam ultrices sagittis orci a. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Potenti nullam ac tortor vitae purus. Sit amet consectetur adipiscing elit ut aliquam. Volutpat diam ut venenatis tellus in. Varius morbi enim nunc faucibus a. Posuere urna nec tincidunt praesent semper feugiat nibh. Lacus vestibulum sed arcu non odio euismod lacinia. Pharetra vel turpis nunc eget lorem dolor sed. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Leo a diam so</p>
                </div>

                <div id="cont-3" className="cta-inner-text" style={{flexBasis: '100%'}} >
                    <p className="cta-header">Fulfill your ambitions</p>
                    <p className="cta-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin aliquam ultrices sagittis orci a. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Potenti nullam ac tortor vitae purus. Sit amet consectetur adipiscing elit ut aliquam. Volutpat diam ut venenatis tellus in. Varius morbi enim nunc faucibus a. Posuere urna nec tincidunt praesent semper feugiat nibh. Lacus vestibulum sed arcu non odio euismod lacinia. Pharetra vel turpis nunc eget lorem dolor sed. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Leo a diam so</p>
                </div>

                
                </div>
            </div>
        </>
    )
}

export default CTA
