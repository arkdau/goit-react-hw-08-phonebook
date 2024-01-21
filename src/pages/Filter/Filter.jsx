i/mport { useDispatch } from "react-redux";
import { setStatusFilter } from "./../../redux/contacts/operations";
import { styled } from "styled-components";

const FiltrContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const LabelContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 10px 20px;
`;

const Label = styled.label`
padding: 10px 20px
text-align: center;
`;

const Input = styled.input`
display: flex;
border: 1px solid white;
border-radius: 5px;
 -webkit-box-shadow: 0 10px 6px -6px #777;
     -moz-box-shadow: 0 10px 6px -6px #777;
          box-shadow: 0 10px 6px -6px #777;

`;

const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeInput = (evt) => {
    evt.preventDefault();
    const filter = evt.currentTarget.value;
    // setFilter(filter);
    dispatch(setStatusFilter(filter));
  };

  return (
    <>
      <FiltrContainer>
        <LabelContainer>
          <Label htmlFor="insert name">Find contacts by name</Label>
        </LabelContainer>
        <Input type="text" name="find" onChange={handleChangeInput} />
        {/*<input type="text" name="find" onChange={handleChangeInput} />*/}
      </FiltrContainer>
    </>
  );
};

export default Filter;
