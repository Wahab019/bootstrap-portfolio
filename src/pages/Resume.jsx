import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDownload, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import Card from '../components/Card';
import Card2 from '../components/Card2';

import { Link } from "react-router-dom"



const Resume = () => {
    return (

        // HEADER
        <div className="container px-5 my-5">
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bolder mb-0">
                    <span className="resume-gradient d-inline">
                        Resume    
                    </span>
                </h1>
            </div>

            <div className="row gx-5 justify-content-center">
                <div className="col-lg-11 col-xl-9 col-xxl-8">

                    {/* EXPERIENCE CARD */}
                    <section>


                        <div className="d-flex align-items-center justify-content-between m-4">
                            <h2 className="text-primary fw-bolder mb-0">
                                Experience
                            </h2>
                            
                            <Link className="btn btn-primary px-4 py-3" to={''}>
                                <div className="d-inline-block me-2">
                                    <FontAwesomeIcon icon={faDownload} />
                                </div>
                                Download Resume
                            </Link>
                        </div>

                        <Card years={'2019-Present'} job={'Web Developer'} company={'Stark Industries'} region={'Los Angeles, CA'} about={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.'} />

                        <Card years={'2017-2019'} job={'SEM Specialist'} company={'Wayne Enterprises'} region={'Gotham City, NY'} about={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.'} />
                        
                    </section>

                    {/* EDUCATIONAL CARD */}
                    <section>

                        <div className="d-flex align-items-center justify-content-between m-4">
                            <h2 className="alternate-text fw-bolder mb-0">
                                Education
                            </h2> 
                        </div>

                        <Card2 years={'2015-2017'} institution={'Barnett College'} region={'Fairfield, NY'} certificate={"Master's Web Development"} about={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.'} />

                        <Card2 years={'2011-2015'} institution={'ULA'} region={'Los Angeles, CA'} certificate={'Undergraduate Computer Science'} about={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.'} />

                    </section>

                    <section className='mt-5'>

                        {/* SKILLS */}
                        <div className="card shadow border rounded-4 mb-5">
                            <div className="card-body p-5">

                                <div className="mb-5">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="skill-icon text-white rounded-3 me-3">
                                            <FontAwesomeIcon icon={faScrewdriverWrench} />
                                        </div>
                                        <h3 className="fw-bolder mb-0">
                                            <span className='d-inline skill-gradient'>
                                                Professional Skills
                                            </span>
                                        </h3>
                                    </div>

                                    <div className="row row-cols-1 row-cols-md-3 mb-4">
                                        <div class="col mb-4 mb-md-0">
                                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                SEO/SEM Marketing
                                            </div>
                                        </div>
                                        <div class="col mb-4 mb-md-0">
                                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                Statistical Analysis
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                Web Development
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row row-cols-1 row-cols-md-3">
                                    <div class="col mb-4 mb-md-0">
                                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                Network Security
                                            </div>
                                        </div>
                                        <div class="col mb-4 mb-md-0">
                                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                Adobe Software Suite
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                User Interface Design
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* LANGUAGES */}
                                <div className="mb-0">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="skill-icon text-white rounded-3 me-3">
                                            <FontAwesomeIcon icon={faCode} />
                                        </div>
                                        <h3 className="fw-bolder mb-0">
                                            <span className='d-inline language-gradient'>
                                                Languages
                                            </span>
                                        </h3>
                                    </div>

                                    <div className="row row-cols-1 row-cols-md-3 mb-4">
                                        <div class="col mb-4 mb-md-0">
                                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                HTML
                                            </div>
                                        </div>
                                        <div class="col mb-4 mb-md-0">
                                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                CSS
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                JavaScript
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row row-cols-1 row-cols-md-3">
                                    <div class="col mb-4 mb-md-0">
                                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                Python
                                            </div>
                                        </div>
                                        <div class="col mb-4 mb-md-0">
                                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                Ruby
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                Node.js
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </section>
                    
                </div>
            </div>
        </div>

    );
}
 
export default Resume;