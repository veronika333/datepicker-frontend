import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="row">
                <div className="col" style={{ marginLeft: '20px' }}>
                    <h6>App created by</h6>
                    <p>Olabisi Odusanya, Veronika Maisuradze, Makiyo Rönkkö</p>
                </div>
            </div>
            <hr />
            <div className="row">
                <p className="col" style={{ textAlign: 'center' }}>
                    &copy;{new Date().getFullYear()} DATEPICKER  All rights
            reserved
          </p>
            </div>
        </div>
    );
}

export default Footer;
