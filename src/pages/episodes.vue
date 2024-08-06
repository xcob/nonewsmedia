<script setup>

const episodes = [
  {
    name: 'episode 29',
    iframe: 'https://open.spotify.com/embed/episode/1UMZXg2swbpABwMkMSCBxk?utm_source=generator'
  },
  {
    name: 'episode 28',
    iframe: 'https://open.spotify.com/embed/episode/3d7dBbkFjQnpffvtil0poO?utm_source=generator'
   },
  {
    name: 'episode 27',
    iframe: 'https://open.spotify.com/embed/episode/5kyl9cTI6BhAtBw8ynnmrK?utm_source=generator'
  },
  {
    name: 'episode 26',
    iframe: 'https://open.spotify.com/embed/episode/0gNNgDXYYDgAYM0Bfsv87W?utm_source=generator'
  },
  {
    name: 'episode 25',
    iframe: 'https://open.spotify.com/embed/episode/2OvTxj25VV6foN60HUHAoe?utm_source=generator'
  },
  {
    name: 'episode 24',
    iframe: 'https://open.spotify.com/embed/episode/1iKHEAnLHocFuse2V2aXwG?utm_source=generator'
  }
];

</script>

<template>
  <div class="flex justify-center pt-44 pb-16">
    <h1 class="text-2xl md:text-5xl">Episodes!</h1>
  </div>
   <div class="grid md:grid-cols-2 gap-10 px-4 mx-auto max-w-screen-lg pb-16 flex">
      <EpisodeList v-for="widget of episodes" :episode="widget"></EpisodeList>
    </div>
</template>



