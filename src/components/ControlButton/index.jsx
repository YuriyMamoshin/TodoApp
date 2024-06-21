import { StyledControlButton } from "src/components/ControlButton/styled";

export default function ControlButton({ iconName, onClick }) {
  return <StyledControlButton iconName={iconName} onClick={onClick} />;
}
