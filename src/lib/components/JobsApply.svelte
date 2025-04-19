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
    import Features from "$lib/components/Jobs.svelte";
  
  </script>
  
  <section id="community" class="py-12">
    <hr />
    <div class="container py-20 sm:py-20">
      <div class="lg:w-[60%] mx-auto">
        <Card class="bg-background shadow-none text-center flex flex-col items-center justify-center border-0">
          <CardHeader>
            <CardTitle class="text-4xl md:text-5xl font-bold">
              <DiscordIcon class="w-20 h-20 m-auto mb-4" />
              Join The Company @
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
  