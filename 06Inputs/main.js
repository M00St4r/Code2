"use strict";
var FirstFudge;
(function (FirstFudge) {
    var f = FudgeCore;
    console.log(f);
    window.addEventListener("load", start);
    const nodeCar = new f.Node("Node");
    const root = new f.Node("Root");
    let Viewport;
    let direction = false;
    let offset = 0;
    function start() {
        const canvas = document.querySelector("canvas");
        console.log(canvas);
        const mesh = new f.MeshCube("Cube");
        console.log(mesh);
        //-----------------------------------------------------------------------------------
        const nodeGround = new f.Node("Ground");
        const ground = new f.MeshQuad("Ground");
        const cmpGround = new f.ComponentMesh(ground);
        cmpGround.mtxPivot.rotateX(-90);
        cmpGround.mtxPivot.scaleX(100);
        cmpGround.mtxPivot.scaleY(100);
        nodeGround.addComponent(cmpGround);
        const gMaterial = new f.Material("Material", f.ShaderLitTextured);
        const cmpGmaterial = new f.ComponentMaterial(gMaterial);
        cmpGmaterial.clrPrimary.set(.5, .5, .5, 1);
        nodeGround.addComponent(cmpGmaterial);
        //-----------------------------------------------------------------------------------
        const camera = new f.ComponentCamera();
        console.log(camera);
        const cmpMesh = new f.ComponentMesh(mesh);
        cmpMesh.mtxPivot.scaleZ(2);
        cmpMesh.mtxPivot.translateY(0.5, true);
        nodeCar.addComponent(cmpMesh);
        const material = new f.Material("Material", f.ShaderLitTextured);
        const cmpMaterial = new f.ComponentMaterial(material);
        //cmpMaterial.clrPrimary.set(1, 0.4, 0.7, 1);
        nodeCar.addComponent(cmpMaterial);
        camera.mtxPivot.translateZ(10);
        camera.mtxPivot.translateY(4);
        // camera.mtxPivot.rotateY(180);
        // camera.mtxPivot.rotateX(30);
        const cpmTransform = new f.ComponentTransform();
        nodeCar.addComponent(cpmTransform);
        nodeCar.mtxLocal.translateX(0);
        root.addChild(nodeCar);
        root.addChild(nodeGround);
        Viewport = new f.Viewport;
        Viewport.initialize("viewport", root, camera, canvas);
        console.log(Viewport);
        f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
        f.Loop.start();
        //f.Time.game.setScale(0.2);
    }
    //let pos = 0.001;
    function update() {
        const tSpeed = 5 / 1;
        const rSpeed = 360 / 1;
        const sSpeed = 0.001 / 1;
        const frameTimeInMilliSeconds = f.Loop.timeFrameGame;
        const frameTimeInSeconds = (frameTimeInMilliSeconds / 1000);
        Viewport.camera.mtxPivot.lookAt(nodeCar.mtxWorld.translation, new f.Vector3(0, 1, 0));
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
})(FirstFudge || (FirstFudge = {}));
//# sourceMappingURL=main.js.map