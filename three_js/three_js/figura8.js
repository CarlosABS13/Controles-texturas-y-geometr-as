const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a2b3c);
const texture = new THREE.TextureLoader();
var loader = new THREE.TextureLoader();
loader.load('./imagenes/dulces.jpg', function(texture){
	scene.background = texture;
});


const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

class CustomSinCurve extends THREE.Curve {

	constructor( scale = 1 ) {

		super();

		this.scale = scale;

	}

	getPoint( t, optionalTarget = new THREE.Vector3() ) {

		const tx = t * 3 - 1.5;
		const ty = Math.sin( 2 * Math.PI * t );
		const tz = 0;

		return optionalTarget.set( tx, ty, tz ).multiplyScalar( this.scale );

	}

}

const path = new CustomSinCurve( 10 );
const geometry = new THREE.TubeGeometry( path, 20, 2, 8, false );
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh( geometry, material );
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( line );
scene.add( mesh );


scene.fog = new THREE.Fog (0xffffff, 9, 10 )

camera.position.x = 0;
camera.position.y = 1;
camera.position.z = 30;

function animate (){
	requestAnimationFrame( animate );
	mesh.rotation.y += 0.1
	mesh.rotation.x += 0.04
	mesh.rotation.z += 0.1
	line.rotation.z += 0.1
	line.rotation.x += 0.04
    line.rotation.y += 0.1
	renderer.render( scene, camera )
}

animate()