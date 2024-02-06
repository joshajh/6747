import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";


function Loading() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      <BeatLoader
        color={color}
        loading={loading}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loading;
