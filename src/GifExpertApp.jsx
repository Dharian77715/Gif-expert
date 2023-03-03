
import { useState }  from 'react';
import { AddCategory }  from './componets/AddCategory';
import { GifGrid }  from './componets/GifGrid'


export const GifExpertApp  = () => {
 
    const [categories, setCategories] = useState( ['One Punch'] )
    
    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory)) return;

            // categories.push(newCategory)
            setCategories ([ newCategory, ...categories ]);
            // console.log(newCategory);
       
       
        // setCategories ( cat => [ ...cat, 'Valorant' ])
    }

    return (
       
    <>
   
    <h1>GifExpertApp</h1>

  
    <AddCategory 
    // setCategories={ setCategories }
     onNewCategory={ value => onAddCategory(value)}
    />
   
        { categories.map( (category )=>  ( 
            < GifGrid key={category} 
            category={category}
            /> )
        ) }

    </>
    
  )
}
