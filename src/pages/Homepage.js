import { Link } from "react-router-dom";

function Homepage() {
    return (
        
        <div className="container-lg">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-5 text-center text-md-start">
                    <h1>
                        <div className="display-2">Store name</div>
                        <div className="display-5 text-muted">Boho Design & Accesories</div>
                    </h1>
                    <p className="lead my-4 text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam omnis sequi ipsam itaque magni, mollitia animi ducimus dolore officia quis laboriosam eius rem exercitationem distinctio ad voluptate corporis temporibus maiores.</p>
                <Link to="/product-list" className="btn btn-secondary bt-lg"> See All Products</Link>
                </div>
            <div className="col-md-5 text-center d-none d-md-block">
                <img className="img-fluid" src="https://res.cloudinary.com/dfyitssyo/image/upload/v1665584229/Project3/boho-home_kxogoe.jpg" alt="ebook cover" />
            </div>
            </div>
        </div>
    )
}

export default Homepage;