
import {scaleLinear} from "d3-scale"
import {rgb} from "d3-color"
import {In} from "./Types"
interface ColorProps {
    color?:string, //#ffff, blue, rbg(222, 0, 111) 
    opacity?:number, //0 - 1
    result?:string,
    in?:In | string,
    id:string

}

const COLOR_SCALE = scaleLinear([0,255],[0,1])

const ColorMatrix = (props:ColorProps)=>{

    const color = props.color? rgb(props.color) : undefined
    
    const r = color? COLOR_SCALE(color.r) : 0 
    const g = color? COLOR_SCALE(color.g) : 0
    const b = color? COLOR_SCALE(color.b) : 0
    
    const a = props.opacity? props.opacity:1


    return (
        <filter id={props.id}>
          <feColorMatrix
            in={props.in}
            result={props.result}
            type="matrix"
            values={`1   0   0   ${r}   0
                     0   1   0   ${g}   0
                     0   0   1   ${b}   0
                     0   0   0   ${a}   0 `}/>
        </filter>
        
        

    )
}

export default ColorMatrix