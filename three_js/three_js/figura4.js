const scene = new THREE.Scene();
scene.background = new THREE.Color(0xa98307);
const texture = new THREE.TextureLoader();
const matcap = texture.load("../imagenes/texturas/black-and-white-details-of-moon-texture-concept.jpg");
var loader = new THREE.TextureLoader();
loader.load('./imagenes/luna.jpg', function(texture){
	scene.background = texture;
});

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.SphereGeometry( 3, 4, 5 );
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;
const sphere = new THREE.Mesh( geometry, material );
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( line );
scene.add( sphere );

scene.fog = new THREE.Fog (0x000000, 8, 10 )



camera.position.x = 0;
camera.position.y = 1.5;
camera.position.z = 10;

function animate (){
	requestAnimationFrame( animate );
	sphere.rotation.y += 0.01
	/* cone.rotation.x += 0.04 */
	sphere.rotation.z += 0.01
    line.rotation.z += 0.01
    line.rotation.y += 0.01
	renderer.render( scene, camera )
}

animate()