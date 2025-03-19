// pages/Desktop.jsx
import { useState } from "react";
import Component1 from "../components/Component1";
import FOOTERBUT from "../components/footer/FOOTERBUT";
import CLOSEBUT from "../components/footer/CLOSEBUT";
import FrameComponent1 from "../components/FrameComponent1";
import SocialMedia from "../components/SocialMedia";
import RevolutionBanner from "../components/RevolutionBanner";
import Sidebar from "../components/footer/Sidebar";
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
        <SocialMedia />
        <RevolutionBanner />
      </main>
    </div>
  );
}

export default Desktop;