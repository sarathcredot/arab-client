import { useEffect, useRef } from "react";
import styles from "./Dropdown.module.scss";
import { MdMoreVert } from "react-icons/md";

const Dropdown = ({ children, toggleDropdown, isOpen, itemId, setIsOpen }) => {
  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      console.log(!e?.target?.className?.baseVal?.includes("dropdown_button"), 'CONDITION')
      console.log(e?.target?.className, 'CLASSNAME')
      if (!e?.target?.className?.baseVal?.includes("dropdown_button")) {
        toggleDropdown(e, null);
      }
    };

    // Attach event listener
    document.addEventListener("click", handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggleDropdown]);

  return (
    <div className={`${styles.dropdown} dropdown_button`}>
      <button
        className={`${styles.dropdownButton} dropdown_button`}
        onClick={(e) => toggleDropdown(e, itemId)}
      >
        <MdMoreVert className="dropdown_button" size={24} />
      </button>
      {isOpen === itemId && (
        <div className={styles.dropdownContent}>{children}</div>
      )}
    </div>
  );
};

export default Dropdown;
