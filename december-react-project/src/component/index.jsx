import './card.css'
const ProductCard=()=>{
    return (
        <div className="product-card-cont">
            <div className='img-cover'>
                <img className='image' src='' alt='Product image'
            />

            
            </div>
<span className='title'>Title</span>
<div className='footer'>
<span>Price</span>
<Button>Add</Button>
</div>

        </div>
   );
};
export default ProductCard