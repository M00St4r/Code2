"use strict";
var FirstFudge;
(function (FirstFudge) {
    var f = FudgeCore;
    console.log(f);
    window.addEventListener("load", start);
    const node = new f.Node("Node");
    let Viewport;
    let direction = false;
    let offset = 0;
    function start() {
        const canvas = document.querySelector("canvas");
        console.log(canvas);
        const mesh = new f.MeshCube("Cube");
        console.log(mesh);
        const camera = new f.ComponentCamera();
        console.log(camera);
        const cmpMesh = new f.ComponentMesh(mesh);
        node.addComponent(cmpMesh);
        const material = new f.Material("Material", f.ShaderLit);
        const cmpMaterial = new f.ComponentMaterial(material);
        cmpMaterial.clrPrimary.set(1, 0.4, 0.7, 1);
        node.addComponent(cmpMaterial);
        camera.mtxPivot.translateZ(5);
        camera.mtxPivot.rotateY(180);
        const cpmTransform = new f.ComponentTransform();
        node.addComponent(cpmTransform);
        node.mtxLocal.translateX(0);
        console.log(node);
        Viewport = new f.Viewport;
        Viewport.initialize("viewport", node, camera, canvas);
        console.log(Viewport);
        f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
        f.Loop.start();
        f.Time.game.setScale(0.2);
    }
    let pos = 0.001;
    function update() {
        const frameTimeInMilliSeconds = f.Loop.timeFrameGame;
        const frameTimeInSeconds = (frameTimeInMilliSeconds / 1000);
        const degrees = 360 * frameTimeInSeconds;
        //let pos: number = 2 * frameTimeInSeconds;
        node.mtxLocal.rotateY(degrees);
        node.mtxLocal.translateX(pos, false);
        if (node.mtxLocal.translation.x > 2) {
            pos = -pos;
        }
        else if (node.mtxLocal.translation.x < -2) {
            pos = -pos;
        }
        Viewport.draw();
    }
})(FirstFudge || (FirstFudge = {}));
//# sourceMappingURL=main.js.map