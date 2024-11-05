"use strict";
var FirstFudge;
(function (FirstFudge) {
    var f = FudgeCore;
    console.log(f);
    window.addEventListener("load", start);
    const node = new f.Node("Node");
    let globalViewport;
    f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, moveCube);
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
        const viewport = new f.Viewport();
        viewport.initialize("viewport", node, camera, canvas);
        viewport.draw();
        globalViewport = viewport;
        console.log(viewport);
        f.Loop.start();
        f.Time.game.setScale(0.2);
    }
    function moveCube() {
        const frameTimeInMiliSeconds = f.Loop.timeFrameGame;
        const frameTimeInSeconds = (frameTimeInMiliSeconds / 1000);
        const degrees = 360 * frameTimeInSeconds;
        const pos = 2 * frameTimeInSeconds;
        //node.mtxLocal.rotateY(degrees,false);
        if (direction == false) {
            node.mtxLocal.translateX(-pos);
            offset -= pos;
            if (offset <= -2) {
                direction = true;
            }
        }
        else {
            node.mtxLocal.translateX(+pos);
            offset += pos;
            if (offset >= 2) {
                direction = false;
            }
        }
        globalViewport.draw();
    }
})(FirstFudge || (FirstFudge = {}));
//# sourceMappingURL=main.js.map