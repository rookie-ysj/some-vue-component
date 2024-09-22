<script lang="ts" setup>
import { CyberpunkProps } from "./types";
import { computed } from 'vue';
import { handleNumberOrString } from '@some-vue-component/utils'

const props = withDefaults(defineProps<CyberpunkProps>(), {
  text: 'Cyberpunk',
  height: 200,
  width: '100%',
  fontStyle: 'normal',
  fontSize: 80,
})
const fontSize = computed(() => handleNumberOrString(props.fontSize))
const width = computed(() => handleNumberOrString(props.width))
const height = computed(() => handleNumberOrString(props.height))
</script>

<template>
  <svg :style="{width, height}" class="ysj-cyberpunk">
    <text v-for="(item, index) in (Array.from({length: 5}))" :key="index"
          :style="{fontSize, fontStyle}" class="cyberpunk-text"
          dominant-baseline="middle"
          text-anchor="middle"
          x="50%"
          y="50%"
    >{{ text }}
    </text>
  </svg>
</template>

<style lang="scss" scoped>
.ysj-cyberpunk {
  background-color: black;

  .cyberpunk-text {
    fill: none;
    font-size: 80px;
    stroke: white;
    stroke-width: 1;
    stroke-dasharray: 60 300;
    animation: stroke 6s linear infinite;

    &:nth-of-type(1) {
      stroke: #fefa2a;
    }

    &:nth-of-type(2) {
      stroke: #51abb4;
      animation-delay: -1.2s;
    }

    &:nth-of-type(3) {
      stroke: #9e1c63;
      animation-delay: -2.4s;
    }

    &:nth-of-type(4) {
      stroke: #eaf6f4;
      animation-delay: -3.6s;
    }

    &:nth-of-type(5) {
      stroke: #a80e10;
      animation-delay: -4.8s;
    }
  }

  @keyframes stroke {
    to {
      stroke-dashoffset: 360;
    }
  }
}
</style>