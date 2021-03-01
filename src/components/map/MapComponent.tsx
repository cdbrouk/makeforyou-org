import React from 'react';
import styled from 'styled-components';
import { MOBILE_HEADER, PC_HEADER } from '../../lib/style/constant';
import media from '../../lib/style/media';
import { createMarker } from './createMarker';
import { Factories } from './mock';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

const Wrapper = styled.div`
  padding-top: ${PC_HEADER}px;
  width: 100vw;
  height: 100vh;

  ${media.mobile} {
    padding-top: ${MOBILE_HEADER}px;
  }
`;

const MapComponent: React.FC = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_JS_KEY}&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        /** construct kakao map */

        const container = document.getElementById('kakao_map');
        const options = {
          center: new window.kakao.maps.LatLng(
            37.709192004063965,
            126.80381831308101,
          ),
          level: 6,
        };
        const map = new window.kakao.maps.Map(container, options);
        /** prevent drag */
        // map.setDraggable(false);

        /** contruct map control */
        // const mapTypeControl = new window.kakao.maps.MapTypeControl();
        const zoomControl = new window.kakao.maps.ZoomControl();
        // map.addControl(
        //   mapTypeControl,
        //   window.kakao.maps.ControlPosition.TOPRIGHT,
        // );
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.TOPRIGHT);

        Factories.forEach((factory) => createMarker(factory, map));
      });
    };
  }, []);

  return (
    <Wrapper>
      <div id="kakao_map" style={{ width: '100%', height: '100%' }} />
    </Wrapper>
  );
};

export default MapComponent;
