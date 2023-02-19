import React from 'react';
import styled from 'styled-components';
import cat from '../../assets/cat-ge943df531_1920.jpg';

const ImageContainer = () => {
  return (
    <Container>
      <Image src={cat} alt='고양이 사진'/>
    </Container>
  )
}

export default ImageContainer;

const Container = styled.figure`
  max-width: 100%;
  min-height: 18.75rem;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

