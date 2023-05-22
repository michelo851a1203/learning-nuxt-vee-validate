<script setup lang="ts">
  const props = withDefaults(defineProps<{
    currentValue: string;
    errorMessage?: string;
  }>(), { 
    errorMessage: ''
  });
  const emit = defineEmits<{
    (event: 'update:currentValue', modalValue: string): void
  }>();
  const mainClick = (event: InputEvent) => {
    const element = event.target as HTMLInputElement;
    emit('update:currentValue', element.value);
  }

</script>
<template>
  <section>
    <div>
      <input border="solid 1 black" rounded="xl" px="3" py="2" type="text"
        @input="mainClick" 
        :value="currentValue"
      >
    </div>
    <div text="red-500 sm">
      {{ errorMessage }}
    </div>
  </section>
</template>
