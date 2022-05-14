const Form = ({ CALL_FUNCTION }) => {
  const handleClick = () => {
    console.log("Sumbit");
  };
  return (
    <>
      <h1 data-testid="Text-form">Halaman Form</h1>
      <button onClick={() => CALL_FUNCTION()}>Submit</button>
    </>
  );
};

export default Form;
