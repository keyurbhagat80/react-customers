import styled from "styled-components";

const getVariationColor = (color: string) => {
  const mapColor: any = {
    success: "#155724",
    info: "#383d41",
    error: "#721c24"
  };
  return mapColor[color];
};

export const StyledNotificationWrapper = styled.div<{ variation: string }>`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  background-color: ${(props) => getVariationColor(props.variation)};
  color: #fff;
`;
