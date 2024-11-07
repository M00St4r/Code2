"use strict";
var SolarSystem;
(function (SolarSystem) {
    var f = FudgeCore;
    class Body extends f.Node {
        constructor(_name, _size, _color, _distance, _vOrbit) {
            super(_name);
            this.dist = 0;
            this.vOrbit = 0;
            this.vRotation = 0;
            this.name = _name;
            this.size = _size;
            this.dist = _distance;
            this.vOrbit = _vOrbit;
            const tempMat = new f.ComponentMaterial(Body.material);
            tempMat.clrPrimary.setCSS(_color);
            this.nodeRotation = new f.Node(_name + "RotationNode");
            this.nodeRotation.addComponent(new f.ComponentTransform);
            this.nodeRotation.addChild(this);
            this.addComponent(new f.ComponentMesh(Body.mesh));
            this.addComponent(tempMat);
            this.addComponent(new f.ComponentTransform());
        }
        step() {
            this.nodeRotation.mtxLocal.rotateY(this.vOrbit);
            const c = this.getChild(0);
            if (c) {
                for (const bn of c.getChildren()) {
                    bn.step();
                }
            }
        }
        setTransforms(_vOrbit, _vRotation, _distance) {
            this.vOrbit = _vOrbit / 1000 * (Math.PI / 180);
            this.vRotation = _vRotation / 1000 * (Math.PI / 180);
            this.dist = _distance;
        }
    }
    Body.mesh = new f.MeshSphere("Body");
    Body.material = new f.Material("Body", f.ShaderLitTextured);
    SolarSystem.Body = Body;
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=Body.js.map