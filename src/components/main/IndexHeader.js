import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  width: 95%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 5px 50px 5px 50px;
  background-color: black;
  font-size: 22px;
  font-family: 'Raleway', sans-serif;
  z-index: 1000;
  & h1 {
    /* position: relative; */
    /* display: block; */
    color: white;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0.3rem;
  }
  & ul {
    display: flex;
    align-items: center;
  }
  & .main-nav + .main-nav {
    margin-left: 80px;
  }
  & li {
    font-size: 21px;
    color: #fff;
    font-weight: 600;
    &:hover {
      color: #c34f75;
      cursor: pointer;
    }
  }
`;

export default function IndexHeader() {
  const handleContact = (e) => {
    alert('클릭');
    window.scrollTo({ top: 2020, behavior: 'smooth' });
  };
  const [scrollY, setScrollY] = useState(0); // 스크롤값을 저장하기 위한 상태
  const handleFollow = () => {
    setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
  };
  console.log('scrollY', scrollY);

  return (
    <Header className="fixed">
      <Link to="/">
        <div>
          <h1 className="logo">MAKE</h1>
          <h1
            className="logo"
            style={{ paddingLeft: '26px', color: '#c34f75' }}
          >
            YOUR
          </h1>
          <h1 className="logo" style={{ paddingLeft: '6px' }}>
            PAGE
          </h1>
        </div>
      </Link>
      <ul>
        <Link to="/404" className="main-nav">
          <li>MAKE NOW</li>
        </Link>
        <div onClick={handleContact} className="main-nav">
          <li>CONTACT</li>
        </div>
      </ul>
    </Header>
  );
}
