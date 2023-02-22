import css from './contactItem.module.css'
import PropTypes from 'prop-types';

const ContactItem = ({
  id,
  name,
  number,
  onClick  
}) => {
    return (
        <li>{ name }: { number } 
            <button
             name={ id }
             className={ css.contactItemButton }
             onClick={ onClick }>Delete</button>
        </li>
    );
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default ContactItem;