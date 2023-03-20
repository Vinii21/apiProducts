import { useEffect } from "react"
import { useForm } from "react-hook-form"

const ProductForm = ({createProduct, cardSelected, editProduct, showForm, setShowForm, setCardSelected, setShowModal, setMessange}) => {
    const {handleSubmit, register, reset} = useForm()

    useEffect(()=>{
        if(cardSelected){
            reset(cardSelected)
        } else {
            emptyForm()
        }
    },[cardSelected])

    const submit = (data) => {
        if(cardSelected){
            editProduct(data)
            setMessange("Producto actualizado con éxito")
            setShowModal(true)
        } else{
            if(data.name == "" || data.category == "" || data.price == ""){
                emptyForm()
                setMessange("Algo salio mal, espacios vacios")
                setShowModal(true)
            } else {
                createProduct(data)
                setMessange("Producto creado con éxito")
                setShowModal(true)
            }
        }
        emptyForm()
        setShowForm(!showForm)
    }

    const emptyForm = () => {
        reset(
            {
                name:"",
                category:"",
                price:"",
                isAvailable:false
            }
        )
    }

    return (
        <div className="form__container">
            <form onSubmit={handleSubmit( submit )}>
                <i onClick={()=>{
                    setShowForm(!showForm)
                    setCardSelected(null)
                }} className='bx bx-x'></i>
                <h2>Nuevo Producto</h2>
                <input className="input" type="text" id="name" {...register("name")} placeholder="Nombre del producto..."/>
                <input className="input" type="text" id="category" {...register("category")} placeholder="Categoria..."/>
                <input className="input" type="number" id="price" {...register("price")} placeholder="Precio..."/>
                <div className="form__container--available">
                    <label htmlFor="isAvailable">Disponibilidad </label>
                    <input type="checkbox" id="isAvailable" {...register("isAvailable")}/>
                </div>
                <button className="form__btn" type="submit">{cardSelected ? "Update" : "Create"}</button>
            </form>
        </div>
    );
}
 
export default ProductForm;