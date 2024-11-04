import React from 'react';
import styled from 'styled-components';
import { aboutData } from '../data/data';

const Home = () => {
  return (
    <AboutSection>
      <DescriptionBox>
        <Title>{aboutData.title}</Title>
        <Subtitle>{aboutData.subTitle}</Subtitle>
        <Description>
          {aboutData.description}
          <br />
          <br />
          {aboutData.description}
        </Description>
      </DescriptionBox>
      <ImageHolder>
        <ImageBox
          className="img-box-1"
          style={{
            backgroundImage: `url(${aboutData.image2})`,
          }}
        />
        <ImageBox
          className="img-box-2"
          style={{
            backgroundImage: `url(${aboutData.image1})`,
          }}
        />
      </ImageHolder>
    </AboutSection>
  );
};

const AboutSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Karla', sans-serif;
  flex-wrap: wrap;

  @media screen and (max-width: 1020px) {
    flex-direction: column;
  }
`;

const DescriptionBox = styled.div`
  width: 40%;
  display: inline-block;

  @media screen and (max-width: 1020px) {
    width: 80%;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 64px;
  color: #f4ce14;
  display: inline-block;
`;

const Subtitle = styled.h4`
  margin-top: 7px;
  font-size: 40px;
  color: #495e57;
  display: inline-block;
`;

const Description = styled.p`
  margin-top: 50px;
  width: 80%;
  text-align: justify;
  font-size: 18px;
  color: #495e57;
  display: inline-block;
`;

const ImageHolder = styled.div`
  display: flex;
  position: relative;
  margin-top: 50px;
  justify-content: center;

  @media screen and (max-width: 700px) {
    width: 80%;
  }
`;

const ImageBox = styled.div`
  width: 273px;
  height: 338px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 100%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  position: absolute;

  &.img-box-2 {
    top: -100px;
    left: 180px;
  }

  @media screen and (max-width: 1020px) {
    width: 203px;
    height: 278px;

    &.img-box-2 {
      top: 100px;
      left: 180px;
    }
  }

  @media screen and (max-width: 700px) {
    &.img-box-2 {
      display: none;
    }
  }
`;

export default Home;
