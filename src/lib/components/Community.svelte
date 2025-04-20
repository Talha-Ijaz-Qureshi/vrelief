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

<section id="community" class="py-12">
  <hr />
  <div class="container py-20 sm:py-20">
    <div class="lg:w-[60%] mx-auto">
      <Card class="bg-background shadow-none text-center flex flex-col items-center justify-center border-0">
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
          rahhh substitles
        </CardContent>
          
        <CardFooter>
          <Button>
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