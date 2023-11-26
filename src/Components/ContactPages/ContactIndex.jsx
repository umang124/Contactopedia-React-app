import React from "react";
import Header from "../Layout/Header";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContacts";
import AddContact from "./AddContact";
import FavouriteContacts from "./FavouriteContacts";
import GeneralContacts from "./GeneralContacts";
import Footer from "../Layout/Footer";

class ContactIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "Ben Parker",
          phone: "666-666-7770",
          email: "ben@gmail.com",
          isFavourite: false,
        },
        {
          id: 2,
          name: "Kathy Patrick",
          phone: "111-666-7770",
          email: "kathy@gmail.com",
          isFavourite: true,
        },
        {
          id: 3,
          name: "Paul Show",
          phone: "999-666-7770",
          email: "paul@gmail.com",
          isFavourite: true,
        },
      ],
    };
  }

  handleAddContact = (newContact) => {
    if (newContact.name === "") {
      return { status: "failure", msg: "Please enter a valid Name" };
    } else if (newContact.phone === "") {
      return { status: "failure", msg: "Please enter a valid Phone" };
    } else if (newContact.email === "") {
      return { status: "failure", msg: "Please enter a valid email" };
    }

    const duplicateRecord = this.state.contactList.filter((x) => {
      if (
        x.name === newContact.name ||
        x.email === newContact.email ||
        x.phone === newContact.phone
      ) {
        return true;
      }
      return false;
    });

    if (duplicateRecord.length > 0) {
      return { status: "failure", msg: "Duplicate Record" };
    }
    const newFinalContact = {
      ...newContact,
      id: this.state.contactList[this.state.contactList.length - 1].id + 1,
      isFavourite: false,
    };
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.concat(newFinalContact),
      };
    });
    // this.setState({contactList: this.state.contactList.concat(newFinalContact)});
    return { status: "success", msg: "Contact was added successfully" };
  };

  handleToogleFavourite = (contact) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((obj) => {
          if (obj.id === contact.id) {
            return { ...obj, isFavourite: !obj.isFavourite };
          }
          return obj;
        }),
      };
    });
  };

  handleDeleteContact = (contact) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.filter((obj) => {
          if (obj.id !== contact.id) {
            return true;
          }
          return false;
        }),
      };
    });
  };

  handleAddRandomContact = (newContact) => {
    const newFinalContact = {
      ...newContact,
      id: this.state.contactList[this.state.contactList.length - 1].id + 1,
      isFavourite: false,
    };
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.concat(newFinalContact),
      };
    });
  };

  handleRemoveAllContacts = () => {
    this.setState((prevState) => {
      return {
        contactList: [],
      };
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2 row">
              <AddRandomContact
                handleAddRandomContact={this.handleAddRandomContact}
              />
            </div>
            <div className="col-4 row">
              <RemoveAllContact
                handleRemoveAllContacts={this.handleRemoveAllContacts}
              />
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <AddContact handleAddContact={this.handleAddContact} />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <FavouriteContacts
                  contacts={this.state.contactList.filter(
                    (x) => x.isFavourite === true
                  )}
                  favouriteClick={this.handleToogleFavourite}
                  deleteContact={this.handleDeleteContact}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <GeneralContacts
                  contacts={this.state.contactList.filter(
                    (x) => x.isFavourite === false
                  )}
                  favouriteClick={this.handleToogleFavourite}
                  deleteContact={this.handleDeleteContact}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default ContactIndex;
