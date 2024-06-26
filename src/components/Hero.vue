<template>
  <div class="hero min-w-full min-h-screen bg-zinc-200">
    <div class="min-w-full content py-20 my-20 ">
        <div class="flex justify-center">
                <div class="flex-col content-center">
                    <h1 data-aos="fade-down" class="text-4xl md:text-7xl font-bold px-20 mb-6 text-primary">A Good <br /> Podcast!</h1>
                    <p data-aos="fade-down" data-aos-delay="300" class="md:text-lg max-w-xl px-20 mb-6 text-primary">No News Media is a light-hearted podcast hosted by two friends who are separated by 10 years. Join in on the fun!</p>
                    <div class="button-container px-20">
                        <a
                        data-aos="fade-down"
                        data-aos-delay="600"
                        class="btn btn-sm md:btn-md btn-primary text-zinc-200 bg-primary border-primary hover:bg-cyan-400 hover:border-cyan-400"
                        href="https://open.spotify.com/show/1loPZ5goey6s8sTGFmYPQH"
                        target="_blank"
                    > <i class="lab la-spotify text-4xl"></i>

                        Listen on Spotify
                    </a>
                    <a
                        data-aos="fade-down"
                        data-aos-delay="600"
                        class="btn btn-sm md:btn-md mx-4 btn-primary text-primary bg-zinc-200 border-primary hover:bg-primary hover:text-zinc-200 hover:border-primary"
                        href="https://www.instagram.com/nonewsmediapodcast/"
                        target="_blank"
                    >
                    <i class="lab la-instagram text-4xl"></i> Follow on Instagram
                    </a>
                    </div>
                </div>

                <div class="flex-col">
                    <div class="flex-row">
                        <img class="rounded" width="400px" src="~/assets/images/nnm-team-hero.png" />
                    </div>
                </div>
        </div>
    </div>
  </div>
</template>