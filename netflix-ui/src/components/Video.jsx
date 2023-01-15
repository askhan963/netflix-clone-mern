import React from 'react'
import styled from "styled-components";

const Video = (props) => {
  console.log('video ',props)
  return (
    <Container>
        {props}
    </Container>
  )
}

const Container = styled.div`
height: 100%;
width: 100%;
`;
export default Video