import { getGifs } from '../helpers/getGifs'
import { useEffect, useState } from 'react';

export const GifGrid = ({ category }) => {
    
    const [images, setImages] = useState([]);
    
    const GetImages= async () => {
        const newImages= await getGifs( category );
    }
    
    useEffect( () => {
    GetImages();
   }, [])

  return (
    <>
         <h3>{ category }</h3>
         
        <ol>
            {
                images.map( ({id, title}) => (
                    <li key={ id }>{ title }</li>
                ))
            }
            

        </ol>
    </>
    
  )
}
