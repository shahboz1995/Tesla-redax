import React from 'react'
import styled from "styled-components";

function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </ItemText>
      <Bottons>      
      <ButtonGruop>
        <LeftButton>
            Custom Order 
        </LeftButton>
        <ReightButton>
            Existing Inventory
        </ReightButton>
      </ButtonGruop>
      <DownArrow scr="/img/vector1.jpg"/>
      </Bottons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/img/tesla.jpg');
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  
  `
  const ItemText = styled.div`
    padding-top: 10vh;
    text-align: center;
    margin-bottom: 30px;
    font-size: 25px;
    // color: white;
  `
  const ButtonGruop = styled.div`
  display: flex;
  margin-bottom: 30px;
  
  `
  const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
  `
  const ReightButton = styled(LeftButton)`
    background: white;
    opaciyt: 0.65;
    color: black;
  `
  const DownArrow = styled.img`
   
    height: 40px;
    width: 40px;
    background-color: rgba(23, 26, 32, 0.8);
    color: white;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
  `
  const Bottons = styled.div`

  `