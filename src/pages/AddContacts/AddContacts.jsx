 import { AvatarWrapper, BackBtn, Wrapper } from "./AddContacts.Styled";
 import { TbArrowBackUp } from 'react-icons/tb';
 import AccountCircleIcon from '@mui/icons-material/AccountCircle';
 import ContactForm from "./../../components/ContactForm/ContactForm";


 const AddContacts = () => {
   return (
     <Wrapper>
       <h2>Create Contact</h2>
       <AvatarWrapper>
         <BackBtn to="/">
           <TbArrowBackUp size={'30px'} />
         </BackBtn>
         <AccountCircleIcon sx={{ fontSize: '210px', color: '#e5e5e5' }} />
       </AvatarWrapper>
       <hr />
       <ContactForm />
     </Wrapper>
   );
 };

 export default AddContacts;

