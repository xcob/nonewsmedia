<template>
<EpisodeList />
<PodcastLinks />
</template>


<script>
import { useHead } from '#app';
import { definePageMeta } from '#imports';
import GenericPanel from '~/components/commons/GenericPanel';
import ogBanner from '../assets/images/nnm-logo.png';

export default {
  components: {
    GenericPanel,
  },
  setup () {
    definePageMeta({
      layout: 'default',
    });

    useHead({
      title: 'No News Media | Podcast',
      description: 'No News Media is a fun, easy listening podcast between two friends.',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
      meta: [
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: ogBanner,
        },
      ],
    });

    return {};
  },
};
</script>
