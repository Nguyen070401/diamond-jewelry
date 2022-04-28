import React from 'react'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import "./Categories.css"
const Categories = () => {
  return (
    <>
    <div className="Title-Categories">GROUP PRODUCTS</div>
    <div className="Container-Categories">
       
        {categories.map(item=>(
            <CategoryItem item={item} key={item.id}/>
        ))}
    </div>
    </>
  )
}

export default Categories
