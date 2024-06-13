/* eslint-disable no-unused-vars */
import React from "react";

function ProgressBar({ progress, color }) {
  let styles = {
    width: `${progress}%`,
    backgroundColor: color,
    textAlign: "center",
    borderRadius: "20px",
    color: "black",
  };

  return (
    <div
      id="wrapper"
      className=" w-[500px] flex justify-center items-center mt-20"
    >
      <div id="container" className="bg-gray-200 w-full rounded-xl px-1 py-1">
        <div>
          <div className="progress" style={styles}>
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
