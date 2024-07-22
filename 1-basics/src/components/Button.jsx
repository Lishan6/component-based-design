import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({text}) => {
  //console.log('props', props);

  return <button className='btn'>{text}</button>;
};
Button.prototype={
  text: PropTypes.string.isRequired
};
