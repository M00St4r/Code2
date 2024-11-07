"use strict";
var SolarSystem;
(function (SolarSystem) {
    var f = FudgeCore;
    window.addEventListener("load", start);
    const root = new f.Node("Root");
    let sun;
    let earth;
    //let moon: Body;
    let Viewport;
    let nodeRotation = new f.Node("EarthRotatino");
    function start() {
        sun = new SolarSystem.Body("sun", 1, "yellow", 0, 0.1);
        earth = new SolarSystem.Body("earth", 1, "blue", 3, 1);
        //moon = new Body("Moon", 1, "grey", 1, 1);
        earth.mtxLocal.translateX(4);
        const canvas = document.querySelector("canvas");
        console.log(canvas);
        const camera = new f.ComponentCamera();
        console.log(camera);
        camera.mtxPivot.translateZ(-10);
        camera.mtxPivot.translateY(5);
        camera.mtxPivot.rotateX(25);
        // const cpmTransform: f.ComponentTransform = new f.ComponentTransform();
        // nodeCar.addComponent(cpmTransform);
        // nodeCar.mtxLocal.translateX(0);
        //earth.addChild(moon.nodeRotation);
        sun.addChild(earth.nodeRotation);
        root.addChild(sun);
        Viewport = new f.Viewport;
        Viewport.initialize("viewport", root, camera, canvas);
        console.log(Viewport);
        f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
        f.Loop.start();
        //f.Time.game.setScale(0.2);
    }
    //let pos = 0.001;
    function update() {
        const frameTimeInMilliSeconds = f.Loop.timeFrameGame;
        const frameTimeInSeconds = (frameTimeInMilliSeconds / 1000);
        sun.step();
        Viewport.draw();
    }
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=main.js.map