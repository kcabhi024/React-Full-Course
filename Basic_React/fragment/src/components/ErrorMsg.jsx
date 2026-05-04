const ErrorMsg = ({ length }) => {
  return (
    <>
      {length === 0 ? <h3>I am hungry..</h3> : null}
    </>
  );
};

export default ErrorMsg;