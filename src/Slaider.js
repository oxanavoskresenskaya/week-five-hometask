import { useState } from "react";

function Slaider ({slaide}) {
    const [picture, setPicture] = useState(slaide);
    const previousImage = () =>{
        setPicture((item)=>{
            
        })
    }
    const nextImage = () =>{
        setPicture((item)=>{
            
        })
    }

        <div>
            <button onClick={previousImage}>back</button>
            <img src={image}/>
            <button onClick={nextImage}>next</button>
        </div>
   
    }
export default Slaider;