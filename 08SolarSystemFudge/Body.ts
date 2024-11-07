namespace SolarSystem {

    import f = FudgeCore;

    export class Body extends f.Node {

        private static mesh: f.Mesh = new f.MeshSphere("Body");
        private static material: f.Material = new f.Material("Body", f.ShaderLitTextured);

        // public pos: f.Vector3;

        public nodeRotation: f.Node;

        private size: number;
        private dist: number = 0;
        private vOrbit: number = 0;
        private vRotation: number = 0;

        public constructor(_name: string, _size: number, _color: string, _distance: number, _vOrbit:number) {
            super(_name);
            this.name = _name;
            this.size = _size;
            this.dist = _distance;
            this.vOrbit = _vOrbit;

            const tempMat: f.ComponentMaterial = new f.ComponentMaterial(Body.material);
            tempMat.clrPrimary.setCSS(_color);

            this.nodeRotation = new f.Node(_name + "RotationNode");
            this.nodeRotation.addComponent(new f.ComponentTransform);
            this.nodeRotation.addChild(this);
 

            this.addComponent(new f.ComponentMesh(Body.mesh));
            this.addComponent(tempMat);
            this.addComponent(new f.ComponentTransform());
        }

        public step():void{
            this.nodeRotation.mtxLocal.rotateY(this.vOrbit);
            const c: f.Node = this.getChild(0);

            if(c){
                for ( const bn of c.getChildren()){
                    (bn as Body).step();
                }
            }
        }

        public setTransforms(_vOrbit: number, _vRotation: number, _distance: number) {
            this.vOrbit = _vOrbit / 1000 * (Math.PI / 180);
            this.vRotation = _vRotation / 1000 * (Math.PI / 180);
            this.dist = _distance;
        }
    }
}