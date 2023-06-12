import React from "react";
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import "../styles/PhotographerStyles.css";
import Ankita_Asthana from '../images/Ankita_Asthana.jpg';
import Dhanika_Choksi from '../images/Dhanika_Choksi.jpg';
import Geeshan_Bandara from '../images/Geeshan_Bandara.jpg';
import Nitika_Bhasin from '../images/Nitika_Bhasin.jpg';
import Nitin_Dangwal from '../images/Nitin_Dangwal.jpg';
import Rish_Agarwal from '../images/Rish_Agarwal.jpg';
import Shivali_Chopra from '../images/Shivali_Chopra.jpg';
import Sujith_Kumar from '../images/Sujith_Kumar.jpg';
import William_Lambelet from '../images/William_Lambelet.jpg';

const Photographer = () => {
    const navigate = useNavigate();

  return (
    <Layout title="Photographer">
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <div className="container mt-3 category">
            <h4 className="text-center">Our Esteemed Photographers</h4>
            <div className="row">
            <div className="col-md-9 offset-1">
                <div className="d-flex flex-wrap">  
                    <div className="card m-2" key="1">
                        <img
                            src={Ankita_Asthana}
                            className="card-img-top"
                            alt="Ankita Asthana"
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">Ankita Asthana</h5>
                            <h5 className="card-title">Wedding Photographer</h5>
                            <div className="card-name-price">
                                <h5 className="card-title">Location</h5>
                                <h5 className="card-title card-price">
                                    Mumbai
                                </h5>
                            </div>                                
                            <div className="card-name-price">
                                <h5 className="card-title">Base Price</h5>
                                <h5 className="card-title card-price">
                                    1.5 Lakhs
                                </h5>
                            </div>                                
                            <div className="card-name-price">
                                <button
                                    className="btn btn-info ms-1"
                                    onClick={() => navigate(`/contact`)}
                                >
                                    Book Photographer
                                </button>
                            </div>
                        </div>
                    </div>                   
                    <div className="card m-2" key="2">
                        <img
                            src={Dhanika_Choksi}
                            className="card-img-top"
                            alt="Dhanika Choksi"
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">Dhanika Choksi</h5>
                            <h5 className="card-title">Wedding Photographer</h5>
                            <div className="card-name-price">
                                <h5 className="card-title">Location</h5>
                                <h5 className="card-title card-price">
                                    Gurgaon
                                </h5>
                            </div>                                
                            <div className="card-name-price">
                                <h5 className="card-title">Base Price</h5>
                                <h5 className="card-title card-price">
                                    90 K
                                </h5>
                            </div>                                
                            <div className="card-name-price">
                                <button
                                    className="btn btn-info ms-1"
                                    onClick={() => navigate(`/contact`)}
                                >
                                    Book Photographer
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card m-2" key="3">
                        <img
                            src={Geeshan_Bandara}
                            className="card-img-top"
                            alt="Geeshan Bandara"
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">Geeshan Bandara</h5>
                            <h5 className="card-title">Cinematographer & Event Photographer</h5>
                            <div className="card-name-price">
                                <h5 className="card-title">Location</h5>
                                <h5 className="card-title card-price">
                                    UAE
                                </h5>
                            </div>                                
                            <div className="card-name-price">
                                <h5 className="card-title">Base Price</h5>
                                <h5 className="card-title card-price">
                                    2.4 Lakhs
                                </h5>
                            </div>                                
                            <div className="card-name-price">
                                <button
                                    className="btn btn-info ms-1"
                                    onClick={() => navigate(`/contact`)}
                                >
                                    Book Photographer
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card m-2" key="4">
                        <img
                            src={Nitika_Bhasin}
                            className="card-img-top"
                            alt="Nitika Bhasin"
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">Nitika Bhasin</h5>
                            <h5 className="card-title">Wedding Photographer</h5>
                            <div className="card-name-price">
                                <h5 className="card-title">Location</h5>
                                <h5 className="card-title card-price">
                                    Mumbai
                                </h5>
                            </div>                                
                            <div className="card-name-price">
                                <h5 className="card-title">Base Price</h5>
                                <h5 className="card-title card-price">
                                    90 K
                                </h5>
                            </div>                                
                            <div className="card-name-price">
                                <button
                                    className="btn btn-info ms-1"
                                    onClick={() => navigate(`/contact`)}
                                >
                                    Book Photographer
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card m-2" key="5">
                        <img
                            src={Nitin_Dangwal}
                            className="card-img-top"
                            alt="Nitin Dangwal"
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">Nitin Dangwal</h5>
                            <h5 className="card-title">Wedding & Celebrity Photographer</h5>
                            <div className="card-name-price">
                                <h5 className="card-title">Location</h5>
                                <h5 className="card-title card-price">
                                    Delhi
                                </h5>
                            </div>                                
                            <div className="card-name-price">
                                <h5 className="card-title">Base Price</h5>
                                <h5 className="card-title card-price">
                                    2.5 Lakhs
                                </h5>
                            </div>                                
                            <div className="card-name-price">
                                <button
                                    className="btn btn-info ms-1"
                                    onClick={() => navigate(`/contact`)}
                                >
                                    Book Photographer
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card m-2" key="6">
                        <img
                            src={Rish_Agarwal}
                            className="card-img-top"
                            alt="Rish Agarwal"
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">Rish Agarwal</h5>
                            <h5 className="card-title">Wedding Photographer</h5>
                            <div className="card-name-price">
                                <h5 className="card-title">Location</h5>
                                <h5 className="card-title card-price">
                                    Delhi
                                </h5>
                            </div>                                
                            <div className="card-name-price">
                                <h5 className="card-title">Base Price</h5>
                                <h5 className="card-title card-price">
                                    1.4 Lakhs
                                </h5>
                            </div>                                
                            <div className="card-name-price">
                                <button
                                    className="btn btn-info ms-1"
                                    onClick={() => navigate(`/contact`)}
                                >
                                    Book Photographer
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card m-2" key="7">
                        <img
                            src={Shivali_Chopra}
                            className="card-img-top"
                            alt="Shivali Chopra"
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">Shivali Chopra</h5>
                            <h5 className="card-title">Wedding Photographer</h5>
                            <div className="card-name-price">
                                <h5 className="card-title">Location</h5>
                                <h5 className="card-title card-price">
                                    Delhi
                                </h5>
                            </div>                                
                            <div className="card-name-price">
                                <h5 className="card-title">Base Price</h5>
                                <h5 className="card-title card-price">
                                    80 K
                                </h5>
                            </div>                                
                            <div className="card-name-price">
                                <button
                                    className="btn btn-info ms-1"
                                    onClick={() => navigate(`/contact`)}
                                >
                                    Book Photographer
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card m-2" key="8">
                        <img
                            src={Sujith_Kumar}
                            className="card-img-top"
                            alt="Sujith Kumar"
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">Sujith Kumar</h5>
                            <h5 className="card-title">Wedding Photographer</h5>
                            <div className="card-name-price">
                                <h5 className="card-title">Location</h5>
                                <h5 className="card-title card-price">
                                    Chennai
                                </h5>
                            </div>                                
                            <div className="card-name-price">
                                <h5 className="card-title">Base Price</h5>
                                <h5 className="card-title card-price">
                                    1.2 Lakhs
                                </h5>
                            </div>                                
                            <div className="card-name-price">
                                <button
                                    className="btn btn-info ms-1"
                                    onClick={() => navigate(`/contact`)}
                                >
                                    Book Photographer
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card m-2" key="9">
                        <img
                            src={William_Lambelet}
                            className="card-img-top"
                            alt="Ankita Asthana"
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">William_Lambelet</h5>
                            <h5 className="card-title">Wedding Photographer</h5>
                            <div className="card-name-price">
                                <h5 className="card-title">Location</h5>
                                <h5 className="card-title card-price">
                                    Pan India
                                </h5>
                            </div>                                
                            <div className="card-name-price">
                                <h5 className="card-title">Base Price</h5>
                                <h5 className="card-title card-price">
                                    4 Lakhs
                                </h5>
                            </div>                                
                            <div className="card-name-price">
                                <button
                                    className="btn btn-info ms-1"
                                    onClick={() => navigate(`/contact`)}
                                >
                                    Book Photographer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>        
      </div>
    </Layout>
  );
};

export default Photographer;
