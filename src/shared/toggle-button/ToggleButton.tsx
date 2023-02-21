import "./ToggleButton.scss";

interface ToggleButtonProps {
  isActive: boolean;
  onToggle: (isActive: boolean) => void;
}

const ToggleButton = ({ isActive, onToggle }: ToggleButtonProps) => {
  return (
    <span
      className={isActive ? "toggle_button toggle_active" : "toggle_button"}
      onClick={() => onToggle(!isActive)}
    >
      <span className="line1"></span>
      <span className="line2"></span>
      <span className="line3"></span>
    </span>
  );
};

export default ToggleButton;
