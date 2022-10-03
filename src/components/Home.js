import React from 'react'
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <div>
      <Container>
        <Section/>  
        <Section/>  
        <Section/>  
        <Section/>
      </Container>
    </div>
  )
}
export default Home
const Container = styled.div`
  height: 100vh;
`