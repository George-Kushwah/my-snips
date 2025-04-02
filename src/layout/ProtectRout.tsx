import React from "react";
import { Outlet } from "react-router-dom";

export default function ProtectRout() {
  const user = ["Admin", "User"];
  return user.includes("Admin") && user.includes("User") ? (
    <Outlet />
  ) : (
    "Only Admin Can Access"
  );
}
