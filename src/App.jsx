import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import ModalAlert from './components/ModalAlert'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'
import Footer from "./components/Footer"

function App() {
  const [products, setProducts] = useState([])
  const [cardSelected, setCardSelected] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [messange, setMessange] = useState("")

  useEffect(()=>{
    getProducts()
  },[])

  const getProducts = () => {
    axios.get("https://products-crud.academlo.tech/products/")
    .then((resp)=> setProducts(resp.data))
    .catch(error=>console.error(error))
  }

  //Create product
  const createProduct = (productData) => {
    axios.post("https://products-crud.academlo.tech/products/", productData)
    .then(()=>getProducts())
    .catch(error=>console.error(error))
  }

  //Update product
  const productSelected = (productData) => {
    setCardSelected(productData)
  }

  const editProduct = (productData) => {
    axios.put(`https://products-crud.academlo.tech/products/${productData.id}/`, productData)
    .then(()=>{
      getProducts()
      setCardSelected(null)
    })
    .catch(error=>console.error(error))
  }

  //Delete Card
  const deleteCard = (productDataId) => {
    axios.delete(`https://products-crud.academlo.tech/products/${productDataId}/`)
    .then(()=>{
      getProducts()
      setShowModal(true)
      setMessange("Producto eliminado con éxito")
    })
    .catch(error=>console.error(error))
  }

  return (
    <div className="App">
      <button className='bnt-add' onClick={()=>setShowForm(!showForm)}><i className='bx bx-plus-medical'></i>Añadir producto</button>
      {
        showForm && 
        <ProductForm 
          createProduct={data => createProduct(data)}
          cardSelected={cardSelected}
          setCardSelected={setCardSelected}
          editProduct={data => editProduct(data)}
          showForm={showForm}
          setShowForm={setShowForm}
          setShowModal={setShowModal}
          setMessange={setMessange}
        />
      }
      {
        showModal && 
        <ModalAlert 
          setShowModal={setShowModal}
          showModal={showModal}
          messange={messange}
        />
      }
      
      <div className="products__container">
      {
        products.length === 0 ? 
          <p>No hay productos para mostrar</p> :
        <ProductList 
          products={products}
          productSelected={data => productSelected(data)}
          deleteCard={id => deleteCard(id)}
          showForm={showForm}
          setShowForm={setShowForm}
        />
      }
      </div>
      <Footer />
    </div>
  )
}

export default App
