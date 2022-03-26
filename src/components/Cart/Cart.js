// import file
import React from 'react';

const Cart = (props) => {
    // use Destructuring 
    const { cart,chooseOne } = props || {}

    // console.log(Cart);
    return (
         
        <div className="card bg-secondary mt-3 mb-3 p-2" style={{ "maxWidth": "18rem" }}>
            <div className="card-header"><h3>Selected Items</h3></div>

            <ul>
                {
                  cart.length==0 ? ' ' :  cart.map(product => <div>
                        <div class="card border-primary mb-1" style={{ "maxWidth": "14rem" }}>
                            <div class="card-body text-primary d-flex">
                                <img src={product.img} className="img-fluid w-25 rounded-start" alt="..." />
                                <p class="card-text">{product.name}</p>
                            </div>
                            <div>
                           <p class="card-text text-success bg-info">{product.key==chooseOne? 'I Picked this items' : ''}</p>
                           </div>
                        </div>

                    </div>)
                }
            </ul>

                {/* choose one item button  */}
            <button onClick={() => props.handleChoose()} className='btn btn-success mb-1'><i className="fas fa-shopping-cart"></i> Choose one for me</button>

                {/* remove item button  */}

            <button onClick={() => props.handleCart()} className='btn btn-danger mt-1'><i className="fas fa-shopping-cart"></i> Remove Item</button>

        </div>
    );

};

export default Cart;