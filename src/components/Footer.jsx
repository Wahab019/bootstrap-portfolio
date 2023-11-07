import { Link } from "react-router-dom"

const Footer = () => {
    return (
        
        <footer className="bg-white py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto">
                        <div className="small m-0">
                            copyright &copy; Your Website 2023
                        </div>
                    </div>
                    <div class="col-auto">
                        <Link to={''}>
                            Privacy
                        </Link>    
                        <span class="mx-1">·</span>
                        <Link to={''}>
                            Terms
                        </Link>
                        <span class="mx-1">·</span>
                        <Link to={''}>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </footer>

    );
}
 
export default Footer;