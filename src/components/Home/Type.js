import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Frontend Developer",
              "Top Rated Freelancer",
              "Passionate  Graphics Designer",
              "Accounting & Financial Data Entry",
              "Scientific & Technical Writer",
              "Academic Writer"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type