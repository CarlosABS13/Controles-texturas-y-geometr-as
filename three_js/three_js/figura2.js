const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a2b3c);
const texture = new THREE.TextureLoader();
var loader = new THREE.TextureLoader();
loader.load('./imagenes/edward.jpg', function(texture){
    scene.background = texture;
});

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.TorusKnotGeometry( 2, 3, 50, 5, 10, 8 );

const material = new THREE.MeshMatcapMaterial();

const matcap = texture.load("../imagenes/texturas/brown-wooden-flooring.jpg")
material.matcap = matcap;
material.flatShading = true;

const torusKnot = new THREE.Mesh( geometry, material );
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xa18262 } ) );
scene.add( line );
scene.add( torusKnot );

//scene.fog = new THREE.Fog (0x000000, 8, 10 )

    camera.position.x = 0;
camera.position.y = 10;
camera.position.z = 40;

function animate (){
	requestAnimationFrame( animate );
	torusKnot.rotation.y += 0.05
	torusKnot.rotation.x += 0.04 
	torusKnot.rotation.z += 0.05
    line.rotation.z += 0.05
    line.rotation.x += 0.04
    line.rotation.y += 0.05
	renderer.render( scene, camera )
}

animate()