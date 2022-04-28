import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import "./Product.css"
const Product = ({item}) => {
  return (
    <div className="Container-Product">
    
      <img className="Image-Product" alt="" src={item.img}/>
      <div className="Info-Product">
          <div className="Icon-Product">
            <ShoppingCartOutlined/>
          </div>

          <div className="Icon-Product">
            <SearchOutlined/>
          </div>

          <div className="Icon-Product">
            <FavoriteBorderOutlined/>
          </div>

      </div>
    </div>
  )
}

export default Product
