import PlayIcon from "../components/PlayIcon";
import VolumeIcon from "../components/VolumeIcon";

function VolumeBar() {
  return (
    <div className="volume-bar">
      <PlayIcon />
      <progress
        className="volume-bar__slider"
        type="range"
        min={0}
        max={1}
        step={0.02}
      />
      <VolumeIcon />
      <span className="volume-bar__icon">Transcript</span>
    </div>
  );
}
export default VolumeBar;
