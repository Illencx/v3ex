<template>
    <div id="remix" ref="remix">
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as THREE from 'three'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'
const texture = new THREE.TextureLoader().load('src/assets/textures/044/Tiles044_1K-JPG_Color.jpg')
texture.colorSpace = THREE.SRGBColorSpace
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
});
renderer.setSize( window.innerWidth, window.innerHeight );
// eslint-disable-next-line no-unused-vars
const controls = new OrbitControls(camera, renderer.domElement); // 接入相机控制
const axesHelper = new THREE.AxesHelper(5)
// 获取dom的方式
const remix = ref(null);
// 几何体
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const geometryPlane = new THREE.PlaneGeometry( 100, 100 );
const materialPlane = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometryPlane, materialPlane );
plane.rotateX(THREE.MathUtils.degToRad(90))
plane.renderOrder = 100
scene.add(plane)
// 材质
const material = new THREE.MeshBasicMaterial( { map: texture} );
// 组装
const cube = new THREE.Mesh( geometry, material );
cube.renderOrder = 10
cube.position.set(0.5,0.51,0.5)
// 加入场景
scene.add( cube )
scene.add(axesHelper)
// 调整相机位置
camera.position.z = 5;
camera.position.x = 2;
camera.position.y = 2;
camera.lookAt(0,0,0)
//光源
const hemiLight = new THREE.HemisphereLight(0x0000ff, 0x00f00, 1)
  hemiLight.position.set(0, 0, 0)
  scene.add(hemiLight)
// 渲染
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();

// const handlemove = e => {
//     // console.log(e);
// }

onMounted(() => {
    // 绑定窗体
  remix.value.appendChild( renderer.domElement )
//   document.addEventListener("mousemove", handlemove)
});
</script>


<style scoped>
    #remix{
        background-color: rgb(1, 85, 158);
    }
</style>
