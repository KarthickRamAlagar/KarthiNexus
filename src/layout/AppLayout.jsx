import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Outlet />
    </main>
  );
};

export default AppLayout;
