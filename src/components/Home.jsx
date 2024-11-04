import React from 'react';
import styled from 'styled-components';
import { aboutData, testimonialsData } from '../data/data';

const Home = () => {
  return (
    <MainContainer>
      <AboutSection>
        <DescriptionBox>
          <Title>{aboutData.title}</Title>
          <Subtitle>{aboutData.subTitle}</Subtitle>
          <Description>
            {aboutData.description}
            <br />
            {aboutData.description}
          </Description>
        </DescriptionBox>
      </AboutSection>

      <SpecialsSection id="specials">
        <SectionTitle>Today's Specials</SectionTitle>
        <SpecialCard>
          <SpecialTitle>Margherita Pizza</SpecialTitle>
          <SpecialDescription>
            Classic pizza with fresh tomatoes, mozzarella, and basil.
          </SpecialDescription>
        </SpecialCard>
        <SpecialCard>
          <SpecialTitle>Pasta Carbonara</SpecialTitle>
          <SpecialDescription>
            Creamy pasta with pancetta, egg, and parmesan cheese.
          </SpecialDescription>
        </SpecialCard>
      </SpecialsSection>

      <TestimonialsSection id="testimonials">
        <SectionTitle>What Our Guests Say</SectionTitle>
        <TestimonialsGrid>
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id}>
              <TestimonialImage
                src={testimonial.image}
                alt={`${testimonial.name}'s testimonial`}
              />
              <TestimonialText>
                <TestimonialQuote>{testimonial.quote}</TestimonialQuote>
                <TestimonialName>{testimonial.name}</TestimonialName>
              </TestimonialText>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </TestimonialsSection>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  font-family: 'Karla', sans-serif;
  background-color: #f3f4f6; /* Pastel background color */
`;

const AboutSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px;

  @media screen and (max-width: 1020px) {
    flex-direction: column;
  }
`;

const DescriptionBox = styled.div`
  width: 100%;
  display: inline-block;

  @media screen and (max-width: 1020px) {
    width: 80%;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 64px;
  color: #f4ce14;
`;

const Subtitle = styled.h4`
  margin-top: 7px;
  font-size: 40px;
  color: #495e57;
`;

const Description = styled.p`
  margin-top: 50px;
  width: 80%;
  text-align: justify;
  font-size: 18px;
  color: #495e57;
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

const SpecialsSection = styled.div`
  padding: 40px;
  text-align: center;
  background-color: #f8f8f8;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

const SpecialCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
`;

const SpecialTitle = styled.h3`
  font-size: 24px;
  color: #495e57;
`;

const SpecialDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

const TestimonialsSection = styled.div`
  padding: 40px;
  background-color: #fff;
  text-align: center;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
`;

const TestimonialCard = styled.div`
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  display: flex;
  justify-content: center;
`;

const TestimonialImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const TestimonialText = styled.div`
  text-align: center;
`;

const TestimonialQuote = styled.blockquote`
  font-size: 16px;
  color: #495e57;
  margin: 10px 0;
`;

const TestimonialName = styled.h4`
  font-size: 18px;
  color: #333;
  margin: 0;
`;

export default Home;
