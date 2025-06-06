<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
  import {
    BadgePercent,
    Tag,
    Paintbrush,
    Blocks,
    Sprout,
    ChartNoAxesCombined,
    Boxes
  } from "lucide-svelte";

  interface BenefitsProps {
    icon: 'BadgePercent' | 'tag' | 'paintbrush' | 'boxes' | 'sprout' | 'ChartNoAxesCombined';
    title: string;
    description: string;
  }

  const benefitList: BenefitsProps[] = [
    {
      icon: "boxes",
      title: "Immersive & Engaging",
      description:
        "VR creates a sense of presence, making therapy more engaging and effective than traditional methods. ",
    },
    {
      icon: "sprout",
      title: "Controlled Environment",
      description:
        "Patients can confront fears and practice coping strategies in a safe, controlled setting. ",
    },
    {
      icon: "ChartNoAxesCombined",
      title: "Scalable and Accessible",
      description:
        "VR therapy can be delivered at home or in clinics, reducing barriers to access.",
    },
    {
      icon: "BadgePercent",
      title: "Cost-Effective",
      description:
        "VR therapy reduces the need for in-person sessions, lowering costs for patients and providers.",
    },
  ];

  const iconMap = {
    BadgePercent: BadgePercent,
    tag: Tag,
    paintbrush: Paintbrush,
    boxes: Boxes,
    sprout: Sprout,
    ChartNoAxesCombined: ChartNoAxesCombined,
  };
</script>

<section id="benefits" class="container py-24 sm:py-32">
  <div class="grid lg:grid-cols-2 place-items-center lg:gap-24">
    <div>
      <h2 class="text-lg text-primary mb-2 tracking-wider">Benefits</h2>
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        How VR Therapy Can Help You
      </h2>
      <p class="text-xl text-muted-foreground mb-8">
        Step into transformative mental wellness with VRelief’s VR therapy. Our immersive, evidence-based approach empowers you to overcome challenges, build resilience, and access effective care from the comfort of home.
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-4 w-full">
      {#each benefitList as { icon, title, description }, index}
        <Card class="bg-muted/50 overflow-hidden relative dark:bg-card hover:bg-background dark:hover:bg-background transition-all delay-75 group/number">
          <div
          class="z-10 h-full w-full absolute top-50% bg-primary/5 dark:bg-primary/10 blur-2xl border rounded-full"
          ></div>
          <CardHeader>
            <div class="flex justify-between">
              <svelte:component 
                this={iconMap[icon]} 
                class="size-8 mb-6 text-primary"
              />
              <span class="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                0{index + 1}
              </span>
            </div>
            <CardTitle>{title}</CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground">
            {description}
          </CardContent>
        </Card>
      {/each}
    </div>
  </div>
</section>
