import React, { useEffect, useState } from "react";
import "./sayac.css";

function Sayac() {
  const [süre, setSüre] = useState(0);
  // const yolcu = new Audio("audio/yolcu.m4a");
  // const savunma = new Audio("audio/savunma.m4a");
  // const savas = new Audio("audio/savas.m4a");
  useEffect(() => {
    const yolcu = new Audio("audio/yolcu.m4a");
    const savunma = new Audio("audio/savunma.m4a");
    const savas = new Audio("audio/savas.m4a");
    let interval;
    if (süre <= 0) {
      clearInterval(interval);
    } else {
      interval = setInterval(() => {
        setSüre(süre - 1);
      }, 1000);
    }
    if (süre <= 15 && süre > 0) {
      yolcu.play();
    }
    if (süre === 1150) {
      savunma.play();
    }
    if (süre === 1035) {
      savas.play();
    }

    return () => {
      clearInterval(interval);
    };
  }, [setSüre, süre]);

  console.log(süre);

  return (
    <div className="kutu">
      <div className="sarici">
        <button
          className="yolcu"
          disabled={süre > 0 && true}
          onClick={() => setSüre(1200)}
        >
          {süre === 0
            ? "Yolculuğa Başla"
            : süre > 840
            ? "Yolculuk Başladı"
            : `Yolculuğa ${
                süre >= 60
                  ? `${Number(((süre - 30) / 60).toFixed(0)) + 1} dk`
                  : `${süre} sn`
              }`}
        </button>
        <button className="res" onClick={() => setSüre(0)}></button>
      </div>

      <div
        className="direk"
        style={{ backgroundColor: süre - 1150 <= 0 && "red" }}
      >
        {süre === 0
          ? "Yolculuk başlamadı"
          : süre - 1140 >= 0
          ? `Savunmaya ${süre - 1140} sn`
          : süre > 1020
          ? "Savunma başladı"
          : "Savunma Bitti"}
      </div>
      <div
        className="hidra"
        style={{ backgroundColor: süre - 1030 <= 0 && "red" }}
      >
        {süre === 0
          ? "Yolculuk başlamadı"
          : süre - 1020 >= 0
          ? `Savaşa ${
              süre - 1020 >= 60
                ? `${((süre - 1020) / 60).toFixed(0)} dk `
                : `${süre - 1020} sn`
            } `
          : süre > 840
          ? "Savaş başladı"
          : "Savaş Bitti"}
      </div>
    </div>
  );
}

export default Sayac;
