<script setup lang="ts">

  const {
    email,
    password,
    confirmPassword,
    isChecked,
    errors,
    submitForm,
    resetForm,
    currentResult,
  } = useMainFormPage();
</script>

<template>
  <form 
    space="y-2"
    @submit.prevent="submitForm">
    <MainTest v-model:currentValue="email" :errorMessage="errors.email" />
    <MainTest v-model:currentValue="password" :errorMessage="errors.password" />
    <MainTest v-model:currentValue="confirmPassword" :errorMessage="errors.confirmPassword" />
    <div>
      <input v-model="isChecked" type="checkbox" id="hello">
      <label for="hello">hello</label>
    </div>

    <section flex items="center" space-x="2">
      <button type="submit" bg="blue-400 hover:blue-800" px="3" py="2" rounded="xl" border="none" text="hover:white">
        Submit
      </button>
      <button @click.prevent="resetForm" px="3" py="2" rounded="xl" bg="blue-400 hover:blue-800" border="none" text="hover:white">reset</button>
    </section>
    <section text="green-500">{{ currentResult }}</section>
  </form>
</template>
