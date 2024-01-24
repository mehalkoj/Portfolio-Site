'use client';

import { useState, useEffect } from "react";

export default function MovingShadow(){
    const [position, setPosition] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      className="relative w-screen h-screen"
    >
      <div 
        className="absolute bg-amber-100 opacity-25 rounded-full"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: '-10px',
          top: '-10px',
          width: '20px',
          height: '20px',
        }}
      />
    </div>
  );
};