import styled from "styled-components";

export const StyledProgress = styled.div`
  display: flex;
  height: 2.5rem;
  overflow: hidden;
  font-size: 0.75rem;
  background-color: #e9ecef;
  border-radius: 0.25rem;
`;

export const StyledProgressBar = styled.div<{ width: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  text-align: center;
  background-color: #17a2b8;
  transition: width 0.6s ease;
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 2.5rem 2.5rem;
  animation: progress-bar-stripes 1s linear infinite;
  width: ${(props) => props.width}%;
`;
