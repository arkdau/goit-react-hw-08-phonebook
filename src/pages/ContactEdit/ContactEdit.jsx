import { AvatarWrapper, BackBtn, Wrapper } from "./ContactEdit.Styled";
import { TbArrowBackUp } from "react-icons/tb";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContactForm from "./../../components/ContactForm/ContactForm";
import { useParams } from "react-router-dom";

const AddContacts = () => {




  return (
    <Wrapper>
      <h2>Create Contact</h2>
      <AvatarWrapper>
        <BackBtn to="/contacts">
            <TbArrowBackUp size={"30px"} />
        </BackBtn>
        <AccountCircleIcon sx={{ fontSize: "210px", color: "#e5e5e5" }} />
      </AvatarWrapper>
      <hr />
      <ContactForm/>
    </Wrapper>
  );
};

export default AddContacts;

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// // import { selectCurrentContact } from 'redux/contacts/selectors';
// import {
//   StyledForm,
//   Wrapper,
//   Button,
//   InputWrapper,
// } from './ContactEdit.Styled';
// import { ErrorMessage, Field, Formik } from 'formik';
// import { ThemeProvider } from '@mui/material/styles';
// import * as Yup from 'yup';
// import { PatternFormat } from 'react-number-format';
// import { TextField, createTheme } from '@mui/material';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
// import toast from 'react-hot-toast';
// // import { editContact } from 'redux/contacts/thunk';
// import { grey } from '@mui/material/colors';
// import { useMemo } from 'react';
// // import { selectTheme } from 'redux/userTheme/slice';
//
// const ContactsSchema = Yup.object().shape({
//   name: Yup.string().required('* Name is required'),
//   number: Yup.string().required('* Phone number is required'),
// });
//
// const ContactEdit = () => {
//   const { id } = useParams();
//   // const userTheme = useSelector(selectTheme);
//   // const currentContact = useSelector(state =>
//   //   selectCurrentContact(state, { id })
//   // );
//
//   const { currentContact } = useSelector(state => state.contacts)
//
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//
//   const initialValues = {
//     // name: currentContact ? currentContact.name : '',
//     // number: currentContact ? currentContact.number : '',
//   };
//
//   const handleSubmit = values => {
//     const updatedContact = { name: values.name, number: values.number, id };
//
//     // dispatch(editContact(updatedContact));
//
//     toast.success(
//       <div>
//         Contact <b>{values.name}</b> updated!
//       </div>,
//       {
//         duration: 4000,
//         icon: '✅',
//       }
//     );
//     navigate(-1);
//   };
//
//   // MUI Theme
//   // const mode = userTheme;
//   let theme = useMemo(() => {
//     return createTheme({
//       // palette: {
//       //   mode: mode,
//       //   primary: {
//       //     main: 'rgb(32, 139, 74)',
//       //     ...(mode === 'dark' && {
//       //       main: 'rgb(49, 189, 126)',
//       //     }),
//       //   },
//       //   secondary: {
//       //     main: 'rgb(105, 105, 105)',
//       //     ...(mode === 'dark' && {
//       //       main: '#fff',
//       //     }),
//       //   },
//       //   ...(mode === 'dark' && {
//       //     background: {
//       //       default: '#101d2b',
//       //       paper: '#101d2b',
//       //     },
//       //   }),
//       //   text: {
//       //     ...(mode === 'light'
//       //       ? {
//       //           primary: grey[900],
//       //           secondary: grey[800],
//       //         }
//       //       : {
//       //           primary: '#fff',
//       //           secondary: grey[500],
//       //         }),
//       //   },
//       // },
//     });
//   }, []);
//
//   return (
//     <Wrapper>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={ContactsSchema}
//         onSubmit={handleSubmit}
//       >
//         <StyledForm autoComplete="off">
//           <ThemeProvider theme={theme}>
//             <InputWrapper>
//               <PersonOutlineIcon color="secondary" />
//               <Field
//                 as={TextField}
//                 label="Name"
//                 name="name"
//                 multiline
//                 variant="standard"
//                 className="fieldName"
//               />
//             </InputWrapper>
//             <ErrorMessage
//               name="name"
//               component="span"
//               style={{ color: 'red' }}
//             />
//
//             <InputWrapper>
//               <PhoneEnabledIcon color="secondary" />
//               <Field
//                 as={PatternFormat}
//                 customInput={TextField}
//                 name="number"
//                 variant="standard"
//                 format="+38 (0##) ### ## ##"
//                 allowEmptyFormatting={true}
//                 mask="_"
//               />
//             </InputWrapper>
//             <ErrorMessage
//               name="number"
//               component="span"
//               style={{ color: 'red' }}
//             />
//
//             <Button type="submit">Edit</Button>
//           </ThemeProvider>
//         </StyledForm>
//       </Formik>
//     </Wrapper>
//   );
// };
//
// export default ContactEdit;
//
