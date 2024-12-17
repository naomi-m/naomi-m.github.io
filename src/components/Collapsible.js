import { useState } from 'react';

const Collapsible = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);  // default collapsed

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);  // do opposite of current
  };

  return (
    <div className="collapsible">
        <button className="toggle" onClick={toggleCollapsible}>
            {label}{isOpen ? "see less ▲" : "see more ▼"}
        </button>
        <div className={`content ${isOpen ? 'show' : ''}`}>
            {children}
        </div>
    </div>
  );
};

export default Collapsible;