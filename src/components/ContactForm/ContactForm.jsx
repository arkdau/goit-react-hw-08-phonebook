import { ErrorMessage, Field, Formik } from "formik";
import { FiUserPlus } from "react-icons/fi";
import * as Yup from "yup";
import {
  Button,
  InputWrapper,
  StyledForm,
  Wrapper,
} from "./ContactForm.Styled";
import { PatternFormat } from "react-number-format";
import { createTheme, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import { useMemo } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  fetchAddContacts,
  fetchUpdateContacts,
} from "./../../redux/contacts/operations";

import { useParams } from "react-router-dom";

const ContactsSchema = Yup.object().shape({
  nameFirst: Yup.string().required("* Name First is required"),
  nameLast: Yup.string().required("* Name Last is required"),
  number: Yup.string().required("* Phone number is required"),
});

function ContactForm() {
  const dispatch = useDispatch();

  const { contacts } = useSelector((state) => state.contacts);

  const checkItem = (name) => {
    return contacts.filter((item) => item.name.includes(name));
  };

  let { id } = useParams();
  let curContact = [];
  let NameFirst = "";
  let NameLast = "";
  let number;
  let isUpdateContact = false;

  let curString = "";
  if (id) {
    isUpdateContact = true;
    curContact = contacts.filter((item) => item.id.includes(id));
    curString = curContact[0].name.split(" ");
    number = curContact[0].number;
    NameFirst = curString[0];
    NameLast = curString[1];
  } else {
    isUpdateContact = false;
  }

  const initialValues = {
    nameFirst: NameFirst ? NameFirst : "",
    nameLast: NameLast ? NameLast : "",
    number: number ? number : "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const name = `${values.nameFirst} ${values.nameLast}`;
    const number = `${values.number}`;

    if (checkItem(name).length !== 0) {
      return alert(`${name} is already in contacts`);
    }

    if (checkItem(number).length !== 0) {
      return alert(`${number} is already in contacts`);
    }

    if (isUpdateContact) {
      dispatch(
        fetchUpdateContacts({
          contact: { "name": name, "number": number },
          id: id,
        }),
      );
    } else {
      dispatch(fetchAddContacts({ "name": name, "number": number }));
    }

    toast.success(
      <div>
        <b>{name}</b> added in phonebook
      </div>,
      {
        duration: 4000,
        icon: "✅",
      },
    );
    resetForm();
  };

  let theme = useMemo(() => {
    return createTheme({});
  }, []);

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Formik
        initialValues={initialValues}
        validationSchema={ContactsSchema}
        onSubmit={handleSubmit}
        enablereinitialize={true}
      >
        <StyledForm autoComplete="off">
          <ThemeProvider theme={theme}>
            <InputWrapper>
              <PersonOutlineIcon color="secondary" />
              <Field
                as={TextField}
                label="First Name"
                name="nameFirst"
                multiline
                variant="standard"
                className="fieldName"
                placeholder="Name"
              />
            </InputWrapper>
            <ErrorMessage
              name="nameFirst"
              component="span"
              style={{ color: "red" }}
            />

            <InputWrapper>
              <PersonOutlineIcon color="secondary" />
              <Field
                as={TextField}
                label="Last Name"
                name="nameLast"
                multiline
                variant="standard"
                className="fieldName"
              />
            </InputWrapper>
            <ErrorMessage
              name="nameLast"
              component="span"
              style={{ color: "red" }}
            />

            <InputWrapper>
              <PhoneEnabledIcon color="secondary" />
              <Field
                as={PatternFormat}
                customInput={TextField}
                name="number"
                variant="standard"
                format="+48 (0##) ### ## ##"
                allowEmptyFormatting={true}
                mask="_"
                placeholder="Teleph."
              />
            </InputWrapper>
            <ErrorMessage
              name="number"
              component="span"
              style={{ color: "red" }}
            />

            <Button type="submit">
              <FiUserPlus size={26} />
            </Button>
          </ThemeProvider>
        </StyledForm>
      </Formik>
    </Wrapper>
  );
}

export default ContactForm;
