// import React, {useState, state, useEffect} from "react";
// import SeguiemtoDetalles from "./SeguimientoDetalles";

// import SeguiemtoForm from "./SeguimientoForm";

// const SeguiemtoSearch = (props)=>{

// const [search, setSearch] = useState(null);
// const [Item, setItem] = useState(null);

// useEffect(()=>{
//     if(search===null)
//     return;
//     const fetchData = async ()=>{}
// },[search]);

// const fetchData = async()=>{
//     const {pedido}=search;

//     let pedidoUrl='http://localhost:3000/api/seguimiento';
//     console.log(pedidoUrl);

//     const[pedidoRes] = await Promise.all([]);

//     console.log(pedidoRes);

//     setItem(pedidoRes);
// }

// const handleSearch=(data)=>{
//     // console.log(data);
//     setSearch(data);
// }

// return(
//     <div>
//     <SeguiemtoForm handleSearch={handleSearch} />
//      <SeguiemtoDetalles search={search}/>
//     </div>
// )
// };



// export default SeguiemtoSearch