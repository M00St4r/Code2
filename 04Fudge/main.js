"use strict";
var Fudge01;
(function (Fudge01) {
    var chris = FudgeCore;
    window.addEventListener("load", start);
    const node = new chris.Node("node");
    let viewport;
    chris.Loop.addEventListener("loopFrame" /* chris.EVENT.LOOP_FRAME */, movecube);
    function start() {
        const canvas = document.querySelector("canvas");
        const mesh = new chris.MeshCube("cube");
        const cam = new chris.ComponentCamera();
        let bgClr = new chris.Color(0, 0, 0, 1);
        cam.clrBackground = bgClr;
        //add ligth
        let LigthClr = new chris.Color(1, 1, 1, 1);
        let light = new chris.LightDirectional(LigthClr, 1);
        let lightcomp = new chris.ComponentLight(light);
        lightcomp.mtxPivot.rotate(new chris.Vector3(120, 0, 0));
        //material
        //let texture: chris.TextureImage = new chris.TextureImage("textures/dirt.jpg");
        let material = new chris.Material("cubMat", chris.ShaderFlatTextured);
        let cmpMat = new chris.ComponentMaterial(material);
        let cube = new chris.ComponentMesh(mesh);
        cam.mtxPivot.translateZ(5);
        cam.mtxPivot.rotateY(180);
        node.addComponent(cube);
        node.addComponent(cmpMat);
        node.addComponent(lightcomp);
        node.addComponent(cam);
        let cpmTransform = new chris.ComponentTransform();
        node.addComponent(cpmTransform);
        node.getComponent(chris.ComponentMesh).mtxPivot.rotate(new chris.Vector3(45, 45, 0));
        viewport = new chris.Viewport();
        viewport.initialize("Viewport", node, cam, canvas);
        chris.Loop.start();
        chris.Time.game.setScale(1);
    }
    function movecube() {
        let deltaTime = chris.Loop.timeFrameGame;
        node.mtxLocal.rotateY(360 * (deltaTime / 1000));
        viewport.draw();
    }
})(Fudge01 || (Fudge01 = {}));
//# sourceMappingURL=main.js.map