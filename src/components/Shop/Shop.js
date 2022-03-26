// import file
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    // use state 
    const [products, setProducts] = useState([])

    //  use state for cart product
    const [cart, setCart] = useState([])

      // choose one product state
      const [chooseOne,setChooseOne]= useState('')

    // handleAddProduct function 
    const handleAddProduct = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }

    // handleAddProduct function 
    const handleCart = () => {
        // console.log("cart is empty");
        setCart([]);

    }


    // handle Choose function 
    const handleChoose = () => {
        const cartValue= Math.floor((Math.random() * cart.length))+1;
        console.log(cartValue);
        setChooseOne(cartValue)

    }

   

    // fatch data using useeffect 
    useEffect(() => {
        fetch('/productsData.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='container'>
            <div className="row">
                {/* taking 9 column for show product  */}
                <div className="col-md-9 mb-4">
                    <div className="row">
                        {
                            products.map(product => <Product product={product}
                                handleAddProduct={handleAddProduct}
                                key={product.key}></Product>)
                        }

                    </div>
                </div>

                {/* taking 3 column for show calculation  */}
                <div className="col-md-3 sidebar">
                    <Cart cart={cart}
                    handleCart={handleCart}
                    handleChoose={handleChoose}
                    chooseOne={chooseOne}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;