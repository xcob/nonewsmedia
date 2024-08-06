<script setup>
    defineProps(["episode"]);
</script>
<template>
    <div class="grid">
        <iframe style="border-radius:12px" 
        data-aos="fade-up"
        data-aos-delay="500"
        :src=episode.iframe 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"></iframe>
    </div>
</template>



