import './Button.css';

const Button = props => {
  const disabled = props.buttonText === 'Добавить' || props.buttonText === 'Добавить' ? !props.isValid : props.disabled;

  return (
    <button
      type={props.type}
      className={`button ${disabled ? 'button_disabled' : ''}`}
      disabled={disabled}
      onClick={props.onClickButtonDelete}
    >
      {props.buttonText}
    </button>
  );
}

export default Button;
