import { useState } from "react";
import arrowNext from './arrow-next.png';
import arrowBack from './arrow-back.png';

function Slaider ({slaide}) {
    const [picture, setPicture] = useState(0);
    const previousImage = () =>{
        setPicture((item)=>{
           item --;
           if (item < 0) {
            return slaide.length - 1;
           } 
           return item;
        });
    };
    const nextImage = () =>{
        setPicture((item)=>{
            item ++;
            if (item > slaide.length-1) {
                item=0;
                }
                return item;
        });
    };
    return (
        <div className="container-slaider" >
            <button onClick={previousImage} className='btn-slaider'><img src={arrowBack} alt='arrow'/></button>
            <img src={slaide[picture]} alt='Rostov-on-Don' className="image-seesights"/>
            <button onClick={nextImage} className='btn-slaider'><img src={arrowNext} alt='arrow'/></button>
        </div>
    )
    }
       
export default Slaider;