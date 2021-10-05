import React from "react";
import { Button } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    // about section
    
    <div className="about">
      <h1>About Our Digital IT Center,</h1>
      <p>
        A digital system is a something that represents information by using
        digits. Each digit represents a small amount of information because each
        digit comes from a small set of choices. A digit can be decimal (one of
        the ten choices from 0 through 9), as in the display of a digital clock.
        A digit can be binary (either 0 or 1). A binary digit is called a bit.
        Digital computers and digital communication like the internet usually
        use binary. The meaning of each bit depends on the place where it is
        used. For example, a bit can represent 'Yes' or 'No', or it can
        represent 'True' or 'False'. A large amount of information, like a
        picture, can be represented by using a list of many bits. A digital
        system is different than an analogue (US- analog) system, which
        represents information in a continuous way. The word digital is most
        commonly used in computing and electronics.A digital system is a
        something that represents information by using digits. Each digit
        represents a small amount of information because each digit comes from a
        small set of choices. A digit can be decimal (one of the ten choices
        from 0 through 9), as in the display of a digital clock. A digit can be
        binary (either 0 or 1). A binary digit is called a bit. Digital
        computers and digital communication like the internet usually use
        binary. The meaning of each bit depends on the place where it is used.
        For example, a bit can represent 'Yes' or 'No', or it can represent
        'True' or 'False'. A large amount of information, like a picture, can be
        represented by using a list of many bits. A digital system is different
        than an analogue (US- analog) system, which represents information in a
        continuous way. The word digital is most commonly used in computing and
        electronics.
      </p>
      <div>
        <Button variant="primary">Details</Button>
      </div>
    </div>
  );
};

export default About;
