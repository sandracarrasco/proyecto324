
var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;


function init() {
	var canvasWidth = window.innerWidth * 0.9;
	var canvasHeight = window.innerHeight * 0.9;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 80000 );
	camera.position.set(0,10,0);
	camera.lookAt(0,0,0);

	// LIGHTS

	light = new THREE.DirectionalLight( 0xFFFFFF, 0.7 );
	light.position.set( 0, 0, 0 );
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight( 0x111111 );

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0xAAAAAA, 1.0 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);

	// OBJECT
   
		var pared=new THREE.Geometry();
		var piso=new THREE.Geometry();
		var mesa=new THREE.Geometry();
		var mesa2=new THREE.Geometry();
		var cpu=new THREE.Geometry();
		var monitor=new THREE.Geometry();
		var pantalla1=new THREE.Geometry();
	
		var silla1=new THREE.Geometry(); //3
		var silla11=new THREE.Geometry();
		var silla2=new THREE.Geometry();//5
		var silla22=new THREE.Geometry();		
		
//-------------------------------------------------------------------------------------------------------------

	//CUARTO PAREDES
	pared.vertices.push(new THREE.Vector3(6,0,0));//0
	pared.vertices.push(new THREE.Vector3(0,0,6));//1
	pared.vertices.push(new THREE.Vector3(0,2.5,6));//2
	pared.vertices.push(new THREE.Vector3(6,2.5,0));//3
	
	pared.vertices.push(new THREE.Vector3(-6,0,0));//4
	pared.vertices.push(new THREE.Vector3(0,0,-6));//5
	pared.vertices.push(new THREE.Vector3(0,2.5,-6));//6
	pared.vertices.push(new THREE.Vector3(-6,2.5,0));//7

	pared.vertices.push(new THREE.Vector3(-5,0,1));//8
	pared.vertices.push(new THREE.Vector3(-5,2.5,1));//9
	pared.vertices.push(new THREE.Vector3(-4,0.0,2));//10
	pared.vertices.push(new THREE.Vector3(-4,2.5,2));//11


    //CUARTO PAREDES
    pared.faces.push( new THREE.Face3( 0, 1, 2 ) );
	pared.faces.push( new THREE.Face3( 0, 2, 1 ) );
	pared.faces.push( new THREE.Face3( 0, 3, 2 ) );
	pared.faces.push( new THREE.Face3( 0, 2, 3 ) );
    pared.faces.push( new THREE.Face3( 4, 5, 6 ) );
	pared.faces.push( new THREE.Face3( 4, 7, 6 ) );
	pared.faces.push( new THREE.Face3( 4, 6, 5 ) );
	pared.faces.push( new THREE.Face3( 4, 6, 7 ) );	
	
    pared.faces.push( new THREE.Face3( 0, 5, 6 ) );
	pared.faces.push( new THREE.Face3( 0, 3, 6 ) );
	pared.faces.push( new THREE.Face3( 0, 6, 5 ) );
	pared.faces.push( new THREE.Face3( 0, 6, 3 ) );

    pared.faces.push( new THREE.Face3( 0, 4, 5 ) );
	pared.faces.push( new THREE.Face3( 0, 1, 4 ) );
	pared.faces.push( new THREE.Face3( 0, 5, 4 ) );
	pared.faces.push( new THREE.Face3( 0, 4, 1 ) );	
	
	pared.faces.push(new THREE.Face3(4,8,9));
	pared.faces.push(new THREE.Face3(4,9,8));
	pared.faces.push(new THREE.Face3(1,10,11));
	pared.faces.push(new THREE.Face3(1,10,10));
	
	

//PISO

	piso.vertices.push(new THREE.Vector3(5.9,0.01,0.1));//0
	piso.vertices.push(new THREE.Vector3(0,0.01,5.9));//1
	piso.vertices.push(new THREE.Vector3(0,0.01,-5.9));//2
	piso.vertices.push(new THREE.Vector3(-5.9,0.01,0));//3

	piso.faces.push( new THREE.Face3( 0, 3, 1 ) );
	piso.faces.push( new THREE.Face3( 0, 3, 2 ) );
	piso.faces.push( new THREE.Face3( 0, 1, 3 ) );
	piso.faces.push( new THREE.Face3( 0, 2, 3 ) );



