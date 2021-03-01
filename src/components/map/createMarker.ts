interface IFactory {
  name: string;
  tags: string;
  pos: Array<number>;
  blog: string;
  insta: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const clickListener = (map: any, marker: any, infowindow: any) => {
  let isOpen = false;
  return function () {
    console.log(isOpen);
    if (!isOpen) {
      infowindow.open(map, marker);
      isOpen = true;
    } else {
      infowindow.close();
      isOpen = false;
    }
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createMarker = (factory: IFactory, map: any): void => {
  const markerPosition = new window.kakao.maps.LatLng(
    factory.pos[0],
    factory.pos[1],
  );
  const marker = new window.kakao.maps.Marker({
    position: markerPosition,
  });
  marker.setMap(map);

  const iwEle = `
        <div style="display: flex; flex-direction: column; padding:5px; font-size: 14px; ">\n
          <b>${factory.name}</b>
          ${factory.tags}\n
          <div style="display: flex; font-size: 12px; color: black; margin-top: 3px;">\n
            <a href="${
              factory.blog
            }" style="text-decoration: none; color: #12B886" target="_blank">\n
              블로그\n
            </a>\n
            ${
              factory.insta !== ''
                ? `<a href="${factory.insta}" style="text-decoration: none; color: #D04877; margin-left: 5px" target="_blank">\n
                인스타\n
              </a>\n`
                : ``
            }
          </div>\n
        </div>`;
  const iwPosition = new window.kakao.maps.LatLng(
    factory.pos[0],
    factory.pos[1],
  );

  const iw = new window.kakao.maps.InfoWindow({
    position: iwPosition,
    content: iwEle,
  });

  window.kakao.maps.event.addListener(
    marker,
    'click',
    clickListener(map, marker, iw),
  );
};
