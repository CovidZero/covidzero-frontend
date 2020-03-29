import React from "react";

const Loading = ({ spinning = true, fullScreen, transparent }) => (
  <div className={`loader-container ${spinning ? "show" : "hidden"}`}>
    <div className="loader-5 loader-center">
      <span></span>
    </div>
  </div>
);

export default Loading;
