import React from 'react';

const ProductoItem = (props) => {
    const { title, precio, imagen, descripcion } = props;

    return (
        <div className="listarproductos">
            <div className="productos">
                <h4>{title}</h4>
                <h5>$ {precio}</h5>
                <img src={imagen} />
                <div dangerouslySetInnerHTML={{ __html: descripcion }} />
                <hr />
            </div>
        </div>
    );
}

export default ProductoItem;