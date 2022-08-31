// import React, {useState, state, useEffect} from "react";
// import SeguimientoItem from "./SeguimientoItem";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// const initialForm = {
//     pedido:""
// };

// const SeguiemtoForm = ({handleSearch})=>{
//     const [form, setForm] = useState(initialForm);

//     const handleChange = (e) =>{
//         setForm({
//             ...form,
//             [e.target.name]:e.target.value,
//         });
//     };

//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         if(!form.pedido){
//             alert("Datos Incompletos");
//             return;
//         }

//         handleSearch(form);
//         setForm(initialForm);
//     };

// return(
//     <div>
//     <form className="d-flex" style={{width:"60%", marginLeft:"200px", display:"flex",alignItems:"center", justifyContent:"center", alignContent:"center"}} onSubmit={handleSubmit}>
//             <input
//               name="pedido"
//               type="text"
//               placeholder="   Número de Pedido"
//               className="me-2"
//               aria-label="Search"
//               onChange={handleChange}
//               value={form.pedido}
//             />
//             <input type="submit" value="Consultar"/>
//           </form>
//     </div>
// )
// };



// export default SeguiemtoForm