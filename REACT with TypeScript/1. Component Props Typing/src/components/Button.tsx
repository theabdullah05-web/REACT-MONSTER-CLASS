interface buttonTypes {
  label: string;
  onclick: () => void;
  disabled: boolean;
}
const Button = ({ label, onClick, disabled }) => {
  return <div>Button</div>;
};

export default Button;
