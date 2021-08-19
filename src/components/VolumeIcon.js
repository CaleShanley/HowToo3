import VolumeSvg from "../images/svg/volume.svg";
import React from "react";

function VolumeIcon() {
  return (
    <div className="volume-bar__icon">
      <img src={VolumeSvg} alt="ThumbIcon" />
    </div>
  );
}

export default VolumeIcon;
