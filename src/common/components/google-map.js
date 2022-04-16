import React from "react";

const GoogleMap = () => {
  return (
    <div>
      <section className="wrapper bg-light">
        <div className="map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11879.0256531092!2d85.3105143448985!3d27.727922365540472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19219abefe0b%3A0x14c390496e30957a!2sSamakhusi%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1649008276882!5m2!1sen!2snp"
            style={{ width: "100%", height: "500px", border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default GoogleMap;
