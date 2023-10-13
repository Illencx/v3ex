import { ref } from 'vue'
import { defineStore } from 'pinia'
export const getSysStat = defineStore('stat', () => {
      // 也可以这样定义
      const count = ref(true)
      function toggle(bool) {
        count.value = bool
      }
      return { count, toggle }
})