<template>
  <input type="text" :value="props.value" @input="handleChange" />
</template>

<script lang="ts" setup="props">
import { ref, defineProps } from 'vue'
import { FiledPropsDefine } from '../type'
const props = defineProps(FiledPropsDefine)
const handleChange = (e: any) => {
  console.log(e)
  props.onChange(e.target.value)
}
</script>
