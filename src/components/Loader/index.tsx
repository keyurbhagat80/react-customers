import React from "react";
import { StyledProgress, StyledProgressBar } from "./Loader.style";

const Loader: React.FC<{}> = () => {
  return (
    <StyledProgress>
      <StyledProgressBar width={75} />
    </StyledProgress>
  );
};

export default Loader;