//MESA
	mesa.vertices.push(new THREE.Vector3(0.75,0.02,1.5));//0
	mesa.vertices.push(new THREE.Vector3(-1.5,0.02,3.5));//1
	mesa.vertices.push(new THREE.Vector3(-2.25,0.02,2.75));//2
	mesa.vertices.push(new THREE.Vector3(-0.25,0.02,0.5));//3
	
	mesa.vertices.push(new THREE.Vector3(0.75,1.2,1.5));//4
	mesa.vertices.push(new THREE.Vector3(-1.5,1.2,3.5));//5
	mesa.vertices.push(new THREE.Vector3(-2.25,1.2,2.75));//6
	mesa.vertices.push(new THREE.Vector3(-0.25,1.2,0.5));//7
//----------------------------------------
    mesa.faces.push( new THREE.Face3( 0, 1, 2 ) );
	mesa.faces.push( new THREE.Face3( 0, 3, 2 ) );
	mesa.faces.push( new THREE.Face3( 0, 2, 1 ) );
	mesa.faces.push( new THREE.Face3( 0, 2, 3 ) );

	mesa.faces.push( new THREE.Face3( 4, 5, 6 ) );
	mesa.faces.push( new THREE.Face3( 4, 7, 6 ) );
	mesa.faces.push( new THREE.Face3( 4, 6, 5 ) );
	mesa.faces.push( new THREE.Face3( 4, 6, 7 ) );


	mesa.faces.push( new THREE.Face3( 0, 3, 7 ) );
	mesa.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	mesa.faces.push( new THREE.Face3( 1, 2, 6 ) );
	mesa.faces.push( new THREE.Face3( 1, 5, 6 ) );
	mesa.faces.push( new THREE.Face3( 2, 3, 7 ) );
	mesa.faces.push( new THREE.Face3( 2, 6, 7 ) );
	

	mesa.faces.push( new THREE.Face3( 0, 7, 3 ) );
	mesa.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	mesa.faces.push( new THREE.Face3( 1, 6, 2 ) );
	mesa.faces.push( new THREE.Face3( 1, 6, 5 ) );
	mesa.faces.push( new THREE.Face3( 2, 7, 3 ) );
	mesa.faces.push( new THREE.Face3( 2, 7, 6 ) );

	//mesa2
	mesa2.vertices.push(new THREE.Vector3(1.5,0.02,-3.5));//0
	mesa2.vertices.push(new THREE.Vector3(-1,0.02,-1));//1
	mesa2.vertices.push(new THREE.Vector3(-2.5,0.02,-2.5));//2
	mesa2.vertices.push(new THREE.Vector3(0,0.02,-5));//3
	
	mesa2.vertices.push(new THREE.Vector3(1.5,1.2,-3.5));//0
	mesa2.vertices.push(new THREE.Vector3(-1,1.2,-1));//1
	mesa2.vertices.push(new THREE.Vector3(-2.5,1.2,-2.5));//2
	mesa2.vertices.push(new THREE.Vector3(0,1.2,-5));//3

	//-------------------------------
	mesa2.faces.push( new THREE.Face3( 0, 1, 2 ) );
	mesa2.faces.push( new THREE.Face3( 0, 3, 2 ) );
	mesa2.faces.push( new THREE.Face3( 0, 2, 1 ) );
	mesa2.faces.push( new THREE.Face3( 0, 2, 3 ) );

	mesa2.faces.push( new THREE.Face3( 4, 5, 6 ) );
	mesa2.faces.push( new THREE.Face3( 4, 7, 6 ) );
	mesa2.faces.push( new THREE.Face3( 4, 6, 5 ) );
	mesa2.faces.push( new THREE.Face3( 4, 6, 7 ) );

	mesa2.faces.push( new THREE.Face3( 0, 4, 1 ) );
	mesa2.faces.push( new THREE.Face3( 1, 5, 4 ) );
	mesa2.faces.push( new THREE.Face3( 0, 3, 7 ) );
	mesa2.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	mesa2.faces.push( new THREE.Face3( 1, 2, 6 ) );
	mesa2.faces.push( new THREE.Face3( 1, 5, 6 ) );

	
	mesa2.faces.push( new THREE.Face3( 0, 1, 4 ) );
	mesa2.faces.push( new THREE.Face3( 1, 4, 5 ) );
	mesa2.faces.push( new THREE.Face3( 0, 7, 3 ) );
	mesa2.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	mesa2.faces.push( new THREE.Face3( 1, 6, 2 ) );
	mesa2.faces.push( new THREE.Face3( 1, 6, 5 ) );
	

