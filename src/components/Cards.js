import React from 'react'
import CustomBtn from './CustomBtn.js';
import '../styles/Cards.css';

function Cards() {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-6 col-xl-3 my-3">
                        <div class="card d-block h-100 box-shadow-hover pointer">
                            <div class="align-items-center d-flex justify-content-center">
                                <img src="https://images.unsplash.com/photo-1602526432604-029a709e131c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9iaWxlJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60" className="card-img-top" alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 className="card-title"> Mobile Accessories</h5>
                                <p className="card-text">Buy mobile phone accessories online for smartphones, android phones, dual sim phones, touchscreen phones, and more.</p>
                                <CustomBtn />
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-6 col-xl-3 my-3">
                        <div class="card d-block h-100 box-shadow-hover pointer">
                            <div class="align-items-center d-flex justify-content-center">
                                <img src="https://media.istockphoto.com/photos/creating-new-cities-picture-id539350870?b=1&k=20&m=539350870&s=170667a&w=0&h=XqNaImvZ-mqg2o3QZsReFjOSvipO2MjURFBut-Jg75k=" className="card-img-top" alt="..." />
                            </div>

                            <div class="card-body">
                                <h5 className="card-title">Kids Toys</h5>
                                <p className="card-text">Choose to buy toys online and it will offer you widest range with features, specifications, skill-set and use of toy.</p>
                                <CustomBtn />
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-6 col-xl-3 my-3">
                        <div class="card d-block h-100 box-shadow-hover pointer">
                            <div class="align-items-center d-flex justify-content-center">
                                <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" className="card-img-top" alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 className="card-title">Custom Frames</h5>
                                <p className="card-text">A custom frame is the best way to display and protect prints, posters and photos that have special meaning to you.</p>
                                <CustomBtn />
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-6 col-xl-3 my-3">
                        <div class="card d-block h-100 box-shadow-hover pointer">
                            <div class="align-items-center d-flex justify-content-center">
                                <img src="https://media.istockphoto.com/photos/collection-of-different-toys-on-wooden-table-picture-id1322274556?b=1&k=20&m=1322274556&s=170667a&w=0&h=KMtQ3_UG6o2EF-2XcEDs0FSH8SocMVv3ifmJvR8p5rM=" className="card-img-top" alt="..." />
                            </div>
                            <div class="card-body p-4">
                                <h5 className="card-title">Gifts</h5>
                                <p className="card-text">We offer a diverse range of gift items like personalised gifts, flowers & cakes, flowers with chocolates, flower bunches, flowers with teddy, birthday hampers,etc.</p>
                                <CustomBtn />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards