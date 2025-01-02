import { useState, useRef } from 'react'

import './App.css'

import SkullDef from './defs/SkullDef'
import Skull2Def from './defs/Skull2Def'
import ColorMatrix from './filters/ColorMatrix'
import {In} from "./filters/Types"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";


gsap.registerPlugin(useGSAP,MotionPathPlugin,EaselPlugin)


function App() {
  
  const container = useRef();

  useGSAP(() => {
   
    gsap.to("#skull1", {y: -110, duration:3, repeat:-1,yoyo:true, yoyoEase:true});
    gsap.to("#skull2", {x: 20, y:0, duration:3, repeat:-1,yoyo:true, yoyoEase:true})
    gsap.to("#skull3", {x: -170, y: -160, duration:3, repeat:-1,yoyo:true, yoyoEase:true})

    gsap.fromTo("#skull4",{x:40,y:-34},{x:400,y:-400, duration:3, repeat:-1,yoyo:true, yoyoEase:true})
    gsap.to("#f4-turbulence",{
      attr:{baseFrequency:1},
      duration:3, repeat:-1,yoyo:true, yoyoEase:true
    })
     

  }, { scope: container });


  
  const myWidth = document.body.clientWidth;
  const myHeight = document.body.clientHeight;
  const viewBox = `0 0 ${myWidth} ${myHeight}`
  return (
    <>
      
        <svg ref={container} id="svg" width="100%" height="100%" viewBox={viewBox}>
        <filter id="offset" >
          <feOffset in="SourceGraphic" dx="60" dy="60" />
        </filter>

        <filter id="moving_filter">
    
          <ColorMatrix result="my_color" color="magenta" />
          <feOffset in="my_color" dx="-60" dy="60" result="offset_color"/>
      
          <feMerge>
            <feMergeNode in="offset_color" />
            <feMergeNode in="SourceGraphic" />
          </feMerge> 
        </filter>

      

       
        <filter id="hard-yellow">
          <ColorMatrix color='yellow'/>
        </filter>

        <filter id="f1" >
          <ColorMatrix in={In.SourceGraphic} color='magenta' result="magenta" opacity={0.3}/>
          <feOffset in="magenta" dx="-60" dy="60" />
        </filter>

        <filter id="f2" >
          <ColorMatrix in={In.SourceGraphic} color='yellow' result="yellow" opacity={0.3}/>
          
        </filter>

        <filter id="f3" >
          <ColorMatrix in={In.SourceGraphic} color='cyan' result="cyan" opacity={0.3}/>    
        </filter>

        <filter id="f3-offset" >
          <ColorMatrix in={In.SourceGraphic} color='cyan' result="cyan" opacity={0.3}/>
          <feOffset in="cyan" dx="0" dy="-60" />
        </filter>

        <filter id="f4">
      
          <feTurbulence   
            id="f4-turbulence"         
            type="turbulence"
            baseFrequency="0.05"
            numOctaves="2"
            result="turbulence" />
          <feDisplacementMap
            in2="turbulence"
            in="SourceGraphic"
            scale="20"
            xChannelSelector="R"
            yChannelSelector="G" />
        </filter>

        <filter id="blue-glow" >
          <feFlood result="flood" flood-color="rgb(106,255,246)" flood-opacity=".8"></feFlood>
          <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
          <feMorphology in="mask" result="dilated" operator="dilate" radius="3"></feMorphology>
          <feGaussianBlur in="dilated" result="blurred" stdDeviation="10"></feGaussianBlur>
          <feMerge>
              <feMergeNode in="blurred"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
      </filter>
        <defs>
          <SkullDef/>
          <Skull2Def/>
        </defs>
        {/* <use href="#skull" filter="url(#hard-yellow)"/> */}
        
        {/* <use href="#skull"  filter="url(#offset)"/> */}

        {/* <use href="#skull"  filter="url(#moving_filter)"/> */}
        
        <use id="skull1" href="#skull"  filter="url(#f4)" x="200px"/>
        
        <use id="skull3" href="#skull"  filter="url(#f3)"/>
        <use id="skull2" href="#skull"  filter="url(#f2)"/>
        <use id="skull4" href="#skull2"  filter="url(#blue-glow)"/>
        </svg>
        
      
    </>
  )
}

export default App
