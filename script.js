  const webDesigns = [
  { img: "321.png", title: "Website Design", desc: "Modern UI design for business landing page." },
  { img: "website-design-71063.jpg", title: "Portfolio Site", desc: "Responsive portfolio design for creatives." },
  { img: "31a.jpg", title: "E-commerce", desc: "Product-focused eCommerce layout." },
];

const graphicDesigns = [
  { img: "Artboard 1.png", title: "Graphic Poster", desc: "Event poster designed in Photoshop." },
  { img: "NIKE.png", title: "Branding Kit", desc: "Full branding visuals for startup." },
  { img: "ttr.jpg", title: "Social Media", desc: "Carousel designs for Instagram." },
];

const videoEdits = [
  { img: "edit.jpg", title: "Reel Edit", desc: "Dynamic Instagram reel with captions & transitions." },
  { img: "edit1.jpg", title: "Cinematic Intro", desc: "Trailer-style intro with SFX & music." },
  { img: "edit2.jpg", title: "YouTube Edit", desc: "Clean vlog editing with smooth cuts." },
];

let index = 0;
setInterval(() => {
  index = (index + 1) % 3;

  // Web
  document.getElementById("webImg").src = webDesigns[index].img;
  document.getElementById("webInfo").innerHTML = `
    <h3>${webDesigns[index].title}</h3>
    <p>${webDesigns[index].desc}</p>
  `;

  // Graphic
  document.getElementById("graphicImg").src = graphicDesigns[index].img;
  document.getElementById("graphicInfo").innerHTML = `
    <h3>${graphicDesigns[index].title}</h3>
    <p>${graphicDesigns[index].desc}</p>
  `;

  // Video
  document.getElementById("videoImg").src = videoEdits[index].img;
  document.getElementById("videoInfo").innerHTML = `
    <h3>${videoEdits[index].title}</h3>
    <p>${videoEdits[index].desc}</p>
  `;
}, 3000);
