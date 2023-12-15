import { useState } from "react";
import { useLocation } from "react-router-dom";
import Chat from "../../../pages/Chat/ChatPage";

export default function ChatFlyover() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const handleChange = () => setIsOpen(!isOpen);

  // Do not render on '/' or '/signup' routes
  if (location.pathname === "/" || location.pathname === "/signup") {
    return null;
  }

  return (
    <div id="chat-flyover" style={{ zIndex: 3, position: "relative" }}>
      <button onClick={handleChange} id="buttons">
        {isOpen ? "Close" : "Open"} Chat
      </button>
      <dialog open={isOpen}>
        <Chat></Chat>
      </dialog>
    </div>
  );
}
