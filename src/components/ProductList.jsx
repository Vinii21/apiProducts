const ProductList = ({products, productSelected, deleteCard, showForm, setShowForm}) => {
    return (
            <>
            {
                products?.map((product)=>{
                    return(
                        <div key={product.id} className="product__card">
                            <h2>{product.name}</h2>
                            <ul>
                                <li><b>Categoría: </b>{product.category}</li>
                                <li><b>Precio: </b>${product.price}</li>
                                <li><b>Disponibilidad: </b>{product.isAvailable ? "Sí" : "No"}</li>
                            </ul>
                            <div className="product__card-btns">
                                <button onClick={()=>deleteCard(product.id)}><i className='bx bxs-trash'></i></button>
                                <button onClick={()=>{
                                    productSelected(product)
                                    setShowForm(!showForm)
                                }}><i className='bx bxs-edit'></i></button>
                            </div>
                        </div>
                    )
                })
            }
            </>
    );
}
 
export default ProductList;