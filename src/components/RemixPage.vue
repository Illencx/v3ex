<template>
    <div class="text">按下[SPACE]开始</div>
    <div id="remix" ref="remix">
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as THREE from 'three'
// import { GUI } from 'https://threejsfundamentals.org/threejs/../3rdparty/dat.gui.module.js'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'

// const eventObj = {
//     Fullscreen: function(){
//         renderer.domElement.requestFullscreen()
//     }
// }
// const gui = new GUI()
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 1, 1000 );
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: false,
});
// eslint-disable-next-line no-unused-vars
const controls = new OrbitControls(camera, renderer.domElement); // 接入相机控制
renderer.setSize( window.innerWidth, window.innerHeight );
// eslint-disable-next-line no-unused-vars
const axesHelper = new THREE.AxesHelper(5)
// 获取dom的方式
const remix = ref(null);
// 几何体
const geometry = new THREE.BoxGeometry( 1, 2, .1 );
const geometry1 = new THREE.BoxGeometry( 1, 4, .1 );
const geometry2 = new THREE.BoxGeometry( 1, 1.7, .1 );
const geometryPlane = new THREE.PlaneGeometry( 100, 100 );
const materialPlane = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide, framewire:false} );
const plane = new THREE.Mesh( geometryPlane, materialPlane );
plane.rotateX(THREE.MathUtils.degToRad(90))
plane.renderOrder = 100
// 材质
const material = new THREE.MeshBasicMaterial( {
    color: 0xffffff,wireframe:false
} );
const material2 = new THREE.MeshBasicMaterial( {
    color: 0xffffff,wireframe:true
} );
// 组装
const cube = new THREE.Mesh( geometry, material );
const cube1 = new THREE.Mesh( geometry1, material );
const cube2 = new THREE.Mesh( geometry2, material2 );
cube.renderOrder = 10
cube.position.set(0.5,1,0)
cube1.position.set(2.5,2,0)
cube2.position.set(4.5,.85,0)
// 加入场景
scene.add( cube,cube1,cube2 )
scene.add(axesHelper)
// 调整相机位置
camera.position.z = 5;
camera.position.x = 2;
camera.position.y = 2;
camera.lookAt(0,0,0)
// 渲染
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();
// gui.add(eventObj, 'Fullscreen') // 单选
// const handlemove = e => {
//     // console.log(e);
// }
window.addEventListener('resize',()=>{
    renderer.setSize( window.innerWidth, window.innerHeight )
    camera.aspect =  window.innerWidth/window.innerHeight
    camera.updateProjectionMatrix()
})
onMounted(() => {
    // 绑定窗体
  remix.value.appendChild( renderer.domElement )
//   document.addEventListener("mousemove", handlemove)
});
</script>


<style scoped>
    #remix{
        background-color: rgb(1, 85, 158);
        height: 100%;
    }
    .text{
        position: absolute;
        bottom: 20%;
        font-size: 20px;
        left: 80%;
        color: white;
    }
</style>
