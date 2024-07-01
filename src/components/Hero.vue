<template>
  <div class="hero min-w-full min-h-screen bg-hero-pattern">
    <div class="min-w-full content py-20 my-20">
        <div class="flex flex-col md:flex-col lg:flex-row  item-center align-center justify-center">
                <div class="flex flex-col lg:order-last items-center">
                        <img class="mr-24 md:mr-24 w-48 md:w-48 lg:w-60"  src="~/assets/images/chan-head-w-circle.png" />
                        <img class="ml-24 md:ml-24 w-48 md:w-48 lg:w-60"  src="~/assets/images/jake-head-w-circle.png" />
                </div>
                <div class="flex flex-col lg:order-first justify-center">
                    <h1 data-aos="fade-down" class="text-4xl md:text-7xl font-bold px-20 pt-4 md:pt-0 mb-6 text-white">A Good <br /> Podcast!</h1>
                    <p data-aos="fade-down" data-aos-delay="300" class="md:text-lg max-w-xl px-20 mb-6 text-white">No News Media is a light-hearted podcast hosted by two friends who are separated by 10 years. Join in on the fun!</p>
                    <div class="button-container px-20">
                        <a
                        data-aos="fade-down"
                        data-aos-delay="600"
                        class="btn btn-md font-normal btn-primary text-white bg-primary border-white hover:bg-neonBlue hover:border-neonBlue"
                        href="https://open.spotify.com/show/1loPZ5goey6s8sTGFmYPQH"
                        target="_blank"
                    > <i class="lab la-spotify text-4xl"></i>

                        Listen on Spotify
                    </a>
                    <a
                        data-aos="fade-down"
                        data-aos-delay="600"
                        class="btn btn-md font-normal mt-3 ml-0 md:ml-4 md:mt-0 btn-primary text-primary bg-white border-primary hover:bg-primary hover:text-white hover:border-neonBlue"
                        href="https://www.instagram.com/nonewsmediapodcast/"
                        target="_blank"
                    >
                    <i class="lab la-instagram text-4xl"></i> Follow on Instagram
                    </a>
                    </div>
                </div>

                
        </div>
    </div>
  </div>
</template>