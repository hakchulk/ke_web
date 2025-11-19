import mapLoc from "./mapLocation.js";

function locView(lan, lon) {
  var container = document.getElementById("map");
  var options = {
    center: new kakao.maps.LatLng(lan, lon),
    level: 13,
  };
  // 37.5047, 126.8775
  var map = new kakao.maps.Map(container, options);
  // 마커 이미지의 이미지 주소입니다
  var imageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
  // 마커 이미지의 이미지 크기 입니다
  var imageSize = new kakao.maps.Size(24, 35);
  // 마커 이미지를 생성합니다
  var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

  for (const item of mapLoc) {
    // 마커가 표시될 위치입니다
    var markerPosition = new kakao.maps.LatLng(item.lat, item.lon);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
      title: item.name,
      image: markerImage, // 마커 이미지
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    var content = `<div class ="label"><span class="left"></span><span class="center">
        ${item.name}
            </span><span class="right"></span></div>
          `;

    // 커스텀 오버레이가 표시될 위치입니다
    var position = new kakao.maps.LatLng(item.lat, item.lon);
    var customOverlay = new kakao.maps.CustomOverlay({
      position: position,
      content: content,
    });
    // 커스텀 오버레이를 지도에 표시합니다
    customOverlay.setMap(map);
  }
}

export default locView;
