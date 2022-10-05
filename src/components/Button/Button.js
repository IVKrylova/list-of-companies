import './Button.css';

const Button = props => {
  return (
    <button type='submit' className={`button ${props.isHidden ? 'button_hidden' : ''}`} disabled={props.disabled}>
      {props.buttonText}
    </button>
  );
}

export default Button;
