import React from "react";
import LottieCard from "../LottieCard";

function Second() {
  return (
    <div className="dwar-second-page">
      <div className="left">
        <h1>
          How it works...
        </h1>

        <p>
        Our system streamlines complex manufacturing transactions, enhances transparency, and fosters collaboration among stakeholders through decentralization.
        </p>
        <ul>
            <li>Verify Product: Scan a QR code to confirm authenticity.</li>
            <li>Purchase Confidently: Enjoy a seamless warranty.</li>
            <li>Easy Registration: Paperless warranty registration.</li>
            <li>Streamlined Claims: Quick and simple claims process.</li>
            <li>Blockchain Security: Secure and transparent records.</li> 
        </ul>
      </div>
      <div className="right">
        <LottieCard width="90%" src="https://assets7.lottiefiles.com/packages/lf20_9xrenieu.json" />
      </div>
    </div>
  );
}

export default Second;
