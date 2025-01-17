
interface MetalicProps {
  id:string
}



const Metalic1 = (props:MetalicProps)=>{

    return (            
        <filter id={props.id}>
        <feGaussianBlur
            result="result6"
            stdDeviation="8"
            in="SourceGraphic"
            id="feGaussianBlur4664" />
        <feComposite
            in2="SourceGraphic"
            in="result6"
            operator="xor"
            result="result10"
            id="feComposite4664" />
        <feGaussianBlur
            result="result2"
            stdDeviation="8"
            id="feGaussianBlur4665" />
        <feComposite
            in2="SourceGraphic"
            operator="atop"
            in="result10"
            result="result91"
            id="feComposite4665" />
        <feComposite
            result="result4"
            in="result2"
            operator="xor"
            in2="result91"
            id="feComposite4666" />
        <feGaussianBlur
            in="result4"
            result="result3"
            stdDeviation="4"
            id="feGaussianBlur4666" />
        <feSpecularLighting
            result="result5"
            specularExponent="5"
            specularConstant="1.1"
            surfaceScale="18"
            id="feSpecularLighting4666">
            <feDistantLight
            azimuth="235"
            elevation="55"
            id="feDistantLight4666" />
        </feSpecularLighting>
        <feComposite
            in="result3"
            k3="1.1"
            k2="0.5"
            operator="arithmetic"
            result="result7"
            in2="result5"
            k1="0.5"
            id="feComposite4667" />
        <feGaussianBlur
            in="result7"
            result="result8"
            stdDeviation="1"
            id="feGaussianBlur4667" />
        <feComposite
            in="result8"
            operator="atop"
            in2="SourceGraphic"
            result="result9"
            id="feComposite4668" />
        </filter>
            
    )
}

export default Metalic1