//CPU

	cpu.vertices.push(new THREE.Vector3(0,0.03,1.5));//0
	cpu.vertices.push(new THREE.Vector3(-1,0.03,2.5));//1
	cpu.vertices.push(new THREE.Vector3(-1.5,0.03,2));//2
	cpu.vertices.push(new THREE.Vector3(-0.5,0.03,1));//3
	
	cpu.vertices.push(new THREE.Vector3(0,0.65,1.5));//0
	cpu.vertices.push(new THREE.Vector3(-1,0.65,2.5));//1
	cpu.vertices.push(new THREE.Vector3(-1.5,0.65,2));//2
	cpu.vertices.push(new THREE.Vector3(-0.5,0.65,1));//3
	//-------------------

	cpu.faces.push( new THREE.Face3( 0, 1, 2 ) );
	cpu.faces.push( new THREE.Face3( 0, 3, 2 ) );
	cpu.faces.push( new THREE.Face3( 0, 2, 1 ) );
	cpu.faces.push( new THREE.Face3( 0, 2, 3 ) );
	cpu.faces.push( new THREE.Face3( 4, 5, 6 ) );
	cpu.faces.push( new THREE.Face3( 4, 7, 6 ) );
	cpu.faces.push( new THREE.Face3( 4, 6, 5 ) );
	cpu.faces.push( new THREE.Face3( 4, 6, 7 ) );

	cpu.faces.push( new THREE.Face3( 0, 4, 1 ) );
	cpu.faces.push( new THREE.Face3( 1, 5, 4 ) );
	cpu.faces.push( new THREE.Face3( 0, 3, 7 ) );
	cpu.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	cpu.faces.push( new THREE.Face3( 1, 2, 6 ) );
	cpu.faces.push( new THREE.Face3( 1, 5, 6 ) );

	
	cpu.faces.push( new THREE.Face3( 0, 1, 4 ) );
	cpu.faces.push( new THREE.Face3( 1, 4, 5 ) );
	cpu.faces.push( new THREE.Face3( 0, 7, 3 ) );
	cpu.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	cpu.faces.push( new THREE.Face3( 1, 6, 2 ) );
	cpu.faces.push( new THREE.Face3( 1, 6, 5 ) );


	monitor.vertices.push(new THREE.Vector3(-1.25,1.3,1.75));//0
	monitor.vertices.push(new THREE.Vector3(-2.25,1.3,2.75));//1
	monitor.vertices.push(new THREE.Vector3(-1.75,1.3,3.25));//2 asdasdasd
	monitor.vertices.push(new THREE.Vector3(-0.75,1.3,2));//3
	monitor.vertices.push(new THREE.Vector3(-1.25,1.9,1.75));//0
	monitor.vertices.push(new THREE.Vector3(-2.25,1.9,2.75));//1
	monitor.vertices.push(new THREE.Vector3(-1.75,1.9,3.25));//2 asdasdasd
	monitor.vertices.push(new THREE.Vector3(-0.75,1.9,2));//3
	
//.------------
    monitor.faces.push( new THREE.Face3( 0, 1, 2 ) );
	monitor.faces.push( new THREE.Face3( 0, 3, 2 ) );
	monitor.faces.push( new THREE.Face3( 0, 2, 1 ) );
	monitor.faces.push( new THREE.Face3( 0, 2, 3 ) );
	monitor.faces.push( new THREE.Face3( 4, 5, 6 ) );
	monitor.faces.push( new THREE.Face3( 4, 7, 6 ) );
	monitor.faces.push( new THREE.Face3( 4, 6, 5 ) );
	monitor.faces.push( new THREE.Face3( 4, 6, 7 ) );
	monitor.faces.push( new THREE.Face3( 0, 4, 1 ) );
	monitor.faces.push( new THREE.Face3( 1, 5, 4 ) );
	monitor.faces.push( new THREE.Face3( 0, 3, 7 ) );
	monitor.faces.push( new THREE.Face3( 0, 4, 7 ) );	
	monitor.faces.push( new THREE.Face3( 1, 2, 6 ) );
	monitor.faces.push( new THREE.Face3( 1, 5, 6 ) );
	monitor.faces.push( new THREE.Face3( 0, 1, 4 ) );
	monitor.faces.push( new THREE.Face3( 1, 4, 5 ) );
	monitor.faces.push( new THREE.Face3( 0, 7, 3 ) );
	monitor.faces.push( new THREE.Face3( 0, 7, 4 ) );	
	monitor.faces.push( new THREE.Face3( 1, 6, 2 ) );
	monitor.faces.push( new THREE.Face3( 1, 6, 5 ) );
