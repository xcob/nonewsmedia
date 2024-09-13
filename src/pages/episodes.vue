<script setup>

const episodes = [
  {
    name: 'episode 33',
    iframe: 'https://open.spotify.com/embed/episode/6TdwPByfAdwq5HjUoI6fT0?utm_source=generator',
    id: 33,
  },
  {
    name: 'episode 32',
    iframe: 'https://open.spotify.com/embed/episode/34sWL1GJ9SrEZLbaLWYgDr?utm_source=generator',
    id: 32,
  },
  {
    name: 'episode 31',
    iframe: 'https://open.spotify.com/embed/episode/0CdZGZOt6JwO8OziAE4J7M?utm_source=generator',
    id: 31,
  },
  {
    name: 'episode 30',
    iframe: 'https://open.spotify.com/embed/episode/7ihEKulFYzNfyZEIZVwsid?utm_source=generator',
    id: 30,
  },
  {
    name: 'episode 29',
    iframe: 'https://open.spotify.com/embed/episode/1UMZXg2swbpABwMkMSCBxk?utm_source=generator',
    id: 29,
  },
  {
    name: 'episode 28',
    iframe: 'https://open.spotify.com/embed/episode/3d7dBbkFjQnpffvtil0poO?utm_source=generator',
    id: 28,
  },
  {
    name: 'episode 27',
    iframe: 'https://open.spotify.com/embed/episode/5kyl9cTI6BhAtBw8ynnmrK?utm_source=generator',
    id: 27,
  },
  {
    name: 'episode 26',
    iframe: 'https://open.spotify.com/embed/episode/0gNNgDXYYDgAYM0Bfsv87W?utm_source=generator',
    id: 26,
  },
  {
    name: 'episode 25',
    iframe: 'https://open.spotify.com/embed/episode/2OvTxj25VV6foN60HUHAoe?utm_source=generator',
    id: 25,
  },
  {
    name: 'episode 24',
    iframe: 'https://open.spotify.com/embed/episode/1iKHEAnLHocFuse2V2aXwG?utm_source=generator',
    id: 24,
  },
];

</script>

<template>
    <MainHeading>Episodes</MainHeading>
   <div class="grid md:grid-cols-2 gap-10 px-4 mx-auto max-w-screen-lg pb-16">
      <EpisodeList v-for="singleEP of episodes" :key="singleEP.id" :episode="singleEP"></EpisodeList>
    </div>
</template>
