import styled from "styled-components"

const Container = styled.div`
color: white;
background-color: teal;
height: 30px;
justify-content: center;
align-items: center;
display: flex;
font-size: 14px;
font-weight: 500;
`
export default function Announcements() {
  return (
    <Container>Super Deal! Free Shippping for Purchases over $50. </Container>
  )
}
