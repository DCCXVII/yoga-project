import React from "react";
import "./PricingCard.css"
const PricingCard = () =>{
    return(
        <>
  <div className="pricing-card">
  <div className="pricing-plan">
    <h3>Basic</h3>
    <hr className="line" />
    <p className="price">$9<span>/month</span></p>
    <ul className="accessibilies-list">
      <li className="pricing-list"><i className="fa fa-check-circle"></i>  1 Live access</li>
      <hr className="line-in" />
      <li className="pricing-list"><i className="fa fa-check-circle"></i>  Unlimited replays</li>
      <hr className="line-in" />
      <li className="pricing-list"><i className="fa fa-check-circle"></i>  Unlimited replays phone</li>
      <hr className="line-in" />
      <li className="pricing-list"><i className="fa fa-check-circle"></i>  Support via email</li>
    </ul>
    <a href="#" className="pricing-btn btn-primary">Subscribe Now</a>
  </div>
  <div className="pricing-plan pro">
    <h3 id="title-pro">Pro</h3>
    <hr className="line" id="line-pro" />
    <p className="price" id="price-pro">$19<span>/3 months</span></p>
    <ul className="accessibilies-list">
      <li className="pricing-list-pro"><i className="fa fa-check-circle"></i>  3 Live access</li>
      <hr className="line-in" />
      <li className="pricing-list-pro"><i className="fa fa-check-circle"></i>  Unlimited replays</li>
      <hr className="line-in" />
      <li className="pricing-list-pro"><i className="fa fa-check-circle"></i>  Support via phone</li>
      <hr className="line-in" />
      <li className="pricing-list-pro"><i className="fa fa-check-circle"></i>  Support via coaching</li>
    </ul>
    <a href="#" className="pricing-btn btn-outline-primary" id="btn-pro">Get started</a>
  </div>
  <div className="pricing-plan">
    <h3>Business</h3>
    <hr className="line" />
    <p className="price">$39<span>/1 year</span></p>
    <ul className="accessibilies-list">
      <li className="pricing-list"><i className="fa fa-check-circle"></i>  Unlimited Live access</li>
      <hr className="line-in" />
      <li className="pricing-list"><i className="fa fa-check-circle"></i>  Unlimited replays</li>
      <hr className="line-in" />
      <li className="pricing-list"><i className="fa fa-check-circle"></i>  Priority at supporting</li>
      <hr className="line-in" />
      <li className="pricing-list"><i className="fa fa-check-circle"></i>  Unlimited content</li>
    </ul>
    <a href="#" className="pricing-btn btn-primary">Subscribe Now</a>
  </div>
</div>

        </>
    );
}

export default PricingCard;