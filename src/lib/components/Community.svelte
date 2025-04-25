<script lang="ts">
  import {
    Card,
    CardHeader,
    CardTitle,
    CardFooter,
    CardContent,
  } from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import DiscordIcon from "$lib/icons/DiscordIcon.svelte";
  let href = "https://discord.com/invite/your-discord-invite-link"; 

</script>


<section id="community" class="py-0  relative flex justify-center align-middle">
  <hr />
<div class="dot absolute w-full h-full blur-[.04em]"></div>

  <div class="container relative overflow-hidden pt-[25dvh] md:h-fit h-[100dvh] md:py-20">
    <div class="lg:w-[60%] mx-auto shadow-lg">
      <Card class="relative bg-background shadow-lg text-center flex flex-col items-center justify-center border-0 py-5">
    
        <CardHeader class="z-10">
          <CardTitle class="text-4xl md:text-5xl font-bold">
            Join The 
            <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
              VRelief
            </span>
            Beta Program
          </CardTitle>
        </CardHeader>
        <CardContent class="z-10 lg:w-[80%] text-xl text-muted-foreground">
          Dive into the future of mental wellness! Join VRelief’s beta program to test our groundbreaking VR therapy and help us craft a more accessible path to healing.
        </CardContent>
          
        <CardFooter class="z-10">

          <Button variant="act" 
          href="https://docs.google.com/forms/d/e/1FAIpQLSdjLJ5kJmiRVrsg5kd8cnBxJnCe4bSgBAcsFXWNuo2dGTlWsA/viewform?usp=header"
          target="_blank"
          size="act" class="w-fit">
              Apply For Beta
          </Button>
        </CardFooter>
        <div
        class="z-0 h-72 w-full absolute top-50% bg-primary/10 dark:bg-primary/10 blur-2xl border rounded-full"
        ></div>
      </Card>
    </div>
  </div>
  <hr />
</section>

<style>
  .grad {
    background: #ffffff;
    background: radial-gradient(circle,transparent 0%, transparent 10%, hsl(var(--primary)) 70%, transparent 100%);
  }

  
</style>