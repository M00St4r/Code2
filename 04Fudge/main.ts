namespace Fudge01 {

    import chris = FudgeCore

    window.addEventListener("load", start);

    const node: chris.Node = new chris.Node("node");
    let viewport: chris.Viewport;

    chris.Loop.addEventListener(chris.EVENT.LOOP_FRAME, movecube);

    function start(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;

        const mesh: chris.Mesh = new chris.MeshCube("cube");

        const cam: chris.ComponentCamera = new chris.ComponentCamera();

        let bgClr: chris.Color = new chris.Color(0, 0, 0, 1);

        cam.clrBackground = bgClr;

        //add ligth
        let LigthClr: chris.Color = new chris.Color(1, 1, 1, 1);

        let light: chris.LightDirectional = new chris.LightDirectional(LigthClr, 1);

        let lightcomp: chris.ComponentLight = new chris.ComponentLight(light);
        lightcomp.mtxPivot.rotate(new chris.Vector3(120, 0, 0));

        //material
        //let texture: chris.TextureImage = new chris.TextureImage("textures/dirt.jpg");
        let material: chris.Material = new chris.Material("cubMat", chris.ShaderFlatTextured);
        let cmpMat: chris.ComponentMaterial = new chris.ComponentMaterial(material);

        let cube: chris.ComponentMesh = new chris.ComponentMesh(mesh);


        cam.mtxPivot.translateZ(5);
        cam.mtxPivot.rotateY(180);
        
        node.addComponent(cube);
        node.addComponent(cmpMat);
        node.addComponent(lightcomp);
        node.addComponent(cam);

        let cpmTransform: chris.ComponentTransform = new chris.ComponentTransform();
        node.addComponent(cpmTransform);

        node.getComponent(chris.ComponentMesh).mtxPivot.rotate(new chris.Vector3(45, 45, 0));

        viewport = new chris.Viewport();
        viewport.initialize("Viewport", node, cam, canvas);

        chris.Loop.start();
        chris.Time.game.setScale(1);

    }

    function movecube(): void {
        let deltaTime = chris.Loop.timeFrameGame;
        node.mtxLocal.rotateY(360*(deltaTime/1000));
        viewport.draw();
    }

}