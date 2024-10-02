import React, { useState } from "react";
import "./wallpaperchanger.scss";

function WallpaperChanger() {
  const [wallpaper, setWallpaper] = useState("");

  const wallpapers = [
    "https://i.redd.it/wedn8ifzabx31.jpg",
    "https://i.imgur.com/7FdS105.jpg",
    "https://wallpaperaccess.com/full/487583.jpg",
    "https://i.redd.it/lw5xil2wwrv01.jpg",
  ];

  const changeWallpaper = () => {
    const randomIndex = Math.floor(Math.random() * wallpapers.length);
    setWallpaper(wallpapers[randomIndex]);
  };

  return (
    <div
      className="wallpaerchanging"
      style={{
        backgroundImage: `url(${wallpaper})`,
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <button
        onClick={changeWallpaper}
        style={{ padding: "10px 20px", marginTop: "20px" }}
      >
        Change Wallpaper
      </button>
    </div>
  );
}

export default WallpaperChanger;
