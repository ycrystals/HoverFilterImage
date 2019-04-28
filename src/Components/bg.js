import React from "react";

export default function({ src, width = 300, height = 200 }) {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `url(${src})`,
        borderRadius: "10px"
      }}
    />
  );
}
