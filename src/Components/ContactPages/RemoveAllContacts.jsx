const RemoveAllContacts = (props) => {
  return (
    <div>
      <button onClick={props.handleRemoveAllContacts} className="btn btn-danger form-control">Remove All</button>
    </div>
  );
};
export default RemoveAllContacts;
