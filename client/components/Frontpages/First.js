import React from "react";
import LottieCard from "../LottieCard";

function First() {
  return (
    <div className="dwar-first-page">
      <div className="left">
        <h1>
          Welcome to <span className="dark-blue">Warrant<span className="gradient">iQ</span></span>
        </h1>

        <p>
            It's an end-to-end decentralized system for managing warranties and supply chains using secure QR codes. Scan the QR code on premium products before purchase to check their origin and authenticity. It also streamlines warranty claims and transfers securely. Efficient warranty management is vital for manufacturers to prevent fraud and enhance customer satisfaction.
        </p>
        <button>Explore</button>
      </div>
      <div className="right">
        <LottieCard width="80%" src="https://assets7.lottiefiles.com/packages/lf20_kndsasgl.json" />
      </div>
    </div>
  );
}

export default First;
