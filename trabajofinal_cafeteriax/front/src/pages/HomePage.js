import '../styles/homepage.css';

const HomePage = (props) => {

    return (
            <main className="holder">
                <div className="homeimg">
                    <img src="/img/home/homecafe.jpg" alt="Cafe" />
                    <div class="texto">
                    <h2>Descubri una manera unica de disfurtar un buen café</h2>
            </div>
                </div>
                <div className="bienvenidos">
                <h3>Bienvenidos</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, reiciendis quod vitae laudantium
                    labore soluta accusamus veniam perspiciatis omnis harum dolor consectetur ex, voluptatum consequatur eos
                    inventore dolorum et minima.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias eligendi cumque ad. Quod esse dolorum
                    delectus minima voluptates, dignissimos, perspiciatis at sunt, aut nobis molestias eveniet corporis
                    reprehenderit cupiditate iure.</p>
                </div>
                <div className="testimonios">
                <h3>Testimonios</h3>
                <div className="testimonio">
                    <span class="comentario">Excelente Lugar.</span>
                    <span class="autor">Rodrigo</span>
                </div>
                <div class="testimonio">
                    <span class="comentario">Me encanta, volveria mil veces.</span>
                    <span class="autor">Sofia</span>
                </div>
                <div class="testimonio">
                    <span class="comentario">El café es único.</span>
                    <span class="autor">Maria</span>
                </div>
                <div class="testimonio">
                    <span class="comentario">10 de 10.</span>
                    <span class="autor">Juan</span>
                </div>
            </div>
            </main>
    )
}

export default HomePage;