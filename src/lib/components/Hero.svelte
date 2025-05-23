<script lang="ts">
    import { Badge } from "$lib/components/ui/badge";
    import { Button } from "$lib/components/ui/button";
    import { ArrowRight } from "lucide-svelte";
    import { mode } from "mode-watcher";
    import { onMount } from 'svelte';

    let imageSrc = 'vr.png';
    
    onMount(() => {
        mode.subscribe(currentMode => {
            imageSrc = currentMode === 'dark' ? 'dr4.png' : 'dr5.png';
        });
    });

</script>

<section class="container">
    <div
        class="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32"
    >
    <div
    class="-z-10 h-[100%] w-[100%] absolute top-[0%] right-50% bg-primary/5 dark:bg-primary/10 blur-3xl border rounded-full"
    ></div>

        <div class="text-center space-y-8">
            <!-- <Badge variant="outline" class="text-sm py-2">
                <span class="mr-2 text-primary">
                    <Badge>New</Badge>
                </span>
                <span>Design is out now!</span>
            </Badge> -->

            <div
                class="max-w-screen-md mx-auto text-center text-5xl md:text-6xl font-bold"
            >
                <h1>
                    Healing 
                    <span
                    class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
                >
                    Mental Health
                </span>
                    Through
                    <span
                        class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
                    >
                        
                    </span>
                    VR
                    Therapy
                </h1>
            </div>

            <p class="max-w-screen-sm mx-auto text-xl text-muted-foreground">
                We bring together compassionate care and science-driven methods through immersive and condition-curated virtual sessions that support your mind, body, and emotional well-being.
            </p>

            <div class="space-y-4 md:space-y-0 md:space-x-4">
                <Button
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdjLJ5kJmiRVrsg5kd8cnBxJnCe4bSgBAcsFXWNuo2dGTlWsA/viewform?usp=header"
                    target="_blank"
                    class="w-5/6 md:w-1/4 font-bold group/arrow"
                >
                    Beta Program
                    <ArrowRight
                    class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform"
                    />
                </Button>
              
                <Button variant="secondary" href="#contact" class="w-5/6 md:w-1/4 font-bold z-10">
                    Connect With US
                    <ArrowRight
                    class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform"
                    />
                </Button>
            </div>
        </div>

        <div class="relative group mt-14">
            <div
                class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-primary/75 blur-3xl rounded-full img-shadow-animation"
            ></div>

            <img
                class="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-t-primary/30 img-border-animation"
                src={imageSrc}
                alt="dashboard using shadcn-svelte"
            />

            <div
                class="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"
            ></div>
        </div>
    </div>
</section>

<style>

    .img-shadow-animation {
        animation-name: img-shadow-animation;
        animation-iteration-count: infinite;
        animation-duration: 4s;
        animation-timing-function: linear;
        animation-direction: alternate;
        -moz-animation-timing-function: cubic-bezier(0.2, 0, 0.001, 1);
    }

    .img-border-animation {
        animation-name: img-border-animation;
        animation-iteration-count: infinite;
        animation-duration: 4s;
        animation-timing-function: linear;
        animation-direction: alternate;
        -moz-animation-timing-function: cubic-bezier(0.2, 0, 0.001, 1);

    }

    @keyframes img-shadow-animation {
        from {
            opacity: 0.75;
            transform: translateY(20px);
        }

        to {
            opacity: 1;
            transform: translateY(0px);
        }
    }
    
    @keyframes img-border-animation {
        from {
            @apply border-t-primary/10;
        }

        to {
            @apply border-t-primary/60;
        }
    }
</style>
