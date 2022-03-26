// import file
import React from 'react';

const Product = (props) => {

    // use Destructuring 
    const { name, img, category, stock, price, seller } = props.product || {};
    // console.log(props.product);
    return (
        // show cart 
       <div className="col-md-4 mt-4">
           <div>
           <img className="card-img-top" src={img} alt="Card image cap"/>

           </div>
           <div className="card-body">
                <h5 className="card-title fw-bold">{name}</h5>
                <br />
                <span className='fw-bold'>Price: </span>${price}
                <br/>
                           
                <button onClick={() => props.handleAddProduct(props.product)} className='btn btn-success'><i className="fas fa-shopping-cart"></i> Buy Now</button>

            </div>
       </div>
    );
};

export default Product;

