<script lang="ts">
  import {
    Card,
    CardHeader,
    CardTitle,
    CardFooter,
    CardContent,
  } from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import Features from "$lib/components/Jobs.svelte";
  import { mode } from "mode-watcher";
  import { onMount } from 'svelte';

  let imageSrc = 'vrdark.png';
  
  onMount(() => {
      mode.subscribe(currentMode => {
          imageSrc = currentMode === 'dark' ? 'vrdark.png' : 'vrlight.png';
      });
  });

</script>

<section id="community" class="py-12">
  <hr />
  <div class="container py-20 sm:py-20">
    <div class="lg:w-[100%] mx-auto">
      <Card class="bg-background shadow-none text-center flex flex-col items-center justify-center border-0">
        <CardHeader>
          <CardTitle class="text-4xl md:text-5xl font-bold">
            <img
            class="bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg w-20 h-20 m-auto mb-4 border-none text-white"
            src={imageSrc}
            alt="VRelief-logo"
          />
      
            Work With Us @
            <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
              VRelief
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent class="lg:w-[80%] text-xl text-muted-foreground">
          Join the company 
        </CardContent>

        <CardFooter>
          <Features />
        </CardFooter>
      </Card>
    </div>
  </div>
  <hr />
</section>
