import '../styles/nosotrospage.css';

const NosotrosPage = (props) => {

    return (
        <main className="holder">
        <div className="historia">
                <h2>Historia</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut et laborum, alias distinctio delectus
                    blanditiis laudantium fugiat perspiciatis, accusamus vitae, omnis quisquam numquam fugit ipsam esse
                    ea mollitia illum vero.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid atque unde maiores sed dignissimos
                    accusantium! Obcaecati incidunt earum itaque ipsum deserunt eveniet nesciunt tempore, quo a amet at
                    animi porro.</p>
        </div>
        <div className="nuestrocafe">
            <h2>Nuestro Café</h2>
            <div className="tiposcafe">
                <div className="cafe">
                    <img src="public/img/nosotros/expresso.jpg" alt="Expresso"/>
                    <h5>Expresso</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio mollitia molestiae error ipsa
                        optio natus ipsum unde qui rerum neque magnam impedit, debitis aut tempore accusantium eligendi
                        ullam cum ut?</p>
                </div>
            </div>
        </div>
    </main>
    )
}

export default NosotrosPage;