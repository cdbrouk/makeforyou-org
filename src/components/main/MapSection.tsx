import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MapImg from '../../assets/img/map.png';
import { COLORS } from '../../lib/style/constant';

const Wrapper = styled.section`
  width: 100vw;
  position: relative;
  min-height: 422px;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1280px;
  min-height: 422px;
  height: auto;
  text-align: center;
  margin: auto;
  padding: 48px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BackGroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${MapImg});
  opacity: 0.1;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const BoldText = styled.h1`
  margin: 0;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1rem;
  opacity: 1;
`;

const MapButton = styled.div`
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background-color: ${COLORS.purple_button};
  padding: 18px 24px;
  width: 186px;
  color: white;
  text-decoration: none;
`;

const MapSection: React.FC = () => {
  return (
    <Wrapper>
      <BackGroundImage />
      <Inner>
        <BoldText>
          등록된 공장 현황을
          <br /> 확인해보세요
        </BoldText>
        <Link to="/map" style={{ textDecoration: 'none' }}>
          <MapButton>공장현황 확인하기</MapButton>
        </Link>
      </Inner>
    </Wrapper>
  );
};

export default MapSection;
