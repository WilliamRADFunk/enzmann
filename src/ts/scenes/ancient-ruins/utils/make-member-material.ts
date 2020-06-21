import { DoubleSide, MeshBasicMaterial, NearestFilter, RepeatWrapping, Texture, Vector2 } from "three";

/**
 * Makes a team member material for the game map.
 */
export function makeMemberMaterial(textures: { [key: string]: Texture }, offCoordsX: number, offCoordsY: number, size: number[]): MeshBasicMaterial {
    const material: MeshBasicMaterial = new MeshBasicMaterial({
        color: 0xFFFFFF,
        map: textures.spriteMapAncientRuinsCrew.clone(),
        side: DoubleSide,
        transparent: true
    });

    material.map.offset = new Vector2(
        (1 / size[0]) * offCoordsX,
        (1 / size[1]) * offCoordsY);

    material.map.repeat = new Vector2(
        (1 / size[0]),
        (1 / size[1]));

    material.map.magFilter = NearestFilter;
    material.map.minFilter = NearestFilter;
    material.map.wrapS = RepeatWrapping;
    material.map.wrapT = RepeatWrapping;

    material.depthTest = false;
    material.map.needsUpdate = true;

    return material;
}