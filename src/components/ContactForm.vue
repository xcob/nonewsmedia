<script setup>
import { ref } from 'vue';
// import { getEmailKey } from 'emailHelper';

const form = ref({
  access_key: '4f58bbb6-c649-40a0-a1c6-a8ee7efdda9e',
  subject: 'New Submission from No News Media',
  name: '',
  email: '',
  message: '',

});

const result = ref('');
const status = ref('');
const displayMessage = ref('');

const submitForm = async () => {
  result.value = 'Please wait...';
  try {
    const response = await $fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: form.value,
    });

    console.log(response); // You can remove this line if you don't need it

    result.value = response.message;

    if (response.status === 200) {
      status.value = 'Success';
      displayMessage.value = 'Sent!';
    } else {
      console.log(response); // Log for debugging, can be removed
      status.value = 'error';
    }
  } catch (error) {
    console.log(error); // Log for debugging, can be removed
    status.value = 'error';
    result.value = 'Something went wrong!';
  } finally {
    // Reset form after submission
    form.value.name = '';
    form.value.email = '';
    form.value.message = '';

    // Clear result and status after 5 seconds
    setTimeout(() => {
      result.value = '';
      status.value = '';
    }, 5000);
  }
};
</script>

<template>
    <div class="self-center w-96" data-aos="fade-down">
        <form @submit.prevent="submitForm" class="bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2 mt-2" for="name">
                Name
            </label>
            <input type="text" name="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="form.name"/>
            <label class="block text-gray-700 text-sm font-bold mb-2 mt-2" for="email">
                Email
            </label>
            <input type="email" name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  v-model="form.email"/>
            <label class="block text-gray-700 text-sm font-bold mb-2 mt-2" for="message">
                Message
            </label>
            <textarea name="message" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="8" v-model="form.message"></textarea>
            <button type="submit" class="bg-primary hover:bg-primary/50 text-white font-bold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send Message</button>
            <div>{{ displayMessage }}</div>
        </form>
    </div>
</template>
