import { FiPhone } from 'react-icons/fi';
import { DetailsWrapper, PhoneNumberWrapper } from './PhoneView.Styled';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { selectContacts } from 'redux/contacts/selectors';

const PhoneView = () => {
  // const allContacts = useSelector(selectContacts);
  // const { id } = useParams();

  // const currentContact = allContacts.find(contact => contact.id === id);

  return (
    <div>
      <DetailsWrapper>
        <h2>Contact Details</h2>
        <PhoneNumberWrapper>
          <FiPhone size={21} />
          {/*<a href={`tel:${currentContact.number}`}>{currentContact.number}</a>*/}
          <p> tel: </p>
        </PhoneNumberWrapper>
      </DetailsWrapper>
    </div>
  );
};

export default PhoneView;

