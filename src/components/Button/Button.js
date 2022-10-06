import './Button.css';

const Button = props => {
  return (
    <button type='submit' className='button' disabled={props.disabled}>
      {props.buttonText}
    </button>
  );
}

export default Button;
