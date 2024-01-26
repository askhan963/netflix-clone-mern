import React from "react";
import background from "../assets/bg.jpg";

export default function BackgroundImage() {
  return (
    <div className="h-screen w-screen">
      <img className="h-full w-full" src={background} alt="background" />
    </div>
  );
}
