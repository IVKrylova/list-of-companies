import './Button.css';

const Button = props => {
  return (
    <button type={props.type} className='button' disabled={props.disabled} onClick={props.onClickButtonDelete}>
      {props.buttonText}
    </button>
  );
}

export default Button;
