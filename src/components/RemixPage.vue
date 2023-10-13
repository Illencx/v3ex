<template>
    <div id="remix" ref="remix">
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as THREE from 'three'
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
console.log(scene)
console.log(camera)
console.log(renderer)
renderer.setSize( window.innerWidth, window.innerHeight );
const axesHelper = new THREE.AxesHelper(5)
// 获取dom的方式
const remix = ref(null);
// 几何体
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// 材质
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// 组装
const cube = new THREE.Mesh( geometry, material );
// 加入场景
scene.add( cube )
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

const handlemove = e => {
    // console.log(e);
}

onMounted(() => {
    // 绑定窗体
  remix.value.appendChild( renderer.domElement )
  document.addEventListener("mousemove", handlemove)
});
</script>


<style scoped>

</style>