//pantalla

	pantalla1.vertices.push(new THREE.Vector3(-1.25,1.3,1.75));//0
	pantalla1.vertices.push(new THREE.Vector3(-2.25,1.3,2.75));//1
	pantalla1.vertices.push(new THREE.Vector3(-1.75,1.3,3.25));//2 
	pantalla1.vertices.push(new THREE.Vector3(-0.75,1.3,2));//3
	pantalla1.vertices.push(new THREE.Vector3(-1.25,1.9,1.75));//0
	pantalla1.vertices.push(new THREE.Vector3(-2.25,1.9,2.75));//1
	pantalla1.vertices.push(new THREE.Vector3(-1.75,1.9,3.25));//2 
	pantalla1.vertices.push(new THREE.Vector3(-0.75,1.9,2));//3
	

	
	
	pantalla1.faces.push(new THREE.Face3( 2, 3, 6));
	pantalla1.faces.push(new THREE.Face3( 3, 7, 6));
	pantalla1.faces.push(new THREE.Face3(2, 6, 3));
	pantalla1.faces.push(new THREE.Face3( 3, 6, 7));
	




	silla1.vertices.push(new THREE.Vector3(1,0.02,4));//0
	silla1.vertices.push(new THREE.Vector3(0,0.02,5));//1
	silla1.vertices.push(new THREE.Vector3(-0.25,0.02,4.75));//2 
	silla1.vertices.push(new THREE.Vector3(0.75,0.02,3.75));//3
	
	silla1.vertices.push(new THREE.Vector3(1,1.4,4));//0
	silla1.vertices.push(new THREE.Vector3(0,1.4,5));//1
	silla1.vertices.push(new THREE.Vector3(-0.25,1.4,4.75));//2 
	silla1.vertices.push(new THREE.Vector3(0.75,1.4,3.75));//3

    silla1.faces.push( new THREE.Face3( 0, 1, 2 ) );
	silla1.faces.push( new THREE.Face3( 0, 3, 2 ) );
	silla1.faces.push( new THREE.Face3( 0, 2, 1 ) );
	silla1.faces.push( new THREE.Face3( 0, 2, 3 ) );
	silla1.faces.push( new THREE.Face3( 4, 5, 6 ) );
	silla1.faces.push( new THREE.Face3( 4, 7, 6 ) );
	silla1.faces.push( new THREE.Face3( 4, 6, 5 ) );
	silla1.faces.push( new THREE.Face3( 4, 6, 7 ) );
	silla1.faces.push( new THREE.Face3( 0, 4, 1 ) );
	silla1.faces.push( new THREE.Face3( 1, 5, 4 ) );
	silla1.faces.push( new THREE.Face3( 0, 3, 7 ) );
	silla1.faces.push( new THREE.Face3( 0, 4, 7 ) );
	silla1.faces.push( new THREE.Face3( 1, 2, 6 ) );
	silla1.faces.push( new THREE.Face3( 1, 5, 6 ) );
	silla1.faces.push( new THREE.Face3( 0, 1, 4 ) );
	silla1.faces.push( new THREE.Face3( 1, 4, 5 ) );
	silla1.faces.push( new THREE.Face3( 0, 7, 3 ) );
	silla1.faces.push( new THREE.Face3( 0, 7, 4 ) );
	silla1.faces.push( new THREE.Face3( 1, 6, 2 ) );
	silla1.faces.push( new THREE.Face3( 1, 6, 5 ) );
	

	

	
	silla11.vertices.push(new THREE.Vector3(0.75,0.02,3.75));//0
	silla11.vertices.push(new THREE.Vector3(-0.25,0.02,4.75));//1
	silla11.vertices.push(new THREE.Vector3(-1,0.02,4));//2 
	silla11.vertices.push(new THREE.Vector3(0,0.02,3));//3
	
	silla11.vertices.push(new THREE.Vector3(0.75,0.9,3.75));//0
	silla11.vertices.push(new THREE.Vector3(-0.25,0.9,4.75));//1
	silla11.vertices.push(new THREE.Vector3(-1,0.9,4));//2 
	silla11.vertices.push(new THREE.Vector3(0,0.9,3));//3


	silla11.faces.push( new THREE.Face3( 0, 1, 2 ) );
	silla11.faces.push( new THREE.Face3( 0, 3, 2 ) );
	silla11.faces.push( new THREE.Face3( 0, 2, 1 ) );
	silla11.faces.push( new THREE.Face3( 0, 2, 3 ) );
	silla11.faces.push( new THREE.Face3( 4, 5, 6 ) );
	silla11.faces.push( new THREE.Face3( 4, 7, 6 ) );
	silla11.faces.push( new THREE.Face3( 4, 6, 5 ) );
	silla11.faces.push( new THREE.Face3( 4, 6, 7 ) );
	silla11.faces.push( new THREE.Face3( 0, 4, 1 ) );
	silla11.faces.push( new THREE.Face3( 1, 5, 4 ) );
	silla11.faces.push( new THREE.Face3( 0, 3, 7 ) );
	silla11.faces.push( new THREE.Face3( 0, 4, 7 ) );
	silla11.faces.push( new THREE.Face3( 1, 2, 6 ) );
	silla11.faces.push( new THREE.Face3( 1, 5, 6 ) );
	silla11.faces.push( new THREE.Face3( 0, 1, 4 ) );
	silla11.faces.push( new THREE.Face3( 1, 4, 5 ) );
	silla11.faces.push( new THREE.Face3( 0, 7, 3 ) );
	silla11.faces.push( new THREE.Face3( 0, 7, 4 ) );
	silla11.faces.push( new THREE.Face3( 1, 6, 2 ) );
	silla11.faces.push( new THREE.Face3( 1, 6, 5 ) );
	

	
	silla2.vertices.push(new THREE.Vector3(2.5,0.02,-2.5));//0
	silla2.vertices.push(new THREE.Vector3(1.5,0.02,-1.5));//1
	silla2.vertices.push(new THREE.Vector3(1.25,0.02,-1.75));//2 
	silla2.vertices.push(new THREE.Vector3(2.25,0.02,-2.75));//3
	
	silla2.vertices.push(new THREE.Vector3(2.5,1.4,-2.5));//0
	silla2.vertices.push(new THREE.Vector3(1.5,1.4,-1.5));//1
	silla2.vertices.push(new THREE.Vector3(1.25,1.4,-1.75));//2 
	silla2.vertices.push(new THREE.Vector3(2.25,1.4,-2.75));//3

    silla2.faces.push( new THREE.Face3( 0, 1, 2 ) );
	silla2.faces.push( new THREE.Face3( 0, 3, 2 ) );
	silla2.faces.push( new THREE.Face3( 0, 2, 1 ) );
	silla2.faces.push( new THREE.Face3( 0, 2, 3 ) );
	silla2.faces.push( new THREE.Face3( 4, 5, 6 ) );
	silla2.faces.push( new THREE.Face3( 4, 7, 6 ) );
	silla2.faces.push( new THREE.Face3( 4, 6, 5 ) );
	silla2.faces.push( new THREE.Face3( 4, 6, 7 ) );
	silla2.faces.push( new THREE.Face3( 0, 4, 1 ) );
	silla2.faces.push( new THREE.Face3( 1, 5, 4 ) );
	silla2.faces.push( new THREE.Face3( 0, 3, 7 ) );
	silla2.faces.push( new THREE.Face3( 0, 4, 7 ) );
	silla2.faces.push( new THREE.Face3( 1, 2, 6 ) );
	silla2.faces.push( new THREE.Face3( 1, 5, 6 ) );
	silla2.faces.push( new THREE.Face3( 0, 1, 4 ) );
	silla2.faces.push( new THREE.Face3( 1, 4, 5 ) );
	silla2.faces.push( new THREE.Face3( 0, 7, 3 ) );
	silla2.faces.push( new THREE.Face3( 0, 7, 4 ) );
	silla2.faces.push( new THREE.Face3( 1, 6, 2 ) );
	silla2.faces.push( new THREE.Face3( 1, 6, 5 ) );


	
	silla22.vertices.push(new THREE.Vector3(2.25,0.02,-2.75));//0
	silla22.vertices.push(new THREE.Vector3(1.25,0.02,-1.75));//1
	silla22.vertices.push(new THREE.Vector3(0.75,0.02,-2.25));//2 
	silla22.vertices.push(new THREE.Vector3(1.5,0.02,-3.25));//3
	
	silla22.vertices.push(new THREE.Vector3(2.25,0.9,-2.75));//0
	silla22.vertices.push(new THREE.Vector3(1.25,0.9,-1.75));//1
	silla22.vertices.push(new THREE.Vector3(0.75,0.9,-2.25));//2 
	silla22.vertices.push(new THREE.Vector3(1.5,0.9,-3.25));//3
	
	
	silla22.faces.push( new THREE.Face3( 0, 1, 2 ) );
	silla22.faces.push( new THREE.Face3( 0, 3, 2 ) );
	silla22.faces.push( new THREE.Face3( 0, 2, 1 ) );
	silla22.faces.push( new THREE.Face3( 0, 2, 3 ) );
	silla22.faces.push( new THREE.Face3( 4, 5, 6 ) );
	silla22.faces.push( new THREE.Face3( 4, 7, 6 ) );
	silla22.faces.push( new THREE.Face3( 4, 6, 5 ) );
	silla22.faces.push( new THREE.Face3( 4, 6, 7 ) );
	silla22.faces.push( new THREE.Face3( 0, 4, 1 ) );
	silla22.faces.push( new THREE.Face3( 1, 5, 4 ) );
	silla22.faces.push( new THREE.Face3( 0, 3, 7 ) );
	silla22.faces.push( new THREE.Face3( 0, 4, 7 ) );
	silla22.faces.push( new THREE.Face3( 1, 2, 6 ) );
	silla22.faces.push( new THREE.Face3( 1, 5, 6 ) );
	silla22.faces.push( new THREE.Face3( 0, 1, 4 ) );
	silla22.faces.push( new THREE.Face3( 1, 4, 5 ) );
	silla22.faces.push( new THREE.Face3( 0, 7, 3 ) );
	silla22.faces.push( new THREE.Face3( 0, 7, 4 ) );
	silla22.faces.push( new THREE.Face3( 1, 6, 2 ) );
	silla22.faces.push( new THREE.Face3( 1, 6, 5 ) );

	
	
	//-----------------
	



	var colorpared=new THREE.MeshBasicMaterial({color: 0x82E0AA });
	var paredf= new THREE.Mesh (pared,colorpared);
	var colorpiso=new THREE.MeshBasicMaterial({color: 0x60A0A8});
	var pisof=new THREE.Mesh (piso,colorpiso);
	var colormesa=new THREE.MeshBasicMaterial({color: 0x9F771C });
	var mesaf=new THREE.Mesh (mesa,colormesa);
	var mesa2f=new THREE.Mesh(mesa2,colormesa);
	var colorcpu=new THREE.MeshBasicMaterial({color: 0x24262A });
	var cpuf=new THREE.Mesh (cpu,colorcpu);
	var colormonitor=new THREE.MeshBasicMaterial({color: 0x9CA0A9});
	var monitorf=new THREE.Mesh(monitor, colormonitor);
	var colorpantalla=new THREE.MeshBasicMaterial({color: 0x080808});
	var pantallaf=new THREE.Mesh(pantalla1, colorpantalla);

	
	
	var silla1f=new THREE.Mesh(silla1,colorpantalla);
	var silla11f=new THREE.Mesh(silla11,colorpantalla);
	var silla2f=new THREE.Mesh(silla2,colorpantalla);
	var silla22f=new THREE.Mesh(silla22,colorpantalla);
	
	// ESCENA

	//agregamos escenas
	scene = new THREE.Scene();
	scene.add( light );
	scene.add( ambientLight );
	
	scene.add(silla1f);
	scene.add(silla11f);
	scene.add(silla2f);
	scene.add(silla22f);
	
	scene.add(pantallaf);
	scene.add(monitorf);
	scene.add(cpuf);
	scene.add(mesa2f);
	scene.add(mesaf);
	scene.add(paredf);
	scene.add(pisof);
	

}

function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}

try {
	init();
	animate();
} catch(e) {
	var errorReport = "Tienes un error, no se puede dibujar el lienzao. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}
