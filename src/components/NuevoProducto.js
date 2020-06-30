import React from 'react';

const NuevoProductos = () => {
    return ( 
       <div className="row justify-content-center">
           <div className="col-md-8">
               <div className="card">
                   <div className="card-body">
                       <h2 className="text-center mb-4 font-weight-bold">
                           Agregar Nuevo Producto
                       </h2>

                       <form>
                           <div className="form-group">
                               <label>Nombre Producto</label>
                               <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre Producto"
                                name="nombre"
                               />
                           </div>

                           <div className="form-group">
                               <label>Precio Producto</label>
                               <input
                                type="number"
                                className="form-control"
                                placeholder="Precio Producto"
                                name="precio"
                               />

                               <button
                                 type="submit"
                                 className="btn btn-primary font-weight-bold text-uppercased-block w-100"
                                 >Agregar</button>
                           </div>
                       </form>
                   </div>
               </div>
           </div>
       </div>
     );
}
 
export default NuevoProductos;