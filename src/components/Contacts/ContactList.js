import react from "react";

const contactList = (props) => {
  console.log(props);
  const renderContactList = props.contacts.map((contact) => {
    return (
      <div className="item container">
        <div className="content row">
          {/* <div className="container"> */}
          <div className="header col-sm-3">{contact.name}</div>
          <div className="col-sm-3">{contact.email}</div>
          <div className="col-sm-3">{contact.mobile}</div>
          <div className="col-sm-3">
            <button className="btn btn-danger">Delete</button>
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      {/* <div className="container">ContactList</div> */}
      <div className="">{renderContactList}</div>
    </>
  );
};

export default contactList;
