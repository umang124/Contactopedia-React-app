import Contact from "./Contact";

const FavouriteContacts = (props) => {
  return (
    <div>
      {props.contacts.map((contact, index) => (
        <Contact contact={contact} key={index} />
      ))}
    </div>
  );
};
export default FavouriteContacts;
