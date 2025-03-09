    

import Skull from '../defs/SkullDef';





    
import "../App.css"

function Scene_Two() {
  
  
  const myWidth = document.body.clientWidth;
  const myHeight = document.body.clientHeight;
  const viewBox = `0 0 ${myWidth} ${myHeight}`


  

  return (
    
        <svg id="scene_one" width="100%" height="100%" viewBox={viewBox}>
          
          <Skull className='center color-red'/>
    
        </svg>
      
  )
}

export default Scene_Two
