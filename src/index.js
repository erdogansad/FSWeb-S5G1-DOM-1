const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */


const body = document.querySelector("body"), container = body.querySelector(".container");


/* navigation bar düzenlemesi */
const header = container.querySelector("header"),
      nav = header.querySelector("nav"),
      navItems = nav.querySelectorAll("a");
for(let i = 0; i < navItems.length; i++) {
  navItems[i].className = "italic";
  navItems[i].innerHTML = siteContent["nav"]["nav-item-"+(i+1)];
};


/* logo düzenlemesi */
const logo = header.querySelector("img");
logo.src = siteContent["images"]["logo-img"];


/* cta düzenlemesi */
const cta =  container.querySelector(".cta"),
      ctaText = cta.querySelector(".cta-text"),
      ctaImg = cta.querySelector("#cta-img");

ctaText.querySelector("h1").innerHTML = siteContent["cta"]["h1"];
ctaText.querySelector("button").innerHTML = siteContent["cta"]["button"];
ctaImg.src = siteContent["images"]["cta-img"];


/* main-content düzenlemesi */
const mainContent = container.querySelector(".main-content"),
      topContent = mainContent.querySelector(".top-content"),
      middleImg = mainContent.querySelector("img"),
      bottomContent = mainContent.querySelector(".bottom-content");


const topContentElements = topContent.querySelectorAll(".text-content");
let topContentIdx = [["özellikler", "hakkımızda"], ["h4", "içerik"]]; 

for(let i = 0; i < topContentElements.length; i++){
  let title = topContentElements[i].querySelector("h4"),
      text = topContentElements[i].querySelector("p");

  title.innerHTML = siteContent["ana-içerik"][`${topContentIdx[0][i]}-${topContentIdx[1][0]}`];
  text.innerHTML = siteContent["ana-içerik"][`${topContentIdx[0][i]}-${topContentIdx[1][1]}`];
}


middleImg.src = siteContent["images"]["accent-img"];


const bottomContentElements = bottomContent.querySelectorAll(".text-content");
let bottomContentIdx = [["servisler", "ürünler", "vizyon"], ["h4", "içeriği"]]; 

for(let i = 0; i < bottomContentElements.length; i++){
  let title = bottomContentElements[i].querySelector("h4"),
      text = bottomContentElements[i].querySelector("p");

  title.innerHTML = siteContent["ana-içerik"][`${bottomContentIdx[0][i]}-${bottomContentIdx[1][0]}`];
  text.innerHTML = siteContent["ana-içerik"][`${bottomContentIdx[0][i]}-${bottomContentIdx[1][1]}`];
}


/* contact-section düzenlemesi */
const contact = container.querySelector(".contact"),
      contactElements = contact.children;
let contactIdx = Object.keys(siteContent["iletisim"]);

for(let i in contactIdx){
  contactElements[i].innerHTML = siteContent["iletisim"][contactIdx[i]];
}


/* footer düzenlemesi */
const footer = container.querySelector("footer");
footer.children[0].className = "bold";
footer.children[0].innerHTML = siteContent["footer"]["copyright"];