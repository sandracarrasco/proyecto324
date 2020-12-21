
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
		var cpu= new THREE.Geometry();
		var cpu1=new THREE.Geometry();
		
		var cpu2=new THREE.Geometry();
		var monitor=new THREE.Geometry();
		var monitor2=new THREE.Geometry();
		var monitor3=new THREE.Geometry();
		var pantalla1=new THREE.Geometry();
		var pantalla2=new THREE.Geometry();
		var pantalla3=new THREE.Geometry();
		
	
//-------------------------------------------------------------------------------------------------------------



	
	//MESA
	mesa.vertices.push(new THREE.Vector3( 5,0.02, 0));//0 
	mesa.vertices.push(new THREE.Vector3( 0, 0.02,5));//1  
	mesa.vertices.push(new THREE.Vector3(-1, 0.02,4));//2
	mesa.vertices.push(new THREE.Vector3( 4, 0.02,-1 ));//3

	mesa.vertices.push(new THREE.Vector3( 5,0.75, 0));//4 
	mesa.vertices.push(new THREE.Vector3( 0, 0.75,5));//5  
	mesa.vertices.push(new THREE.Vector3(-1, 0.75,4));//6
	mesa.vertices.push(new THREE.Vector3( 4, 0.75,-1 ));//7	


    mesa.faces.push( new THREE.Face3( 0, 1, 2 ) );
	mesa.faces.push( new THREE.Face3( 0, 3, 2 ) );
	mesa.faces.push( new THREE.Face3( 0, 2, 1 ) );
	mesa.faces.push( new THREE.Face3( 0, 2, 3 ) );

	mesa.faces.push( new THREE.Face3( 4, 5, 6 ) );
	mesa.faces.push( new THREE.Face3( 4, 7, 6 ) );
	mesa.faces.push( new THREE.Face3( 4, 6, 5 ) );
	mesa.faces.push( new THREE.Face3( 4, 6, 7 ) );

	mesa.faces.push( new THREE.Face3( 0, 4, 1 ) );
	mesa.faces.push( new THREE.Face3( 1, 5, 4 ) );
	mesa.faces.push( new THREE.Face3( 0, 3, 7 ) );
	mesa.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	mesa.faces.push( new THREE.Face3( 1, 2, 6 ) );
	mesa.faces.push( new THREE.Face3( 1, 5, 6 ) );

	mesa.faces.push( new THREE.Face3( 0, 1, 4 ) );
	mesa.faces.push( new THREE.Face3( 1, 4, 5 ) );
	mesa.faces.push( new THREE.Face3( 0, 7, 3 ) );
	mesa.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	mesa.faces.push( new THREE.Face3( 1, 6, 2 ) );
	mesa.faces.push( new THREE.Face3( 1, 6, 5 ) );

	

	//PC
	cpu.vertices.push(new THREE.Vector3(4.5,0.03,0.5));//0
	cpu.vertices.push(new THREE.Vector3(3.5,0.03,1));//1
	cpu.vertices.push(new THREE.Vector3(3,0.03,0.75));//2
	cpu.vertices.push(new THREE.Vector3(4.25,0.03,0));//3
	
	cpu.vertices.push(new THREE.Vector3(4.5,0.65,0.5));//0
	cpu.vertices.push(new THREE.Vector3(3.5,0.65,1));//1
	cpu.vertices.push(new THREE.Vector3(3,0.65,0.75));//2
	cpu.vertices.push(new THREE.Vector3(4.25,0.65,0));//3

	//PC
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

	//PC1
	cpu1.vertices.push(new THREE.Vector3(3,0.03,2));//0
	cpu1.vertices.push(new THREE.Vector3(2,0.03,2.5));//1
	cpu1.vertices.push(new THREE.Vector3(1.5,0.03,2.25));//2
	cpu1.vertices.push(new THREE.Vector3(2.75,0.03,1.5));//3
	
	cpu1.vertices.push(new THREE.Vector3(3,0.65,2));//0
	cpu1.vertices.push(new THREE.Vector3(2,0.65,2.5));//1
	cpu1.vertices.push(new THREE.Vector3(1.5,0.65,2.25));//2
	cpu1.vertices.push(new THREE.Vector3(2.75,0.65,1.5));//3


	//PC1
	cpu1.faces.push( new THREE.Face3( 0, 1, 2 ) );
	cpu1.faces.push( new THREE.Face3( 0, 3, 2 ) );
	cpu1.faces.push( new THREE.Face3( 0, 2, 1 ) );
	cpu1.faces.push( new THREE.Face3( 0, 2, 3 ) );
	cpu1.faces.push( new THREE.Face3( 4, 5, 6 ) );
	cpu1.faces.push( new THREE.Face3( 4, 7, 6 ) );
	cpu1.faces.push( new THREE.Face3( 4, 6, 5 ) );
	cpu1.faces.push( new THREE.Face3( 4, 6, 7 ) );

	cpu1.faces.push( new THREE.Face3( 0, 4, 1 ) );
	cpu1.faces.push( new THREE.Face3( 1, 5, 4 ) );
	cpu1.faces.push( new THREE.Face3( 0, 3, 7 ) );
	cpu1.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	cpu1.faces.push( new THREE.Face3( 1, 2, 6 ) );
	cpu1.faces.push( new THREE.Face3( 1, 5, 6 ) );
	
	cpu1.faces.push( new THREE.Face3( 0, 1, 4 ) );
	cpu1.faces.push( new THREE.Face3( 1, 4, 5 ) );
	cpu1.faces.push( new THREE.Face3( 0, 7, 3 ) );
	cpu1.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	cpu1.faces.push( new THREE.Face3( 1, 6, 2 ) );
	cpu1.faces.push( new THREE.Face3( 1, 6, 5 ) );
