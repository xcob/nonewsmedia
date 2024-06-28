<template>
    <div class="flex flex-col items-center py-20 px-10 gap-8">
        <h2 id="about" class="text-4xl">About</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-20">
        <!-- Member -->
        <div class="flex gap-4">
            <!-- Photo -->
            <img alt="Logo" src="~/assets/images/chan-head-w-circle.png" class="w-40" /> 

            <div class="flex flex-col gap-2">
                <!-- Name -->
                <h3 class="font-bold text-lg">Chandler Brakefield</h3>

                <!-- Role -->
                <span class="font-bold text-sm text-primary">Host</span>
                <!-- Role -->
                <span class="text-sm">Social/Producer</span>

                <!-- Socials -->
                <div class="flex text-accent text-xs">
                    <a class="btn mr-2 btn-neonBlue btn-sm btn-circle">
                        <i class="fa-brands fa-github text-lg"></i>
                    </a>

                    <a class="btn mr-2 btn-neonBlue btn-sm btn-circle">
                        <i class="fa-brands fa-twitter text-lg"></i>
                    </a>

                    <a class="btn mr-2 btn-neonBlue btn-sm btn-circle">
                        <i class="fa-brands fa-facebook text-lg text-white"></i>
                    </a>
                </div>
            </div>
        </div>

        <!-- Member -->
        <div class="flex gap-4">
            <!-- Photo -->
            <img alt="Logo" src="~/assets/images/jake-head-w-circle.png" class="w-40" /> 

            <div class="flex flex-col gap-2">
                <!-- Name -->
                <h3 class="font-bold text-lg">Jacob Smith</h3>

                <!-- Role -->
                <span class="font-bold text-sm text-primary">Host</span>
                <!-- Role -->
                <span class="text-sm">Producer</span>

                <!-- Socials -->
                <div class="flex text-accent text-xs">
                    <a class="btn mr-2 btn-sm btn-neonBlue btn-circle text-primary">
                        <i class="fa-brands fa-github text-lg text-primary"></i>
                    </a>

                    <a class="btn mr-2 btn-neonBlue btn-sm btn-circle">
                        <i class="fa-brands fa-twitter text-lg"></i>
                    </a>

                    <a class="btn  btn-neonBlue btn-sm btn-circle">
                        <i class="fa-brands fa-facebook text-lg"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>