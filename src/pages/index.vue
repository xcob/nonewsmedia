<template>

  <Hero />
  <About />
  <PodcastLinks />
  
  




<!-- 
  <generic-panel>
    <div class="flex flex-col mb-5">
      <h1 class="text-xl md:text-3xl mb-5">Animation by AOS.js <i class="las la-running text-primary"></i></h1>
      <p class="md:text-lg">Check <a class="text-primary" href="https://michalsnik.github.io/aos/" target="_blank">AOS.js documentation</a> for more animations.</p>
    </div>
    <div class="flex flex-col">
      <div class="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
        <div data-aos="fade-down" data-aos-delay="500" class="w-full md:w-[200px] h-[200px] bg-green-200"></div>
        <div data-aos="flip-left" data-aos-delay="1000" class="w-full md:w-[200px] h-[200px] bg-red-200"></div>
        <div data-aos="zoom-in" data-aos-delay="1500" class="w-full md:w-[200px] h-[200px] bg-blue-200"></div>
        <a class="text-lg mt-1 text-primary" href="https://michalsnik.github.io/aos/" target="_blank">more animations...</a>
      </div>
    </div>
  </generic-panel>

 
  

  <generic-panel>
    <div class="flex flex-col">
      <h1 class="md:text-xl mb-5 font-bold">Chat Bubbles</h1>
      <div class="flex flex-col">
        <div class="chat chat-start">
          <div class="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
        </div>
        <div class="chat chat-start">
          <div class="chat-bubble chat-bubble-secondary">Put me on the Council and not make me a Master!??</div>
        </div>
        <div class="chat chat-start">
          <div class="chat-bubble chat-bubble-accent">That's never been done in the history of the Jedi. It's insulting!</div>
        </div>
        <div class="chat chat-end">
          <div class="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
        </div>
        <div class="chat chat-end">
          <div class="chat-bubble chat-bubble-success">You have been given a great honor.</div>
        </div>
        <div class="chat chat-end">
          <div class="chat-bubble chat-bubble-warning">To be on the Council at your age.</div>
        </div>
        <div class="chat chat-end">
          <div class="chat-bubble chat-bubble-error">It's never happened before.</div>
        </div>
      </div>
    </div>
  </generic-panel>


  <generic-panel>
    <div class="flex flex-col">
      <h1 class="md:text-xl mb-5 font-bold">Footers</h1>
      <footer class="footer p-10 bg-base-200 text-base-content">
        <div>
          <span class="footer-title">Services</span>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </footer>
      
    </div>
  </generic-panel> -->


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
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
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
