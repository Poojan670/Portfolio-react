import React from 'react'
import "./productList.css"
import Product from "../product/Product"
import { products } from "../../data"

const ProductList = () => {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className='pl-title'>“Happiness is only real when shared. ”</h1>
        <p className='pl-quote'> -Christopher McCandless.</p>
        <p className='pl-desc'>
          Below are some of my personal or professional projects that i've done or contributed to :
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  )
}

export default ProductList