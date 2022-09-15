//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a2b3c);
const texture = new THREE.TextureLoader();
const matcap = texture.load("../imagenes/texturas/summer-background-of-sea-water.jpg")
var loader = new THREE.TextureLoader();
loader.load('./imagenes/22204.jpg', function(texture){
	scene.background = texture;
});

//camera
const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

/* var control = new THREE.OrbitControls( camera, renderer.domElement );
control.minDistance = 5;
control.maxDistance = 8; */

/* const PointerLockControls = new THREE.PointerLockControls( camera, renderer.domElement );
document.getElementById('btnplay').onclick = () => {
	PointerLockControls.lock();
} */

//animation

const geometry = new THREE.BoxGeometry( 2, 2, 2 );
const material = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh( geometry, material );

const geometry2 = new THREE.BoxGeometry( 2, 2, 2 );
const material2 = new THREE.MeshMatcapMaterial();
material2.matcap = matcap;
/* material2.flatShading = true; */
const cube2 = new THREE.Mesh( geometry2, material2 );

const geometry3 = new THREE.BoxGeometry( 2, 2, 2 );
const material3 = new THREE.MeshNormalMaterial();
const cube3 = new THREE.Mesh( geometry3, material3 );

const geometry4 = new THREE.BoxGeometry( 2, 2, 2 );
const material4 = new THREE.MeshNormalMaterial();
const cube4 = new THREE.Mesh( geometry4, material4 );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( cube, cube2, cube3, cube4, line );

var objetos = [cube, cube2, cube3,cube4, line]

/* scene.fog = new THREE.Fog (0xffffff, 5, 2 ) */

cube2.position.x = 5;
cube3.position.x = -5;
cube4.position.y = 5;
camera.position.x = 0;
camera.position.y = 2;
camera.position.z = 20;

const dcontrol = new THREE.DragControls(objetos, camera, renderer.domElement )
dcontrol.deactivate();
dcontrol.activate();

dcontrol.addEventListener("hoveron", function(event){
	//console.log(event.object);
	event.object.material.wireframe = true;
	event.object.scale.y *=2;
});
dcontrol.addEventListener("hoveroff", function(event){
	event.object.material.wireframe = false;
	event.object.scale.y /=2;
});

//fly controls
const flycontrols = new THREE.FlyControls(camera, renderer.domElement);
flycontrols.movementSpeed = 10;
flycontrols.rollSpeed = 0.01;
flycontrols.autoForward = false;
flycontrols.dragToLock = false;
// fin flycontrols

function animate (){
	requestAnimationFrame( animate );
	cube.rotation.y += 0.04
	cube.rotation.x += 0.04
	cube.rotation.z += 0.04
	cube2.rotation.y += 0.01
	cube2.rotation.x += 0.01
	cube2.rotation.z += 0.01
	cube3.rotation.y += 0.05
	cube3.rotation.x += 0.05
	cube3.rotation.z += 0.05
	cube4.rotation.y += 0.05
	cube4.rotation.x += 0.05
	cube4.rotation.z += 0.05
	line.rotation.z += 0.04
	line.rotation.x += 0.04
    line.rotation.y += 0.04
	flycontrols.update(0.1);
	renderer.render( scene, camera )
}

animate()