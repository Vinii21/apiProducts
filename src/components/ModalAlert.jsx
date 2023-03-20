const ModalAlert = ({messange, setShowModal, showModal}) => {
    return (
        <div className="container__modal">
            <div className="modal">
                <i onClick={()=>setShowModal(!showModal)} className='bx bx-x'></i>
                <h3>¡{messange}!</h3>
            </div>
        </div>
    );
}
 
export default ModalAlert;