const menu = [
  {
    menu: "company",
    url: "#",
    sub: true,
    submenu: [
      { menu: "about", url: "https:www.naver.com" },
      { menu: "history", url: "#" },
      { menu: "location", url: "#" },
    ],
  },
  {
    menu: "product",
    url: "#",
    sub: true,
    submenu: [
      { menu: "pc", url: "https://www.daum.net" },
      { menu: "mobile", url: "#" },
      { menu: "iot", url: "#" },
    ],
  },
  {
    menu: "online",
    url: "#",
    sub: false,
    submenu: [
      { menu: "faq", url: "#" },
      { menu: "qna", url: "#" },
      { menu: "download", url: "#" },
    ],
  },
  {
    menu: "comunity",
    url: "#",
    sub: true,
    submenu: [
      { menu: "notice", url: "#" },
      { menu: "gallery", url: "#" },
      { menu: "event", url: "#" },
    ],
  },
  {
    menu: "borad",
    url: "#",
    sub: false,
    submenu: null, // 서브메뉴가 없는 경우 null 또는 빈 배열([])로 설정
  },
];

function getMenuHtml() {
  let html = "";
  menu.forEach((item) => {
    html += `<li><a href="${item.url}">${item.menu}</a>`;
    if (item.sub) {
      html += "<ul class='sub'>"; // 서브메뉴가 있으면 서브메뉴를 감싸는 <ul> 추가
      item.submenu.forEach((subItem) => {
        html += `<li><a href="${subItem.url}">${subItem.menu}</a></li>`;
      }); // 서브메뉴 항목 추가
      html += "</ul>"; // 서브메뉴 닫는 </ul> 추가
    } // 서브메뉴가 없으면 아무것도 추가하지 않음
    html += "</li>";
  });
  return html;
}
