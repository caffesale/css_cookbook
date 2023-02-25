import React from 'react';
import styled from 'styled-components';
import cat from '../../assets/cat-ge943df531_1920.jpg';


const SlideWithTitle = () => {
  return (
    <Container>
      <Image src={cat} alt="고양이 이미지" />
      <Title>고양이 그림입니다.</Title>
    </Container>
  )
}

export default SlideWithTitle

const Container = styled.figure`
  display: grid;
  /* grid-template-columns: column; */
  max-width: 70rem;
  min-height: 18.75rem;
`

const Image = styled.img`
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Title = styled.h1`
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  color: #fff;
  font-size: 5rem;
`