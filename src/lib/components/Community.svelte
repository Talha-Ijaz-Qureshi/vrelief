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
</script>

<section id="community" class="py-0 grad border-0 flex justify-center align-middle">
  <hr />
  
  <div class="container pt-[25dvh] md:h-fit h-[100dvh] md:py-20">
    
    <div class="lg:w-[60%] mx-auto shadow-lg">
      <Card class="bg-background shadow-lg text-center flex flex-col items-center justify-center border-0 py-5">
        <CardHeader>
          <CardTitle class="text-4xl md:text-5xl font-bold">
            Join The 
            <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
              VRelief
            </span>
            Beta Program
          </CardTitle>
        </CardHeader>
        <CardContent class="lg:w-[80%] text-xl text-muted-foreground">
          Dive into the future of mental wellness! Join VRelief’s beta program to test our groundbreaking VR therapy and help us craft a more accessible path to healing.
        </CardContent>
          
        <CardFooter>
          <Button variant="act" size="act" class="w-fit">
            <a 
              href="https://discord.com/"
              target="_blank"
              rel="noreferrer"
              class="w-full h-full"
            >
              Apply For Beta
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  </div>
  <hr />
</section>

<style>
  .grad {
    background: #ffffff;
    background: radial-gradient(circle,transparent 0%, hsl(var(--primary)) 50%, hsl(var(--primary)) 60%, transparent 100%);
  }

  
</style>