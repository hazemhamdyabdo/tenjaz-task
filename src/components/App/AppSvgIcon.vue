<script setup lang="ts">
import { defineAsyncComponent, ref, computed } from "vue";

interface Props {
  name: string;
  color?: string;
  hoverColor?: string;
}

const props = defineProps<Props>();

const hovering = ref<boolean>(false);

const componentStyle = computed(() => ({
  fill: hovering.value ? props.hoverColor : props.color,
}));

const dynamicComponent = defineAsyncComponent(
  () => import(`../../assets/icons/${props.name}.svg?component`),
);
</script>

<template>
  <component
    :is="dynamicComponent"
    :style="componentStyle"
    @mouseover="hovering = true"
    @mouseleave="hovering = false"
  />
</template>
