import { Suspense, useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  BackBtn,
  AvatarWrapper,
  Avatar,
  TopContent,
  BtnWrapper,
  RemoveBtnWrapper,
  RemoveButton,
  EditBtnWrapper,
  EditButton,
  Name,
} from './ContactDetails.Styled';
import { TbArrowBackUp } from 'react-icons/tb';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { getAllContactsThunk, removeContact } from 'redux/contacts/thunk';
// import { selectContacts } from 'redux/contacts/selectors';
import { Loader } from 'components/Loader/Loader';

const ContactDetails = () => {
  const location = useLocation();
  // const allContacts = useSelector(selectContacts);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const currentContact = allContacts.find(contact => contact.id === id);

  useEffect(() => {
    // dispatch(getAllContactsThunk());
  }, [dispatch]);

  const backLinkLocation = useRef(location.state?.from ?? '/');

  const handleDelete = () => {
    const isConfirmed = window.confirm('Delete contact?');

    if (isConfirmed) {
      // dispatch(removeContact(id));
      // navigate('/');
    }
  };

  const handleContactEdit = () => {
    navigate(`/edit`, { state: { from: location } });
  };

  // if (!currentContact) {
  //   return <Loader />;
  // }

  return (
    <>
      <TopContent>
        <AvatarWrapper>
          <Avatar>
            <BackBtn to={backLinkLocation.current}>
              <TbArrowBackUp size={'30px'} />
            </BackBtn>

            <AccountCircleIcon sx={{ fontSize: '210px', color: '#7E57C2' }} />
          </Avatar>
          {/*<div>
            <Name>{currentContact.name}</Name>
          </div>*/}
        </AvatarWrapper>

        <BtnWrapper>
          <EditBtnWrapper type="button" onClick={() => handleContactEdit()}>
            <EditButton>Edit</EditButton>
          </EditBtnWrapper>

          <RemoveBtnWrapper>
            <RemoveButton typeof="button" onClick={handleDelete}>
              Delete
            </RemoveButton>
          </RemoveBtnWrapper>
        </BtnWrapper>
      </TopContent>
      <hr style={{ marginTop: '20px', marginBottom: '40px' }} />

      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default ContactDetails;

