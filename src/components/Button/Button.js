import './Button.css';

const Button = props => {
  const disabled = props.buttonText === 'Добавить' || props.buttonText === 'Сохранить' ? !props.isValid : props.disabled;
  const classNameButton = `button ${disabled ? 'button_disabled' : ''} ${props.classModifier ? props.classModifier : ''}`;

  return (
    <button
      type={props.type}
      className={classNameButton}
      disabled={disabled}
      onClick={props.onClickButtonDelete}
    >
      {props.buttonText}
    </button>
  );
}

export default Button;
