    
import AztecBird2 from '../defs/AztecBird2'
import Abstract1 from '../defs/Abstract1'
import Abstract3 from '../defs/Abstract3'
import "../App.css"

function Scene_One() {
  
  
  const myWidth = document.body.clientWidth;
  const myHeight = document.body.clientHeight;
  const viewBox = `0 0 ${myWidth} ${myHeight}`


  

  return (
    
        <svg id="scene_one" width="100%" height="100%" viewBox={viewBox}>
          
          <Abstract3 
                 
            fill="purple"
            stroke="yellow"
            transform='scale(9)'
            className='scene_one'
            
          />

          <Abstract1 id="abstract1" className="center rotate-cw color-red" />    
          <AztecBird2 className="center color-red" transform="translate(-50 -50) scale(10) translate(80 50)"/> 
    
        </svg>
      
  )
}

export default Scene_One
