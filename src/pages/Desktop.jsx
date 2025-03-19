import { useState } from "react";
import Component1 from "../components/Header";
import FOOTERBUT from "../components/Footer/Footer_but";
import CLOSEBUT from "../components/Footer/Close_But";
import FrameComponent1 from "../components/Right_Block/FrameComponent1";
import Subscribe from "../components/Subscribe";
import RevolutionBanner from "../components/RevolutionBanner";
import Sidebar from "../components/Footer/Sidebar";
import "./Desktop.css";

function Desktop() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggle = (newState) => {
    setSidebarOpen(newState);
  };

  const handleClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="desktop-1">
      <Component1 property1="Variant2" />

      <FOOTERBUT onToggle={handleToggle} />
      <Sidebar isOpen={sidebarOpen}>
        <CLOSEBUT onToggle={handleClose} className="sidebar-close" />
      </Sidebar>

      <main className="frame-parent">
        <FrameComponent1 />
        <Subscribe />
        <RevolutionBanner />
      </main>
    </div>
  );
}

export default Desktop;