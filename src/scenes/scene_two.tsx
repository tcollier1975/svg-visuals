    


import AztecDog1 from "../defs/AztecDog1";
import CirlcePattern1 from "../defs/CirlcePattern1";



    
import "../App.css"


function Scene_Two() {
  
  
  const myWidth = document.body.clientWidth;
  const myHeight = document.body.clientHeight;
  const viewBox = `0 0 ${myWidth} ${myHeight}`


  

  return (
    
        <svg id="scene_two" width="100%" height="100%" viewBox={viewBox}>
          <g transform="translate(100,0)">
          <CirlcePattern1 className='center' 
          
          style={{ fill: '#CCFFCC', fillOpacity : .4, }}
          />
          <AztecDog1 className='center animation-1'/>
          <AztecDog1 className='center animation-2'/>
          <AztecDog1 className='center animation-3'/>
          </g>
          
    
        </svg>
      
  )
}

export default Scene_Two
