import { useState, useRef, useEffect } from 'react'

import './App.css'

import Skull1 from './defs/Skull1'

import ColorMatrix from './filters/ColorMatrix'
import Metalic1 from './filters/Metalic1'
import {In} from "./filters/Types"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import AztecBird1 from './defs/AztecBird1'
import AztecCalendar1 from './defs/AztecCalendar1'
import CirclePattern1 from './defs/CirlcePattern1'
import Abstract1 from './defs/Abstract1'
import AztecDog1 from './defs/AztecDog1'

import { FullScreen } from '@chiragrupani/fullscreen-react'
import { FloatButton, Drawer } from 'antd';
import { FullscreenOutlined, SettingFilled } from '@ant-design/icons'



gsap.registerPlugin(useGSAP,MotionPathPlugin,EaselPlugin)


function App() {
  
  const container = useRef();
  const [isFullScreen, setFullScreen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false)
  

  useGSAP(() => {
    gsap.to("#abstract1",{rotation:-360 ,transformOrigin:"60% 30%", duration:300, repeat:-1, yoyoEase:true})
    gsap.to("#skull1", {y: -110, duration:3, repeat:-1,yoyo:true, yoyoEase:true});
    gsap.to("#skull2", {x: 20, y:0, duration:3, repeat:-1,yoyo:true, yoyoEase:true})
    gsap.fromTo("#skull2",{strokeOpacity:0}, {strokeOpacity:1, duration: 40, repeat:-1, delay:3, yoyo:true, yoyoEase:true})
    gsap.to("#skull3", {x: -170, y: -160, duration:30, repeat:-1,yoyo:true, yoyoEase:true})
    
    gsap.fromTo("#dog1",{fill:"green"},{fill:'red', duration:500, repeat:-1, yoyo:true, yoyoEase:true})

    // gsap.fromTo("#skull4",{x:40,y:-34},{x:400,y:400, duration:3, repeat:-1,yoyo:true, yoyoEase:true})
    // gsap.to("#f4-turbulence",{
    //   attr:{baseFrequency:1},
    //   duration:3, repeat:-1,yoyo:true, yoyoEase:true
    // })
     

  }, { scope: container });
 
  useEffect(()=>{

  },[])

  
  const myWidth = document.body.clientWidth;
  const myHeight = document.body.clientHeight;
  const viewBox = `0 0 ${myWidth} ${myHeight}`


  

  return (
    <div>
      
        <FloatButton icon={<FullscreenOutlined />} type="default" style={{ insetInlineEnd: 30 }} onClick={()=>{setFullScreen(!isFullScreen)}}/>
        <FloatButton icon={<SettingFilled />} type="default" style={{ insetInlineEnd: 90 }} onClick={()=>{setDrawerOpen(true)}} />
        <Drawer title="Multi-level drawer" width={520} onClose={()=>setDrawerOpen(false)} open={drawerOpen}>
          <h1>hi</h1>
        </Drawer>
        <FullScreen isFullScreen={isFullScreen} onChange={(isFullScreen) => setState({ isFullScreen })}>
    
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

        

          <Metalic1 id="m1"/>
          <ColorMatrix id="hard-yellow" color='yellow'/>
          
          <ColorMatrix id="f1" in={In.SourceGraphic} color='magenta' result="magenta" opacity={0.3}/>
          <ColorMatrix id="f2" in={In.SourceGraphic} color='black' result="yellow" opacity={0.3}/>
          <ColorMatrix id="f3" in={In.SourceGraphic} color='cyan' result="cyan" opacity={0.3}/>
          <ColorMatrix id="f4" in={In.SourceGraphic} color='#ff00af' result="magenta" opacity={0.3}/>
          
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
        
          </defs>
          {/* <CirclePattern1 id="circles1" filter="url(#f1)"/> */}
          <AztecDog1 id="dog1" fill='red'/>   
          <Abstract1 id="abstract1" filter="url(#f2)" transform="scale(0.75 0.75)"/>        
          {/* <Skull1 id="skull1" filter="url(#f4)" x="200px" transform="scale(0.5 0.5)"/>     */}
          <AztecCalendar1 id="skull3"  transform="scale(0.5 0.5)" stroke='#052bff'/>
          <AztecCalendar1 id="skull2"  transform="scale(0.5 0.5)" stroke='yellow'/>        
          {/* <AztecBird1 id="skull4" filter="url(#m1)" transform="scale(0.75 0.75)"/> */}
               
        </svg>

      
      </FullScreen>
    
    </div>
  )
}

export default App
