import React from 'react'
import "./CategoryItem.css"
const CategoryItem = ({item}) => {
  return (
    
    <div className="CategoryItem">
        <img className="Image-CategoryItem" src={item.img} alt=""/>  
        <div className="Info-CategoryItem">
        <h1 className="Title-CategoryItem" >{item.title}</h1>
                       
        <button className="Button-CategoryItem">SHOP NOW</button>
        </div>  
     </div>
  )
}

export default CategoryItem
