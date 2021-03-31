import React from "react";
import { Button, Card } from "react-bootstrap";
import propTypes from "prop-types";

const profile = ({ profilelist, children, handleName }) => {
  return (
    <div>
      {profilelist.map((e,key) => (
        <Card key={key} style={{ width: "80rem" }}>
          <Card.Img variant="top" src={children} />
          <Card.Body>
            <Card.Title>{e.Fullname}</Card.Title>
            <Card.Text>{e.bio}</Card.Text>
            <Card.Text>{e.profession}</Card.Text>
            <Button
              variant="primary"
              onClick={() => handleName(profilelist[0].Fullname)}
            >
              Welcome
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
profile.propTypes = { profilelist: propTypes.object };
profile.defaultProps = {
  profilelist: [
    {
      Fullname: "Tammem Ayadi",
      bio: "responsable magasin",
      profession: "nothing yet",
    },
  ],
};

export default profile;
