import { ref } from 'vue';

const submitForm = async () => {
  const config = useRuntimeConfig();

  const form = ref({
    access_key: config.web3FormKey,
    subject: 'New Submission from No News Media',
    name: '',
    email: '',
    message: '',

  });

  const result = ref('');
  const status = ref('');

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
      status.value = 'success';
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

export default submitForm;
