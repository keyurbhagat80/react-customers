import React from "react";
import { StyledNotificationWrapper } from "./notification.style";

const Notification: React.FC<{ children: string; variation: string }> = ({
  children,
  variation
}) => {
  return (
    <StyledNotificationWrapper variation={variation}>
      {children}
    </StyledNotificationWrapper>
  );
};

export default Notification;
