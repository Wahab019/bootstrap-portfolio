const Card = ({ years, job, company, region, about}) => {
    return (

        <div className="card shadow border-0 rounded-4 mb-5">
            <div className="card-body p-5">
                <div className="row align-items-center gx-5">

                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-light p-4 rounded-4">
                            <div className="text-primary fw-bolder mb-2">{years}</div>
                            <div className="small fw-bolder">{job}</div>
                            <div className="small text-muted">{company}</div>
                            <div className="small text-muted">{region}</div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div>
                            {about}
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}
 
export default Card;