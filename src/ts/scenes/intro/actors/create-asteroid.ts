import {
    CircleGeometry,
    LinearFilter,
    Mesh,
    MeshBasicMaterial,
    MeshLambertMaterial,
    MeshPhongMaterial,
    Object3D,
    PlaneGeometry,
    TextGeometry,
    TextGeometryParameters } from "three";

import { Actor } from "../../../models/actor";
import { createActor } from "../../../utils/create-actor";
import { ASSETS_CTRL } from "../../../controls/controllers/assets-controller";

export function createAsteroid(
    lbgGeo: PlaneGeometry,
    lbgMat: MeshPhongMaterial,
    lbGeo: PlaneGeometry,
    lbMat: MeshBasicMaterial,
    headerParams: TextGeometryParameters): Actor {

    const labelBackGlow = new Mesh( lbgGeo, lbgMat );
    labelBackGlow.position.set(0, 0.1, -5);
    labelBackGlow.rotation.set(1.5708, 0, 0);

    const labelBack = new Mesh( lbGeo, lbMat );
    labelBack.position.set(0, 0, -5);
    labelBack.rotation.set(1.5708, 0, 0);

    const textMaterial = new MeshLambertMaterial( {color: 0x00B39F, opacity: 1, transparent: true} );
    const textGeometry = new TextGeometry('Asteroid Belt', headerParams);
    const textMesh = new Mesh( textGeometry, textMaterial );
    textMesh.position.set(-1.1, -0.5, -4.85);
    textMesh.rotation.x = -1.5708;

    const asteroid = createActor();
    asteroid.originalStartingPoint = [0, 0];
    asteroid.currentPoint = [0, 0];
    asteroid.endingPoint = [0, 0];
    const meshGroup = new Object3D();
    asteroid.geometry = new CircleGeometry(5, 48, 48);
    asteroid.material = new MeshPhongMaterial();
    asteroid.material.map = ASSETS_CTRL.textures.asteroid;
    asteroid.material.map.minFilter = LinearFilter;
    (asteroid.material as any).shininess = 0;
    asteroid.material.transparent = true;
    asteroid.mesh = new Mesh(asteroid.geometry, asteroid.material);
    asteroid.mesh.position.set(asteroid.currentPoint[0], 2, asteroid.currentPoint[1]);
    asteroid.mesh.rotation.set(-1.5708, 0, 0);
    meshGroup.add(asteroid.mesh);
    meshGroup.add(labelBackGlow);
    meshGroup.add(labelBack);
    meshGroup.add(textMesh);
    asteroid.mesh = meshGroup;
    meshGroup.name = 'Asteroid Belt';
    meshGroup.position.set(-50, 2, 0);

    return asteroid;
}