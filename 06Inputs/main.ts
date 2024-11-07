namespace FirstFudge {

    import f = FudgeCore;
    console.log(f);

    window.addEventListener("load", start);

    const nodeCar: f.Node = new f.Node("Node");

    const root: f.Node = new f.Node("Root");

    let Viewport: f.Viewport;

    let direction: boolean = false;
    let offset: number = 0;

    function start(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        console.log(canvas);

        const mesh: f.Mesh = new f.MeshCube("Cube");
        console.log(mesh);

        //-----------------------------------------------------------------------------------

        const nodeGround = new f.Node("Ground");

        const ground: f.Mesh = new f.MeshQuad("Ground");

        const cmpGround: f.ComponentMesh = new f.ComponentMesh(ground);

        cmpGround.mtxPivot.rotateX(-90);
        cmpGround.mtxPivot.scaleX(100);
        cmpGround.mtxPivot.scaleY(100);

        nodeGround.addComponent(cmpGround);

        const gMaterial: f.Material = new f.Material("Material", f.ShaderLitTextured);
        const cmpGmaterial: f.ComponentMaterial = new f.ComponentMaterial(gMaterial);
        cmpGmaterial.clrPrimary.set(.5, .5, .5, 1);
        nodeGround.addComponent(cmpGmaterial);

        //-----------------------------------------------------------------------------------

        const camera: f.ComponentCamera = new f.ComponentCamera();
        console.log(camera);

        const cmpMesh: f.ComponentMesh = new f.ComponentMesh(mesh);
        cmpMesh.mtxPivot.scaleZ(2);
        cmpMesh.mtxPivot.translateY(0.5, true);
        nodeCar.addComponent(cmpMesh);

        const material: f.Material = new f.Material("Material", f.ShaderLitTextured);
        const cmpMaterial: f.ComponentMaterial = new f.ComponentMaterial(material);
        //cmpMaterial.clrPrimary.set(1, 0.4, 0.7, 1);
        nodeCar.addComponent(cmpMaterial);

        camera.mtxPivot.translateZ(10);
        camera.mtxPivot.translateY(4);
        // camera.mtxPivot.rotateY(180);
        // camera.mtxPivot.rotateX(30);

        const cpmTransform: f.ComponentTransform = new f.ComponentTransform();
        nodeCar.addComponent(cpmTransform);
        nodeCar.mtxLocal.translateX(0);

        root.addChild(nodeCar);
        root.addChild(nodeGround);

        Viewport = new f.Viewport;
        Viewport.initialize("viewport", root, camera, canvas);
        console.log(Viewport);

        f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
        f.Loop.start();
        //f.Time.game.setScale(0.2);
    }

    //let pos = 0.001;

    function update(): void {

        const tSpeed: number = 5 / 1;
        const rSpeed: number = 360 / 1;
        const sSpeed: number = 0.001 / 1;

        const frameTimeInMilliSeconds: number = f.Loop.timeFrameGame;
        const frameTimeInSeconds: number = (frameTimeInMilliSeconds / 1000);

        const up: f.Vector3 = f.Vector3.Y();

        Viewport.camera.mtxPivot.lookAt(nodeCar.mtxWorld.translation, up);

        f.Recycler.store(up);
        // Viewport.camera.mtxPivot.rotateX(-Viewport.camera.mtxPivot.rotation.x + 30, false);
        // Viewport.camera.mtxPivot.rotateZ(-Viewport.camera.mtxPivot.rotation.z, false);

        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.W])) {
            nodeCar.mtxLocal.translateZ(tSpeed * frameTimeInSeconds);
        }
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.S])) {
            nodeCar.mtxLocal.translateZ(-tSpeed * frameTimeInSeconds);
        }
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.A])) {
            nodeCar.mtxLocal.rotateY(rSpeed * frameTimeInSeconds);
        }
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.D])) {
            nodeCar.mtxLocal.rotateY(-rSpeed * frameTimeInSeconds);
        }

        Viewport.draw();
    }
}