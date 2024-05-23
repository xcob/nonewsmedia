<template>
  <div :data-theme="theme">
    <div class="navbar fixed bg-base-100 z-40 shadow-sm">
      <div class="navbar-start">
        <a class="" href="/"><img src="~/assets/images/slashes.png" width="200px"/></a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <!-- TODO: You can add menu here -->
      </div>
      <div class="navbar-end">
      </div>
    </div>
    <slot />
    <footer class="footer footer-center p-10 bg-base-50">
      <div>
        <h3 class="text-2xl md:text-3xl font-bold">No News Media</h3>
        <p class="md:font-bold">
          Podcast 
        </p>
        <p>Copyright © {{new Date().getFullYear()}} - All right reserved</p>
        <div>
        <div class="grid grid-flow-col gap-4">
          <a href="#" target="_blank">
            <i class="lab la-twitter text-4xl"></i>
          </a>
          <a href="3" target="_blank">
            <i class="lab la-facebook text-4xl"></i>
          </a>
          <a href="#" target="_blank">
            <i class="lab la-instagram text-4xl"></i>
          </a>
        </div>
      </div>
      
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
const THEMES = [
  'winter',
];
export default {
  setup () {
    const theme = ref(null);
    watch(theme, (value) => {
      localStorage.setItem('daisyui-theme', value);
    });
    onMounted(() => {
      theme.value = localStorage.getItem('daisyui-theme') || 'dark';
    });
    return {
      theme,
      themes: THEMES,
    };
  },
};
</script>
