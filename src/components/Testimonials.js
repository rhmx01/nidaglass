import React from 'react';
import "../css/testimonial.css"
import {Star, StarOutline, StarOutlined} from "@mui/icons-material";

const Testimonials = () => {
    return (
        <div>
            <section id="testimonials">
                <div className="testimonial-heading">
                    <span>Comments</span>
                    <h4>Clients Says</h4>
                </div>
                <div className="testimonial-box-container">
                    { ["Rachid hamma", "idir", "ayoub", "hicham", "idir", "ayoub"].map((review => (
                        <div className="testimonial-box">
                            <div className="box-top">
                                <div className="profile">
                                    <div className="profile-img">
                                        <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" alt="text"/>
                                    </div>
                                    <div className="name-user">
                                        <strong>Liam mendes</strong>
                                        <span>@liammendes</span>
                                    </div>
                                </div>
                                <div className="reviews">
                                    <Star className="text-yellow-400"/>
                                    <Star className="text-yellow-400"/>
                                    <Star className="text-yellow-400"/>
                                    <Star className="text-yellow-400"/>
                                    <StarOutline className="text-yellow-400"/>
                                </div>
                            </div>
                            <div className="client-comment">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis?
                                    Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum
                                    aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
                            </div>
                        </div>
                    ) )) }
                </div>
            </section>
        </div>
    );
};

export default Testimonials;