import './style.css';
import 'ol-layerswitcher/dist/ol-layerswitcher.css';
import {Map, View} from 'ol';
import {Vector as VectorLayer} from 'ol/layer';
import {fromLonLat} from 'ol/proj';
import Feature from 'ol/Feature';
import {LineString, Point} from 'ol/geom';
import {Icon, Style, Stroke} from 'ol/style';
import VectorSource from 'ol/source/Vector';
import {
  DragRotateAndZoom,
  defaults as defaultInteractions,
} from 'ol/interaction';
import {FullScreen, defaults as defaultControls} from 'ol/control';
import {apply} from 'ol-mapbox-style';
import Rotate from 'ol/control/Rotate';
import Overlay from 'ol/Overlay';
import Geolocation from 'ol/Geolocation';
import LayerSwitcher from 'ol-layerswitcher';
import { BaseLayerOptions, GroupLayerOptions } from 'ol-layerswitcher';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

const centerCoordinate=[29.9786849, 40.7919762];

const carHistory = new Feature(
  new LineString([
    fromLonLat([29.9786849, 40.7919762]),
    fromLonLat([29.9786725, 40.7919826]),
    fromLonLat([29.9785718, 40.7920712]),
    fromLonLat([29.9783122, 40.792373]),
    fromLonLat([29.9781012, 40.7927547]),
    fromLonLat([29.9775681, 40.793365]),
    fromLonLat([29.9773357, 40.7936151]),
    fromLonLat([29.9772828, 40.7936272]),
    fromLonLat([29.9772301, 40.7936153]),
    fromLonLat([29.9771132, 40.7935534]),
    fromLonLat([29.9764576, 40.7932111]),
    fromLonLat([29.9764025, 40.7932361]),
    fromLonLat([29.9763263, 40.7933053]),
    fromLonLat([29.9757281, 40.7939459]),
    fromLonLat([29.9751765, 40.7945403]),
    fromLonLat([29.975079, 40.7945807]),
    fromLonLat([29.9749138, 40.7946017]),
    fromLonLat([29.9741197, 40.794638]),
    fromLonLat([29.9725221, 40.7944818]),
    fromLonLat([29.9713755, 40.7943563]),
    fromLonLat([29.9701206, 40.7941346]),
    fromLonLat([29.9681402, 40.7934809]),
    fromLonLat([29.966764, 40.7930146]),
    fromLonLat([29.9652762, 40.7921082]),
    fromLonLat([29.9650454, 40.7918891]),
    fromLonLat([29.9649391, 40.7918699]),
    fromLonLat([29.9648212, 40.7918816]),
    fromLonLat([29.9634074, 40.7921838]),
    fromLonLat([29.9633096, 40.7921554]),
    fromLonLat([29.9631825, 40.7920548]),
    fromLonLat([29.9625384, 40.7911578]),
    fromLonLat([29.9619542, 40.7904059]),
    fromLonLat([29.9610478, 40.7897288]),
    fromLonLat([29.9608322, 40.7896016]),
    fromLonLat([29.9607468, 40.7896112]),
    fromLonLat([29.9606735, 40.7896564]),
    fromLonLat([29.9598501, 40.7903509]),
    fromLonLat([29.9597751, 40.790351]),
    fromLonLat([29.95966, 40.790309]),
    fromLonLat([29.959409, 40.7901316]),
    fromLonLat([29.9593964, 40.7901268]),
    fromLonLat([29.9586525, 40.7897813]),
    fromLonLat([29.9578763, 40.7889404]),
    fromLonLat([29.9577226, 40.788508]),
    fromLonLat([29.9577934, 40.788452]),
    fromLonLat([29.9584231, 40.7880874]),
    fromLonLat([29.9584422, 40.7880398]),
    fromLonLat([29.9584327, 40.7879997]),
    fromLonLat([29.9583992, 40.7879618]),
    fromLonLat([29.9582854, 40.7878841]),
    fromLonLat([29.9570303, 40.7872286]),
    fromLonLat([29.9552846, 40.7866759]),
    fromLonLat([29.9551087, 40.7867206]),
    fromLonLat([29.9533659, 40.7868336]),
    fromLonLat([29.9519806, 40.7864066]),
    fromLonLat([29.9518279, 40.7861647]),
    fromLonLat([29.951798, 40.785758]),
    fromLonLat([29.951951, 40.7855164]),
    fromLonLat([29.9521839, 40.785341]),
    fromLonLat([29.9526366, 40.7851899]),
    fromLonLat([29.9545623, 40.785022]),
    fromLonLat([29.9555509, 40.7849302]),
    fromLonLat([29.9566207, 40.7847803]),
    fromLonLat([29.9582208, 40.7847386]),
    fromLonLat([29.9619166, 40.7847616]),
    fromLonLat([29.9659723, 40.7852604]),
    fromLonLat([29.9706106, 40.7849805]),
    fromLonLat([29.9737775, 40.7837199]),
    fromLonLat([29.9738583, 40.7834769]),
    fromLonLat([29.9731104, 40.7817939]),
    fromLonLat([29.9717093, 40.7792476]),
    fromLonLat([29.9702536, 40.7764496]),
    fromLonLat([29.9693052, 40.7739345]),
    fromLonLat([29.9683924, 40.7712976]),
    fromLonLat([29.9677108, 40.7690747]),
    fromLonLat([29.9675949, 40.7685289]),
    fromLonLat([29.9675877, 40.7685002]),
    fromLonLat([29.9675717, 40.7684724]),
    fromLonLat([29.9674247, 40.7679626]),
    fromLonLat([29.9672806, 40.7675694]),
    fromLonLat([29.9670775, 40.7669028]),
    fromLonLat([29.966937, 40.7666485]),
    fromLonLat([29.9666314, 40.7656681]),
    fromLonLat([29.9663889, 40.7649482]),
    fromLonLat([29.9662516, 40.7649295]),
    fromLonLat([29.9657343, 40.7650194]),
    fromLonLat([29.965724, 40.7650032]),
    fromLonLat([29.9656995, 40.7649702]),
    fromLonLat([29.9654045, 40.7642254]),
    fromLonLat([29.9651408, 40.7634965]),
    fromLonLat([29.9650532, 40.7633549]),
    fromLonLat([29.9644363, 40.7630545]),
    fromLonLat([29.963169, 40.7632116]),
    fromLonLat([29.9630237, 40.7632208]),
    fromLonLat([29.9617976, 40.7633155]),
    fromLonLat([29.9601776, 40.763457]),
    fromLonLat([29.9584334, 40.7636291]),
    fromLonLat([29.9576948, 40.7636326]),
    fromLonLat([29.9575938, 40.7636028]),
    fromLonLat([29.9572966, 40.7635316]),
    fromLonLat([29.9571783, 40.7634424]),
    fromLonLat([29.9571456, 40.7633586]),
    fromLonLat([29.95725, 40.7627163]),
    fromLonLat([29.9572168, 40.7625969]),
    fromLonLat([29.9572612, 40.7624173]),
    fromLonLat([29.9573439, 40.7623829]),
    fromLonLat([29.959004, 40.7622688]),
    fromLonLat([29.9609736, 40.7621124]),
    fromLonLat([29.9629787, 40.7619322]),
    fromLonLat([29.9643016, 40.7616052]),
    fromLonLat([29.9644227, 40.7614071]),
    fromLonLat([29.9648114, 40.7609062]),
    fromLonLat([29.9657198, 40.7603286]),
    fromLonLat([29.9657438, 40.7601308]),
    fromLonLat([29.965417, 40.7586422]),
    fromLonLat([29.9646499, 40.7573279]),
    fromLonLat([29.9636239, 40.7559392]),
    fromLonLat([29.9619641, 40.7553375]),
    fromLonLat([29.9614145, 40.7550934]),
    fromLonLat([29.9611439, 40.7548072]),
    fromLonLat([29.9606259, 40.7532978]),
    fromLonLat([29.9599088, 40.7514709]),
    fromLonLat([29.9591199, 40.749783]),
    fromLonLat([29.9577588, 40.7475245]),
    fromLonLat([29.9562439, 40.7452403]),
    fromLonLat([29.9551149, 40.7423293]),
    fromLonLat([29.9551249, 40.7396118]),
    fromLonLat([29.9553477, 40.7371253]),
    fromLonLat([29.9555697, 40.7346167]),
    fromLonLat([29.9558006, 40.7320909]),
    fromLonLat([29.9559066, 40.7291809]),
    fromLonLat([29.9545142, 40.7260852]),
    fromLonLat([29.9517056, 40.7238464]),
    fromLonLat([29.9476818, 40.7225927]),
    fromLonLat([29.9437763, 40.7218555]),
    fromLonLat([29.9397506, 40.7209777]),
    fromLonLat([29.9368178, 40.7191891]),
    fromLonLat([29.9343843, 40.716531]),
    fromLonLat([29.9314411, 40.7149599]),
    fromLonLat([29.9288962, 40.7142786]),
    fromLonLat([29.9262882, 40.713613]),
    fromLonLat([29.9232394, 40.7130745]),
    fromLonLat([29.920331, 40.7129266]),
    fromLonLat([29.9173032, 40.7127647]),
    fromLonLat([29.9144428, 40.7125586]),
    fromLonLat([29.9116522, 40.7119196]),
    fromLonLat([29.9083798, 40.7112317]),
    fromLonLat([29.9052845, 40.7107003]),
    fromLonLat([29.9033088, 40.7102549]),
    fromLonLat([29.9025564, 40.7099244]),
    fromLonLat([29.8996966, 40.7090069]),
    fromLonLat([29.8964925, 40.7083955]),
    fromLonLat([29.8933895, 40.708105]),
    fromLonLat([29.8902267, 40.707846]),
    fromLonLat([29.8874941, 40.707594]),
    fromLonLat([29.8847797, 40.707355]),
    fromLonLat([29.8829905, 40.7073035]),
    fromLonLat([29.8827851, 40.7074538]),
    fromLonLat([29.8821982, 40.7078979]),
    fromLonLat([29.8819443, 40.7079283]),
    fromLonLat([29.881112, 40.7077312]),
    fromLonLat([29.8809266, 40.7075133]),
    fromLonLat([29.8809938, 40.7074127]),
    fromLonLat([29.882042, 40.7066705]),
    fromLonLat([29.8833351, 40.7057552]),
    fromLonLat([29.8840246, 40.7051292]),
    fromLonLat([29.8841305, 40.7045978]),
    fromLonLat([29.8843242, 40.7040201]),
    fromLonLat([29.8844336, 40.7040178]),
    fromLonLat([29.8848145, 40.7039738]),
    fromLonLat([29.8848806, 40.7039135]),
    fromLonLat([29.8848965, 40.7038332]),
    fromLonLat([29.884771, 40.7033731]),
    fromLonLat([29.8846315, 40.7032621]),
    fromLonLat([29.8846372, 40.7032076]),
    fromLonLat([29.884682, 40.7031678]),
    fromLonLat([29.8847099, 40.7031655]),
    fromLonLat([29.8847239, 40.7031679]),
    fromLonLat([29.8847147, 40.7031632]),
    fromLonLat([29.8847037, 40.7031597]),
    fromLonLat([29.8846664, 40.7031341]),    
  ])
);



