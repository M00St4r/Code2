namespace SolarSystem {

    export import f = FudgeCore;
    console.log(f);

    window.addEventListener("load", start);

    const root: f.Node = new f.Node("Root");

    const sun: Body = new Body("sun", 1, "yellow");

    let Viewport: f.Viewport;

    function start(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        console.log(canvas);

        const camera: f.ComponentCamera = new f.ComponentCamera();
        console.log(camera);

        camera.mtxPivot.translateZ(10);
        camera.mtxPivot.translateY(4);

        // const cpmTransform: f.ComponentTransform = new f.ComponentTransform();
        // nodeCar.addComponent(cpmTransform);
        // nodeCar.mtxLocal.translateX(0);

        root.addChild(sun);

        Viewport = new f.Viewport;
        Viewport.initialize("viewport", root, camera, canvas);
        console.log(Viewport);

        f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
        f.Loop.start();
        //f.Time.game.setScale(0.2);
    }

    //let pos = 0.001;

    function update(): void {

        const frameTimeInMilliSeconds: number = f.Loop.timeFrameGame;
        const frameTimeInSeconds: number = (frameTimeInMilliSeconds / 1000);
        Viewport.draw();
    }
}