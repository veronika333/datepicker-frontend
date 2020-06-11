import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>App created by</h4>
                        <p>Olabisi Odusanya, Veronika Maisuradze, Makiyo Rönkkö</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} DATEPICKER  All rights
            reserved
          </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
