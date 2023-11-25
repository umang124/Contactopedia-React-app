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
  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2">
              <AddRandomContact />
            </div>
            <div className="col-4">
              <RemoveAllContact />
            </div>
            <div className="row py-2">
              <AddContact />
            </div>
            <div className="row py-2">
              <FavouriteContacts
                contacts={this.state.contactList.filter(
                  (x) => x.isFavourite === true
                )}
              />
            </div>
            <div className="row py-2">
              <GeneralContacts
                contacts={this.state.contactList.filter(
                  (x) => x.isFavourite === false
                )}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default ContactIndex;
