import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import topImage from 'images/topImage.gif';

const Section = styled.section`
  position: relative;
  & img {
    width: 100%;
  }
  & .topOverlay {
    position: absolute;
    bottom: 23%;
    left: 46%;
    border: 10px double white;
    border-radius: 20%;
    cursor: pointer;
    &:hover {
      border: 10px double #c34f75;
      & div {
        color: #c34f75;
      }
    }
    div {
      font-size: 40px;
      color: white;
      font-weight: bold;
    }
  }
`;

export default function SectionTop() {
  return (
    <Section className="top">
      <img className="topImage" src={topImage} alt="topImage" />
      <div className="topOverlay">
        <Link to="/">
          <div>START</div>
        </Link>
      </div>
    </Section>
    // <div>gkldl</div>
  );
}
