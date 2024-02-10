import '../styles/sucursalespage.css';

const SucursalesPage = (props) => {

    return (
        <main className="holder">
            <h3>Nuestras Sucursales</h3>
            <div className="sucursal">
                <img src="/img/sucursales/sucursal 01.jpg" alt="Sucursal Santa Fe"/>
                    <div className="info">
                        <h4>Sucursal Santa Fe</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, fugiat vero! Ut cum soluta est nostrum optio at nobis qui. Eos vero adipisci voluptatem ipsam consequuntur quod assumenda dolore consectetur?</p>
                    </div>
            </div>
            <div className="sucursal">
                <img src="/img/sucursales/sucursal 02.jpg" alt="Sucursal Cordoba"/>
                    <div className="info">
                        <h4>Sucursal Córdoba</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, fugiat vero! Ut cum soluta est nostrum optio at nobis qui. Eos vero adipisci voluptatem ipsam consequuntur quod assumenda dolore consectetur?</p>
                    </div>
            </div>
            <div className="sucursal">
                <img src="/img/sucursales/sucursal 03.jpg" alt="Sucursal Buenos Aires"/>
                    <div className="info">
                        <h4>Sucursal Buenos Aires</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, fugiat vero! Ut cum soluta est nostrum optio at nobis qui. Eos vero adipisci voluptatem ipsam consequuntur quod assumenda dolore consectetur?</p>
                    </div>
            </div>
            <div className="sucursal">
                <img src="/img/sucursales/sucursal 04.jpg" alt="Sucursal Mendoza"/>
                    <div className="info">
                        <h4>Sucursal Mendoza</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, fugiat vero! Ut cum soluta est nostrum optio at nobis qui. Eos vero adipisci voluptatem ipsam consequuntur quod assumenda dolore consectetur?</p>
                    </div>
            </div>
        </main>
    )
}

export default SucursalesPage;