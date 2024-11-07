"use strict";
var SolarSystem;
(function (SolarSystem) {
    SolarSystem.f = FudgeCore;
    console.log(SolarSystem.f);
    window.addEventListener("load", start);
    const root = new SolarSystem.f.Node("Root");
    const sun = new SolarSystem.Body("sun", 1, "yellow");
    let Viewport;
    function start() {
        const canvas = document.querySelector("canvas");
        console.log(canvas);
        const camera = new SolarSystem.f.ComponentCamera();
        console.log(camera);
        camera.mtxPivot.translateZ(10);
        camera.mtxPivot.translateY(4);
        // const cpmTransform: f.ComponentTransform = new f.ComponentTransform();
        // nodeCar.addComponent(cpmTransform);
        // nodeCar.mtxLocal.translateX(0);
        root.addChild(sun);
        Viewport = new SolarSystem.f.Viewport;
        Viewport.initialize("viewport", root, camera, canvas);
        console.log(Viewport);
        SolarSystem.f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
        SolarSystem.f.Loop.start();
        //f.Time.game.setScale(0.2);
    }
    //let pos = 0.001;
    function update() {
        const frameTimeInMilliSeconds = SolarSystem.f.Loop.timeFrameGame;
        const frameTimeInSeconds = (frameTimeInMilliSeconds / 1000);
        Viewport.draw();
    }
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=main.js.map