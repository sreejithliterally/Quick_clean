import React from 'react';
import './services.css';


import washing from "../../public/img/washing.svg";
import drying from "../../public/img/dry.svg";
import folding from "../../public/img/folding.svg";
import ironing from "../../public/img/ironing.svg";
import dry from "../../public/img/drying.svg";
import delivery from "../../public/img/del.svg";


const LaundryServices = () => {
  const services = [
    { name: 'Washing', image: washing },
    { name: 'Drying', image: drying },
    { name: 'Folding', image: folding },
    { name: 'Ironing', image: ironing },
    { name: 'Dry Cleaning', image: dry },
    { name: 'Pickup & Delivery', image: delivery },
  ];

  return (
    <div className="services-container">
      <div className="row">
        {services.slice(0, 3).map((service, index) => (
          <div className="service-box" key={index}>
            <img
              src={service.image}
              alt={service.name}
              className="service-image"
            />
            <h3>{service.name}</h3>
            {/* Add additional information about the service */}
          </div>
        ))}
      </div>
      <div className="row">
        {services.slice(3, 6).map((service, index) => (
          <div className="service-box" key={index}>
            <img
              src={service.image}
              alt={service.name}
              className="service-image"
            />
            <h3>{service.name}</h3>
            {/* Add additional information about the service */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaundryServices;
