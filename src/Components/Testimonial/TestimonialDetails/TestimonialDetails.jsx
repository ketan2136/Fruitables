import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { useSelector } from 'react-redux';
import StarRatings from 'react-star-ratings';

const TestimonialDetails = () => {

    const reviews = useSelector(state => state.review);
    console.log(reviews.review);

    return (

        <div className="container-fluid testimonial py-5">
            <div className="container py-5">
                <div className="testimonial-header text-center">
                    <h4 className="text-primary">Our Testimonial </h4>
                    <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
                </div>
                <OwlCarousel className="owl-carousel testimonial-carousel">
                    {
                        reviews.review.map((v, i) => {
                            return (
                                <div className="testimonial-item img-border-radius bg-light rounded p-4">
                                    <div className="position-relative">
                                        <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: 30, right: 0 }} />
                                        <div className="mb-4 pb-4 border-bottom border-secondary">
                                            <p className="mb-0">{v.description}
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center flex-nowrap">
                                            <div className="bg-secondary rounded">
                                                <img src="img/testimonial-1.jpg" className="img-fluid rounded" style={{ width: 100, height: 100 }} alt />
                                            </div>
                                            <div className="ms-4 d-block">
                                                <h4 className="text-dark">{v.name}</h4>
                                                <p className="m-0 pb-3">Profession</p>
                                                <StarRatings
                                                    rating={v.rating} // Pass the rating value directly to the rating prop
                                                    numberOfStars={5}
                                                    name={`rating`} // Use a unique name for each rating
                                                    starRatedColor="green"
                                                    starDimension="30px"
                                                    starSpacing="2px"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }


                    {/* <div className="testimonial-item img-border-radius bg-light rounded p-4">
                    <div className="position-relative">
                        <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: 30, right: 0 }} />
                        <div className="mb-4 pb-4 border-bottom border-secondary">
                            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </p>
                        </div>
                        <div className="d-flex align-items-center flex-nowrap">
                            <div className="bg-secondary rounded">
                                <img src="img/testimonial-1.jpg" className="img-fluid rounded" style={{ width: 100, height: 100 }} alt />
                            </div>
                            <div className="ms-4 d-block">
                                <h4 className="text-dark">Client Name</h4>
                                <p className="m-0 pb-3">Profession</p>
                                <div className="d-flex pe-5">
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item img-border-radius bg-light rounded p-4">
                    <div className="position-relative">
                        <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: 30, right: 0 }} />
                        <div className="mb-4 pb-4 border-bottom border-secondary">
                            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </p>
                        </div>
                        <div className="d-flex align-items-center flex-nowrap">
                            <div className="bg-secondary rounded">
                                <img src="img/testimonial-1.jpg" className="img-fluid rounded" style={{ width: 100, height: 100 }} alt />
                            </div>
                            <div className="ms-4 d-block">
                                <h4 className="text-dark">Client Name</h4>
                                <p className="m-0 pb-3">Profession</p>
                                <div className="d-flex pe-5">
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                </OwlCarousel>
            </div>
        </div>

    )
}

export default TestimonialDetails
