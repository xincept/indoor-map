import THREE from '../libs/threejs/index'

class Location {
    constructor(floor, x, y, z = 0) {
        this.floor = floor
        this.x = x
        this.y = y
        this.z = z
        this.localPosition = new THREE.Vector3(x, y, z)
    }
}

export default Location