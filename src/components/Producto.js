import React from 'react';
import {Link} from 'react-router-dom'

//redux
import {useDispatch} from 'react-redux'
import {borrarProductoAction} from '../actions/productoActions'

const Productos = ({producto}) => {
    const {nombre, precio, id} = producto;

    const dispatch = useDispatch();

    //confirmar si desea eliminar
    const confirmarELiminarProducto = id => {
        
        //preguntar al usuario

        //pasarlo al action
        dispatch(borrarProductoAction(id));
    }

    return ( 
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">$ {precio}</span></td>
            <td className="acciones">
                <Link to={`/productos/editar/${id}`} className="btn btn-primary mr-2">
                    Editar
                </Link>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmarELiminarProducto(id)}
                >Eliminar</button>
            </td>
        </tr>
     );
}
 
export default Productos;