//PC2
	
	cpu2.vertices.push(new THREE.Vector3(1.5,0.03,3.5));//0
	cpu2.vertices.push(new THREE.Vector3(0.5,0.03,4));//1
	cpu2.vertices.push(new THREE.Vector3(0,0.03,3.75));//2
	cpu2.vertices.push(new THREE.Vector3(1.25,0.03,3));//3
	
	cpu2.vertices.push(new THREE.Vector3(1.5,0.65,3.5));//0
	cpu2.vertices.push(new THREE.Vector3(0.5,0.65,4));//1
	cpu2.vertices.push(new THREE.Vector3(0,0.65,3.75));//2
	cpu2.vertices.push(new THREE.Vector3(1.25,0.65,3));//3

   
  //PC2
	cpu2.faces.push( new THREE.Face3( 0, 1, 2 ) );
	cpu2.faces.push( new THREE.Face3( 0, 3, 2 ) );
	cpu2.faces.push( new THREE.Face3( 0, 2, 1 ) );
	cpu2.faces.push( new THREE.Face3( 0, 2, 3 ) );
	cpu2.faces.push( new THREE.Face3( 4, 5, 6 ) );
	cpu2.faces.push( new THREE.Face3( 4, 7, 6 ) );
	cpu2.faces.push( new THREE.Face3( 4, 6, 5 ) );
	cpu2.faces.push( new THREE.Face3( 4, 6, 7 ) );

	cpu2.faces.push( new THREE.Face3( 0, 4, 1 ) );
	cpu2.faces.push( new THREE.Face3( 1, 5, 4 ) );
	cpu2.faces.push( new THREE.Face3( 0, 3, 7 ) );
	cpu2.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	cpu2.faces.push( new THREE.Face3( 1, 2, 6 ) );
	cpu2.faces.push( new THREE.Face3( 1, 5, 6 ) );
	
	cpu2.faces.push( new THREE.Face3( 0, 1, 4 ) );
	cpu2.faces.push( new THREE.Face3( 1, 4, 5 ) );
	cpu2.faces.push( new THREE.Face3( 0, 7, 3 ) );
	cpu2.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	cpu2.faces.push( new THREE.Face3( 1, 6, 2 ) );
	cpu2.faces.push( new THREE.Face3( 1, 6, 5 ) );

	//monitor
	monitor.vertices.push(new THREE.Vector3(4,0.80,0.5));//0
	monitor.vertices.push(new THREE.Vector3(3.25,0.80,1.5));//1
	monitor.vertices.push(new THREE.Vector3(2.75,0.80,1));//2 
	monitor.vertices.push(new THREE.Vector3(3.55,0.80,0));//3
	monitor.vertices.push(new THREE.Vector3(4,1.5,0.5));//0
	monitor.vertices.push(new THREE.Vector3(3.25,1.5,1.5));//1
	monitor.vertices.push(new THREE.Vector3(2.75,1.5,1));//2
	monitor.vertices.push(new THREE.Vector3(3.55,1.5,0));//3

	monitor.faces.push( new THREE.Face3( 0, 1, 3 ) );
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
	

	
	monitor2.vertices.push(new THREE.Vector3(2.5,0.80,2));//0
	monitor2.vertices.push(new THREE.Vector3(1.75,0.80,3));//1
	monitor2.vertices.push(new THREE.Vector3(1.25,0.80,2.5));//2
	monitor2.vertices.push(new THREE.Vector3(2.05,0.80,1.5));//3
	monitor2.vertices.push(new THREE.Vector3(2.5,1.5,2));//0
	monitor2.vertices.push(new THREE.Vector3(1.75,1.5,3));//1
	monitor2.vertices.push(new THREE.Vector3(1.25,1.5,2.5));//2
	monitor2.vertices.push(new THREE.Vector3(2.05,1.5,1.5));//3


    monitor2.faces.push( new THREE.Face3( 0, 1, 2 ) );
	monitor2.faces.push( new THREE.Face3( 0, 3, 2 ) );
	monitor2.faces.push( new THREE.Face3( 0, 2, 1 ) );
	monitor2.faces.push( new THREE.Face3( 0, 2, 3 ) );
	monitor2.faces.push( new THREE.Face3( 4, 5, 6 ) );
	monitor2.faces.push( new THREE.Face3( 4, 7, 6 ) );
	monitor2.faces.push( new THREE.Face3( 4, 6, 5 ) );
	monitor2.faces.push( new THREE.Face3( 4, 6, 7 ) );

	monitor2.faces.push( new THREE.Face3( 0, 4, 1 ) );
	monitor2.faces.push( new THREE.Face3( 1, 5, 4 ) );
	monitor2.faces.push( new THREE.Face3( 0, 3, 7 ) );
	monitor2.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	monitor2.faces.push( new THREE.Face3( 1, 2, 6 ) );
	monitor2.faces.push( new THREE.Face3( 1, 5, 6 ) );
	monitor2.faces.push( new THREE.Face3( 0, 1, 4 ) );
	monitor2.faces.push( new THREE.Face3( 1, 4, 5 ) );
	monitor2.faces.push( new THREE.Face3( 0, 7, 3 ) );
	monitor2.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	monitor2.faces.push( new THREE.Face3( 1, 6, 2 ) );
	monitor2.faces.push( new THREE.Face3( 1, 6, 5 ) );


	
	monitor3.vertices.push(new THREE.Vector3(1,0.80,3.5));//0
	monitor3.vertices.push(new THREE.Vector3(0.25,0.80,4.5));//1
	monitor3.vertices.push(new THREE.Vector3(-0.25,0.80,4));//2
	monitor3.vertices.push(new THREE.Vector3(0.55,0.80,3));//3
	monitor3.vertices.push(new THREE.Vector3(1,1.5,3.5));//0
	monitor3.vertices.push(new THREE.Vector3(0.25,1.5,4.5));//1
	monitor3.vertices.push(new THREE.Vector3(-0.25,1.5,4));//2
	monitor3.vertices.push(new THREE.Vector3(0.55,1.5,3));//3	


	monitor3.faces.push( new THREE.Face3( 0, 1, 2 ) );
	monitor3.faces.push( new THREE.Face3( 0, 3, 2 ) );
	monitor3.faces.push( new THREE.Face3( 0, 2, 1 ) );
	monitor3.faces.push( new THREE.Face3( 0, 2, 3 ) );
	monitor3.faces.push( new THREE.Face3( 4, 5, 6 ) );
	monitor3.faces.push( new THREE.Face3( 4, 7, 6 ) );
	monitor3.faces.push( new THREE.Face3( 4, 6, 5 ) );
	monitor3.faces.push( new THREE.Face3( 4, 6, 7 ) );

	monitor3.faces.push( new THREE.Face3( 0, 4, 1 ) );
	monitor3.faces.push( new THREE.Face3( 1, 5, 4 ) );
	monitor3.faces.push( new THREE.Face3( 0, 3, 7 ) );
	monitor3.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	monitor3.faces.push( new THREE.Face3( 1, 2, 6 ) );
	monitor3.faces.push( new THREE.Face3( 1, 5, 6 ) );
	monitor3.faces.push( new THREE.Face3( 0, 1, 4 ) );
	monitor3.faces.push( new THREE.Face3( 1, 4, 5 ) );
	monitor3.faces.push( new THREE.Face3( 0, 7, 3 ) );
	monitor3.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	monitor3.faces.push( new THREE.Face3( 1, 6, 2 ) );
	monitor3.faces.push( new THREE.Face3( 1, 6, 5 ) );

