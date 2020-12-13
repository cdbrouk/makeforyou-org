import React, { useEffect } from 'react';
import styled from 'styled-components';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

const Block = styled.section`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 60%;
`;

const Map = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const KakaoMap = (): JSX.Element => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_JS_KEY}&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        /** construct kakao map */
        const container = document.getElementById('kakao_map');
        const options = {
          center: new window.kakao.maps.LatLng(37.7093286, 126.8025089),
          level: 5,
        };
        const map = new window.kakao.maps.Map(container, options);
        /** prevent drag */
        // map.setDraggable(false);

        /** contruct map control */
        const mapTypeControl = new window.kakao.maps.MapTypeControl();
        const zoomControl = new window.kakao.maps.ZoomControl();
        map.addControl(
          mapTypeControl,
          window.kakao.maps.ControlPosition.TOPRIGHT,
        );
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

        /** contruct marker */
        const markerPosition = new window.kakao.maps.LatLng(
          37.7093286,
          126.8025089,
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);

        const iwEle = `
              <div style="display: flex; flex-direction: column; padding:5px; font-size: 14px; ">\n
                MAKE FOR YOU \n
              <br>\n
              <div style="display: flex; font-size: 12px; color: black; margin-top: 3px;">\n                
                <a href="https://map.kakao.com/link/to/경기도 고양시 일산동구 성석동 성현로 155-13,33.450701,126.570667" style="text-decoration: none">\n
                  카카오 맵으로 보기\n
                </a>\n
              </div>\n
            </div>`;
        const iwPosition = new window.kakao.maps.LatLng(
          37.7093286,
          126.8025089,
        );

        const iw = new window.kakao.maps.InfoWindow({
          position: iwPosition,
          content: iwEle,
        });
        iw.open(map, marker);
      });
    };
  }, []);

  return (
    <Block>
      <Map>
        <div id="kakao_map" style={{ width: '100%', height: '100%' }} />
      </Map>
    </Block>
  );
};

export default KakaoMap;
