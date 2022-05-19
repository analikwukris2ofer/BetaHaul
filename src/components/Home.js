import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Container = styled.div`
  height: 100vh;
`;

const Home = () => {
  return (
    <Container>
      <Section
        title="Brand 1"
        description="Order Now for Seamless Delivery"
        backgroundImg="car1.jpg"
        leftBtnText="Normal Order"
        rightBtnText="Custom Order"
      />
      <Section
        title="Brand 2"
        description="Order Now for Seamless Delivery"
        backgroundImg="car3.jpg"
        leftBtnText="Normal Order"
        rightBtnText="Custom Order"
      />
      <Section
        title="Brand 3"
        description="Order Now for Seamless Delivery"
        backgroundImg="car6.jpg"
        leftBtnText="Normal Order"
        rightBtnText="Custom Order"
      />
      <Section
        title="Brand 4"
        description="Order Now for Seamless Delivery"
        backgroundImg="car7.jpg"
        leftBtnText="Normal Order"
        rightBtnText="Custom Order"
      />
    </Container>
  );
};

export default Home;