//PANTALLAS

	pantalla1.vertices.push(new THREE.Vector3(4,0.80,0.5));//0
	pantalla1.vertices.push(new THREE.Vector3(3.25,0.80,1.5));//1
	pantalla1.vertices.push(new THREE.Vector3(2.75,0.80,1));//2 
	pantalla1.vertices.push(new THREE.Vector3(3.55,0.80,0));//3
	pantalla1.vertices.push(new THREE.Vector3(4,1.5,0.5));//0
	pantalla1.vertices.push(new THREE.Vector3(3.25,1.5,1.5));//1
	pantalla1.vertices.push(new THREE.Vector3(2.75,1.5,1));//2
	pantalla1.vertices.push(new THREE.Vector3(3.55,1.5	,0));//3



	pantalla1.faces.push(new THREE.Face3( 2, 3, 6));
	pantalla1.faces.push(new THREE.Face3( 3, 7, 6));
	pantalla1.faces.push(new THREE.Face3(2, 6, 3));
	pantalla1.faces.push(new THREE.Face3( 3, 6, 7));
	
	
	pantalla2.vertices.push(new THREE.Vector3(2.5,0.80,2));//0
	pantalla2.vertices.push(new THREE.Vector3(1.75,0.80,3));//1
	pantalla2.vertices.push(new THREE.Vector3(1.25,0.80,2.5));//2
	pantalla2.vertices.push(new THREE.Vector3(2.05,0.80,1.5));//3
	pantalla2.vertices.push(new THREE.Vector3(2.5,1.5,2));//0
	pantalla2.vertices.push(new THREE.Vector3(1.75,1.5,3));//1
	pantalla2.vertices.push(new THREE.Vector3(1.25,1.5,2.5));//2
	pantalla2.vertices.push(new THREE.Vector3(2.05,1.5,1.5));//3

	pantalla2.faces.push(new THREE.Face3( 2, 3, 6));
	pantalla2.faces.push(new THREE.Face3( 3, 7, 6));
	pantalla2.faces.push(new THREE.Face3(2, 6, 3));
	pantalla2.faces.push(new THREE.Face3( 3, 6, 7));
	
	pantalla3.vertices.push(new THREE.Vector3(1,0.80,3.5));//0
	pantalla3.vertices.push(new THREE.Vector3(0.25,0.80,4.5));//1
	pantalla3.vertices.push(new THREE.Vector3(-0.25,0.80,4));//2
	pantalla3.vertices.push(new THREE.Vector3(0.55,0.80,3));//3
	pantalla3.vertices.push(new THREE.Vector3(1,1.5,3.5));//0
	pantalla3.vertices.push(new THREE.Vector3(0.25,1.5,4.5));//1
	pantalla3.vertices.push(new THREE.Vector3(-0.25,1.5,4));//2
	pantalla3.vertices.push(new THREE.Vector3(0.55,1.5,3));//3
	
	
	pantalla3.faces.push(new THREE.Face3( 2, 3, 6));
	pantalla3.faces.push(new THREE.Face3( 3, 7, 6));
	pantalla3.faces.push(new THREE.Face3(2, 6, 3));
	pantalla3.faces.push(new THREE.Face3( 3, 6, 7));
	
	
	
	

	
   
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
	

	//atras
    pared.faces.push( new THREE.Face3( 0, 5, 6 ) );
	pared.faces.push( new THREE.Face3( 0, 3, 6 ) );
	pared.faces.push( new THREE.Face3( 0, 6, 5 ) );
	pared.faces.push( new THREE.Face3( 0, 6, 3 ) );


	//derecha
	pared.faces.push( new THREE.Face3( 0, 1, 2 ) );
	pared.faces.push( new THREE.Face3( 0, 2, 1 ) );
	pared.faces.push( new THREE.Face3( 0, 3, 2 ) );
	pared.faces.push( new THREE.Face3( 0, 2, 3 ) );

    //izquierda
    pared.faces.push( new THREE.Face3( 4, 5, 6 ) );
	pared.faces.push( new THREE.Face3( 4, 7, 6 ) );
	pared.faces.push( new THREE.Face3( 4, 6, 5 ) );
	pared.faces.push( new THREE.Face3( 4, 6, 7 ) );	



	piso.vertices.push(new THREE.Vector3(5.9,0.01,0.1));//0
	piso.vertices.push(new THREE.Vector3(0,0.01,5.9));//1
	piso.vertices.push(new THREE.Vector3(0,0.01,-5.9));//2
	piso.vertices.push(new THREE.Vector3(-5.9,0.01,0));//3
	
     //cara arriba
	piso.faces.push( new THREE.Face3( 0, 1, 3 ) );
	piso.faces.push( new THREE.Face3( 0, 2, 3 ) );

    //cara abajo
	piso.faces.push( new THREE.Face3( 0, 3, 1 ) );
	piso.faces.push( new THREE.Face3( 0, 3, 2 ) );



    
	var paredcol=new THREE.MeshBasicMaterial({color: 0xEC7063 });
	var paredf= new THREE.Mesh (pared,paredcol);
	var colorpiso=new THREE.MeshBasicMaterial({color: 0x24262A});
	var pisof=new THREE.Mesh (piso,colorpiso);
	var colormesa=new THREE.MeshBasicMaterial({color : 0xEDBB99 });
	var mesaf=new THREE.Mesh(mesa,colormesa);
	var colorcpu=new THREE.MeshBasicMaterial({color: 0x24262A});
	var cpuf=new THREE.Mesh(cpu, colorcpu);
	var cpu1f=new THREE.Mesh(cpu1, colorcpu);
	var cpu2f=new THREE.Mesh(cpu2, colorcpu);
	var colormonitor=new THREE.MeshBasicMaterial({color: 0x9CA0A9});
	var monitorf=new THREE.Mesh(monitor, colormonitor);
	var colormonitor2=new THREE.MeshBasicMaterial({color: 0x9CA0A9});
	var monitor2f=new THREE.Mesh(monitor2, colormonitor2);
	var colorpantalla=new THREE.MeshBasicMaterial({color: 0x080808});
	var pantallaf1=new THREE.Mesh(pantalla1, colorpantalla);
	var pantallaf2=new THREE.Mesh(pantalla2, colorpantalla);
	var pantallaf3=new THREE.Mesh(pantalla3, colorpantalla);
    var colormonitor3=new THREE.MeshBasicMaterial({color: 0x58D68D});
	var monitor3f=new THREE.Mesh(monitor3, colormonitor3);
	
	// SCENE
	scene = new THREE.Scene();
	scene.add( light );
	scene.add( ambientLight );
	
//-------------------------------------------------------------------------------------------------------------------	
	
	
	scene.add(pisof);
	scene.add(pantallaf2);	
	scene.add(pantallaf3);
	scene.add(cpu2f);
	scene.add(mesaf);
	scene.add(paredf);
	scene.add(pantallaf1);
	scene.add(monitorf);
	scene.add(monitor2f);
	scene.add(monitor3f);
	scene.add(cpuf);
	scene.add(cpu1f);
	
	
	
	
	

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
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}
