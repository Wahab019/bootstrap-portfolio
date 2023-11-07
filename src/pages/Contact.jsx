import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        
        <section className="py-5">
            <div className="container px-5">
                <div className="bg-light rounded-4 py-5 px-4 px-md-5">

                    {/* HEADER */}
                    <div className="text-center mb-5">
                        <div className="message-icon text-white rounded-3 mb-3">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <h1 className="fw-bolder">
                            Get in touch
                        </h1>
                        <p className="lead fw-normal text-muted mb-0">
                            Let's work together!
                        </p>
                    </div>

                    <div className="row gx-5 justify-content-center">

                        {/* FORM */}
                        <div className="col-lg-8 col-xl-6">
                            <form action="">
                                <div className="form-floating mb-3">
                                    <input className='form-control' placeholder='Full name' type="text" required />
                                    <label htmlFor="name">Full name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className='form-control' placeholder='Email address' type="email" required />
                                    <label htmlFor="email">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className='form-control' placeholder='Phone no' type="tel" required />
                                    <label htmlFor="phone">Phone number</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className='form-control message-space' placeholder='Message' type="text" required />
                                    <label htmlFor="message">Message</label>
                                </div>
                                <div className="d-grid">
                                    <div className="btn btn-primary btn-lg">
                                        Submit
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
}
 
export default Contact;