const car = new Feature({
  geometry: new Point(fromLonLat(centerCoordinate)),
});

car.setStyle(
  new Style({
    image: new Icon({
      color: '#BADA55',
      crossOrigin: 'anonymous',
      src: 'RedCar.svg',      
      imgSize:[40, 40]
    }),
  })
);

const style = new Style({
  stroke: new Stroke({
    color: '#FF0000',
    width: 3,
  }),
});
carHistory.setStyle(style);



const vectorSource = new VectorSource({
  features: [carHistory],
});

const vectorLayer = new VectorLayer({
  title:'Araçlar'  ,

  source: vectorSource,  
  zIndex:100
});

const key = 'U7ypMlIw5T2FUxvZh4n5';
const url = 'https://api.maptiler.com/maps/hybrid/style.json?key=' + key;

const attributions =  'Demo by <a href="https://rubikas.com/"><b>&copy;Rubikas</b></a> '+  
                      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
                      '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a> ';

var view = new View({
  constrainResolution: true,
  center: fromLonLat(centerCoordinate),
  zoom: 19
});

const tileLayer = new TileLayer({
  source: new XYZ({
    url:
      ' https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}&s=Ga',
  }),
})

const map = new Map({
  controls: defaultControls().extend([new FullScreen(), new Rotate()]),
  interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
  target: 'map',
  layers: [tileLayer,vectorLayer],
  view: view
});
//apply(map,url);
//map.addLayer(vectorLayer);
 //mapView.center([29.8846559, 40.7031319]);

 // Geolocation marker
