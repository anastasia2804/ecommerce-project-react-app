import { Link } from "react-router-dom";

function Homepage() {
    return (
        
        <div className="container-lg mt-4">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-5 text-center text-md-start">
                    <h1>
                        <div className="display-2">Pura Vida</div>
                        <div className="display-5 text-muted">Bohemian Decor & Accessories</div>
                    </h1>
                    <p className="lead my-4 text-muted">Shop unique pieces to bring warm and eclectic style to your home. Create your dream setting for an event or family gathering. Add a personal touch with boho-inspired handmade accessories.</p>
                    <Link to="/product-list" className="btn btn-secondary bt-lg"> See All Products</Link>
                </div>
            <div className="col-md-5 text-center">
                <img className="img-fluid mt-5" src="https://res.cloudinary.com/dfyitssyo/image/upload/v1665584229/Project3/boho-home_kxogoe.jpg" alt="cover" />
            </div>
            </div>
        </div>
    )
}

export default Homepage;