const clipPosition = document.querySelector('#js-clip-intro');
const varRx = '0.015';

const clip = [{x: 0.30, y: 0.48, width: 0.29, height: 0.17, rx: varRx}, 
              {x: 0.32, y: 0.24, width: 0.25, height: 0.17, rx: varRx}, 
              {x: 0.61, y: 0.12, width: 0.16, height: 0.23, rx: varRx}, 
              {x: 0.62, y: 0.37, width: 0.18, height: 0.12, rx: varRx}, 
              {x: 0.69, y: 0.51, width: 0.17, height: 0.15, rx: varRx}, 
              {x: 0.60, y: 0.51, width: 0.08, height: 0.15, rx: varRx}, 
              {x: 0.50, y: 0.67, width: 0.43, height: 0.07, rx: varRx}, 
              {x: 0.12, y: 0.42, width: 0.48, height: 0.05, rx: varRx}, 
              {x: 0.16, y: 0.17, width: 0.14, height: 0.15, rx: varRx}, 
              {x: 0.32, y: 0.12, width: 0.27, height: 0.11, rx: varRx}, 
              {x: 0.16, y: 0.50, width: 0.12, height: 0.07, rx: varRx}, 
              {x: 0.22, y: 0.34, width: 0.08, height: 0.05, rx: varRx}, 
              {x: 0.82, y: 0.82, width: 0.08, height: 0.05, rx: varRx}, 
              {x: 0.92, y: 0.87, width: 0.08, height: 0.05, rx: varRx}, 
              {x: 0.87, y: 0.95, width: 0.08, height: 0.05, rx: varRx}, 
              {x: 0.22, y: 0.68, width: 0.26, height: 0.19, rx: varRx}, 
              {x: 0.52, y: 0.75, width: 0.10, height: 0.25, rx: varRx}, 
              {x: 0.66, y: 0.82, width: 0.15, height: 0.06, rx: varRx}, 
              {x: 0.66, y: 0.76, width: 0.33, height: 0.05, rx: varRx}, 
              {x: 0.00, y: 0.88, width: 0.48, height: 0.06, rx: varRx}, 
              {x: 0.32, y: 0.08, width: 0.68, height: 0.03, rx: varRx}, 
              {x: 0.10, y: 0.08, width: 0.19, height: 0.08, rx: varRx}, 
              {x: 0.07, y: 0.61, width: 0.21, height: 0.06, rx: varRx}, 
              {x: 0.80, y: 0.18, width: 0.12, height: 0.14, rx: varRx}, 
              {x: 0.95, y: 0.18, width: 0.05, height: 0.14, rx: varRx}, 
              {x: 0.12, y: 0.00, width: 0.36, height: 0.07, rx: varRx}, 
              {x: 0.69, y: 0.90, width: 0.17, height: 0.08, rx: varRx},
              {x: 0.86, y: 0.39, width: 0.13, height: 0.02, rx: varRx},
              {x: 0.01, y: 0.36, width: 0.16, height: 0.03, rx: varRx},
              {x: 0.09, y: 0.69, width: 0.07, height: 0.16, rx: varRx},
              {x: 0.00, y: 0.61, width: 0.05, height: 0.26, rx: varRx},
              {x: 0.00, y: 0.41, width: 0.10, height: 0.08, rx: varRx},
              {x: 0.04, y: 0.51, width: 0.10, height: 0.08, rx: varRx},
              {x: 0.84, y: 0.34, width: 0.15, height: 0.03, rx: varRx},
              {x: 0.85, y: 0.02, width: 0.15, height: 0.03, rx: varRx},
              {x: 0.74, y: 0.00, width: 0.10, height: 0.07, rx: varRx},
              {x: 0.50, y: 0.00, width: 0.21, height: 0.07, rx: varRx},
              {x: 0.88, y: 0.44, width: 0.12, height: 0.07, rx: varRx},
              {x: 0.88, y: 0.52, width: 0.12, height: 0.13, rx: varRx},
              {x: 0.02, y: 0.22, width: 0.12, height: 0.13, rx: varRx},
              {x: 0.02, y: 0.00, width: 0.07, height: 0.20, rx: varRx}, 
              {x: 0.00, y: 0.00, width: 1.00, height: 1.00, rx: 0}]

clip.forEach((elem, index) => setTimeout(() => pintarRect(elem), index * 150));

function pintarRect(rect) {
  const SVG_NS = "http://www.w3.org/2000/svg";
  const rectBox = document.createElementNS(SVG_NS, 'rect');
  
  rectBox.setAttributeNS(null, "x", rect.x);
  rectBox.setAttributeNS(null, "y", rect.y);
  rectBox.setAttributeNS(null, "width", rect.width);
  rectBox.setAttributeNS(null, "height", rect.height);
  rectBox.setAttributeNS(null, "rx", rect.rx);
  
  clipPosition.appendChild(rectBox);
}

const contenidosIntro = document.querySelectorAll('.animacion');
contenidosIntro.forEach( (elem) => setTimeout(() => elem.classList.remove('animacion'), 43 * 150) );