const markerEl = document.getElementById('geolocation_marker');
const marker = new Overlay({
  positioning: 'center-center',
  element: markerEl,
  stopEvent: false,
});
map.addOverlay(marker);

// LineString to store the different geolocation positions. This LineString
// is time aware.
// The Z dimension is actually used to store the rotation (heading).
const positions = new LineString([], 'XYZM');


// Geolocation Control
const geolocation = new Geolocation({
  projection: view.getProjection(),
  trackingOptions: {
    maximumAge: 10000,
    enableHighAccuracy: true,
    timeout: 600000,
  },
});

let deltaMean = 500; // the geolocation sampling period mean in ms


// Listen to position changes
geolocation.on('change', function () {
  const position = geolocation.getPosition();
  const accuracy = geolocation.getAccuracy();
  const heading = geolocation.getHeading() || 0;
  const speed = geolocation.getSpeed() || 0;
  const m = Date.now();

  addPosition(position, heading, m, speed);

  const coords = positions.getCoordinates();
  const len = coords.length;
  if (len >= 2) {
    deltaMean = (coords[len - 1][3] - coords[0][3]) / (len - 1);
  }

  const html = [
    'Position: ' + position[0].toFixed(2) + ', ' + position[1].toFixed(2),
    'Accuracy: ' + accuracy,
    'Heading: ' + Math.round(radToDeg(heading)) + '&deg;',
    'Speed: ' + (speed * 3.6).toFixed(1) + ' km/h',
    'Delta: ' + Math.round(deltaMean) + 'ms',
  ].join('<br />');
  document.getElementById('info').innerHTML = html;
});

