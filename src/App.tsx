import { useState, useRef, useEffect } from 'react'

import './App.css'
import "./carousel.css"

import { FullScreen } from '@chiragrupani/fullscreen-react'
import { FloatButton, ConfigProvider , Carousel} from 'antd';
import { FullscreenOutlined } from '@ant-design/icons'


import Scene_One from './scenes/scene_one'
import Scene_Two from './scenes/scene_two'
import Scene_Three from './scenes/scene_three';

function App() {
  
  const container = useRef();
  let [isFullScreen, setFullScreen] = useState(false);


 
  useEffect(()=>{

  },[])

  
  const myWidth = document.body.clientWidth;
  const myHeight = document.body.clientHeight;
  const viewBox = `0 0 ${myWidth} ${myHeight}`


  

  return (
    <div>
        <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#00b96b',
        borderRadius: 2,

        // Alias Token
        colorBgContainer: '#f6ffed',
      },
    }}
  >


    <FloatButton
     icon={<FullscreenOutlined className='float-button-icon'/>} 
     onClick={()=>{setFullScreen(!isFullScreen)}}
     className='float-button'
     />

    <FullScreen isFullScreen={isFullScreen} onChange={(isFullScreen) => setState({ isFullScreen })}>

    {/* <Scene_Three/> */}
    <Carousel 
      className='fullscreen-carousel'
      effect="fade" 
      autoplay 
      autoplaySpeed={60000}
      >
    
    
      <Scene_One/>
    

    
      <Scene_Two/>
    
    
      <Scene_Three/>
    
    
    
  </Carousel>
       
      </FullScreen>
      </ConfigProvider>
    </div>
  )
}

export default App
