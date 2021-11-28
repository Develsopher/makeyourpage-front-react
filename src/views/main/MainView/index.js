import React from 'react';
import styled from 'styled-components';
import IndexHeader from 'components/main/IndexHeader';
import SectionTop from 'components/main/SectionTop';
import SectionMiddle from 'components/main/SectionMiddle';
import SectionBottom from 'components/main/SectionBottom';

const Visual = styled.div`
  min-width: 720px;
  position: relative;
  font-family: 'Raleway', sans-serif;
`;

export default function Home() {
  return (
    <>
      <Visual id="wrap">
        <IndexHeader />
        <main>
          <SectionTop />
          <SectionMiddle />
          <SectionBottom />
        </main>
      </Visual>
    </>
  );
}