geolocation.on('error', function () {
  alert('geolocation error');
  // FIXME we should remove the coordinates in positions
});

// convert radians to degrees
function radToDeg(rad) {
  return (rad * 360) / (Math.PI * 2);
}
// convert degrees to radians
function degToRad(deg) {
  return (deg * Math.PI * 2) / 360;
}
// modulo for negative values
function mod(n) {
  return ((n % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
}

function addPosition(position, heading, m, speed) {
  const x = position[0];
  const y = position[1];
  const fCoords = positions.getCoordinates();
  const previous = fCoords[fCoords.length - 1];
  const prevHeading = previous && previous[2];
  if (prevHeading) {
    let headingDiff = heading - mod(prevHeading);

    // force the rotation change to be less than 180°
    if (Math.abs(headingDiff) > Math.PI) {
      const sign = headingDiff >= 0 ? 1 : -1;
      headingDiff = -sign * (2 * Math.PI - Math.abs(headingDiff));
    }
    heading = prevHeading + headingDiff;
  }
  positions.appendCoordinate([x, y, heading, m]);

  // only keep the 20 last coordinates
  positions.setCoordinates(positions.getCoordinates().slice(-20));

  // FIXME use speed instead
  if (heading && speed) {
    markerEl.src = 'RedCar.svg';
  } else {
    markerEl.src = 'RedCar.svg';
  }
}

// recenters the view by putting the given coordinates at 3/4 from the top or
// the screen
function getCenterWithHeading(position, rotation, resolution) {
  const size = map.getSize();
  const height = size[1];

  return [
    position[0] - (Math.sin(rotation) * height * resolution * 1) / 4,
    position[1] + (Math.cos(rotation) * height * resolution * 1) / 4,
  ];
}

let previousM = 0;
function updateView() {
  // use sampling period to get a smooth transition
  let m = Date.now() - deltaMean * 1.5;
  m = Math.max(m, previousM);
  previousM = m;
  // interpolate position along positions LineString
  const c = positions.getCoordinateAtM(m, true);
  if (c) {
    view.setCenter(getCenterWithHeading(c, -c[2], view.getResolution()));
    view.setRotation(-c[2]);
    marker.setPosition(c);
    map.render();
  }
}

// geolocate device
/*
const geolocateBtn = document.getElementById('geolocate');
geolocateBtn.addEventListener(
  'click',
  function () {
    geolocation.setTracking(true); // Start position tracking

    tileLayer.on('postrender', updateView);
    map.render();

    disableButtons();
  },
  false
);
 */

// simulate device move
let simulationData;
const client = new XMLHttpRequest();
client.open('GET', 'geolocation-orientation.json');

/**
 * Handle data loading.
 */
client.onload = function () {
  simulationData = JSON.parse(client.responseText).data;
};
client.send();

const simulateBtn = document.getElementById('simulate');
simulateBtn.addEventListener(
  'click',
  function () {
    const coordinates = simulationData;

    const first = coordinates.shift();
    simulatePositionChange(first);

    let prevDate = first.timestamp;
    function geolocate() {
      const position = coordinates.shift();
      if (!position) {
        return;
      }
      const newDate = position.timestamp;
      simulatePositionChange(position);
      window.setTimeout(function () {
        prevDate = newDate;
        geolocate();
      }, (newDate - prevDate) / 0.5);
    }
    geolocate();

    tileLayer.on('postrender', updateView);
    map.render();

    disableButtons();
  },
  false
);

function simulatePositionChange(position) {
  const coords = position.coords;
  geolocation.set('accuracy', coords.accuracy);
  geolocation.set('heading', degToRad(coords.heading));
  const projectedPosition = fromLonLat([coords.longitude, coords.latitude]);
  geolocation.set('position', projectedPosition);
  geolocation.set('speed', coords.speed);
  geolocation.changed();
}

function disableButtons() {
  //geolocateBtn.disabled = 'disabled';
  simulateBtn.disabled = 'disabled';
}
