import React from "react";
import Project from "../../components/Section/Projects/Project";

import { Container } from "./styles";

const About: React.FC = () => {
  return (
    <Container>
      <Project
        project={{
          instituition: "About Me",
          title: "",
          description:
            "I started my programming journey in 2018 when joined studying the computer engineering course at Universidade Federal do Ceará, it was there that I fell in love with programming. There, I learned core programming concepts like OOP, Data structure, Computer Architecture. In 2020 we were forced to stay home and all college classes were cut off, at this time I found out about Trybe's course, the course that is taking me to another programming level. Over this time at Trybe I have been developing some Web applications with and without React, from movies CRUD with route and asynchronicity to online stores using Mercado Livre API, which simulates a product purchase with rating and cart mechanisms, all done with core and advanced React concepts like component life cycle, hooks, context API.",
          tags: [],
          pathname: "#",
        }}
      />
    </Container>
  );
};

export default About;
