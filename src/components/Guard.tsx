import React, { FC, useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";

const Guard: FC<{ isConnected: any; children: React.ReactElement }> = ({
  isConnected,
  children,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isConnected) navigate("/login");
  }, []);
  return <>{children}</>;
};

export default Guard;
