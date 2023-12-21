import { Outlet } from "react-router-dom";

const LayoutRoot = () => {
  return (
    <>
      navbar
      <Outlet />
      <p>Footer</p>
    </>
  );
};

export default LayoutRoot;
