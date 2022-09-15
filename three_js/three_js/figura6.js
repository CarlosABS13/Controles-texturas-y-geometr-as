const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a2b3c);
const texture = new THREE.TextureLoader();
const matcap = texture.load("../imagenes/texturas/view-of-white-crumpled-paper.jpg")
var loader = new THREE.TextureLoader();
loader.load('./imagenes/konan.jpg', function(texture){
    scene.background = texture;
});

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.IcosahedronGeometry(1, 0);
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;
const Icosahedro = new THREE.Mesh(geometry, material );
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );
scene.add(Icosahedro)

camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 5;

function animate (){
	requestAnimationFrame( animate );
	Icosahedro.rotation.y += 0.05
	Icosahedro.rotation.x += 0.04 
	Icosahedro.rotation.z += 0.05
    line.rotation.z += 0.05
    line.rotation.x += 0.04
    line.rotation.y += 0.05
	renderer.render( scene, camera )
}

animate()