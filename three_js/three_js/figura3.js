const scene = new THREE.Scene();
scene.background = new THREE.Color(0x2d572c);
const texture = new THREE.TextureLoader();
const matcap = texture.load("../imagenes/texturas/ladrillos.jpg");
var loader = new THREE.TextureLoader();
loader.load('./imagenes/minecraft.jpeg', function(texture){
	scene.background = texture;
});

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.ConeGeometry( 3, 5, 15 );
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;
const cone = new THREE.Mesh( geometry, material );
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xa90000 } ) );
scene.add( line );	
scene.add( cone );

scene.fog = new THREE.Fog (0xffffff, 20, 22 )

camera.position.x = 0;
camera.position.y = -3.5;
camera.position.z = 20;

function animate (){
	requestAnimationFrame( animate );
	cone.rotation.y += 0.05
	/* cone.rotation.x += 0.04 */
	cone.rotation.z += 0.05
	line.rotation.z += 0.05
    line.rotation.y += 0.05
	renderer.render( scene, camera )
}

animate()
