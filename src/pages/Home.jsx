import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from "react-router-dom"

import profile from '../assets/images/profile.png'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (

        <main>

            {/* HEADER */}

            <section className="py-5">

                <div className="container px-5 pb-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-xxl-5">
                            <div className="text-center text-xxl-start">
                                <div className="badge alternate-background text-white mb-4">
                                    <div>DESIGN · DEVELOPMENT · MARKETING</div>
                                </div>
                                <div className="fs-3 fw-light text-muted">
                                    I can help your business to
                                </div>
                                <h1 className="display-3 fw-bolder mb-5">
                                    <span className="online-gradient d-inline">
                                        Get online and grow fast
                                    </span>
                                </h1>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                    <Link className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" to={'/resume'}>
                                        Resume
                                    </Link>
                                    <Link className="btn btn-outline-dark btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" to={'/projects'}>
                                        Projects
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* HEADER IMAGE */}
                        <div className="col-xxl-7">
                            <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                                <div className="profile alternate-background">
                                    
                                    <img src={profile} className='profile-img' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* ABOUT */}
            <section className='bg-light py-5'>

                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-xxl-8">
                            <div className="text-center my-5">

                                <h2 className='display-5 fw-bolder'>
                                    <span className="d-inline text-gradient">
                                        About Me
                                    </span>
                                </h2>

                                <p className="lead fw-light mb-4">
                                    My name is Start Bootstrap and I help brands grow.
                                </p>

                                <p className="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque dolorem?
                                </p>

                                {/* SOCIALS */}
                                <div className="d-flex justify-content-center fs-2 gap-4">

                                    <Link className="text-gradient" to={''}>
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </Link>
                                    <Link className="text-gradient" to={''}>
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </Link>
                                    <Link className="text-gradient" to={''}>
                                        <FontAwesomeIcon icon={faGithub} />
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </main>

    );
}
 
export default Home;