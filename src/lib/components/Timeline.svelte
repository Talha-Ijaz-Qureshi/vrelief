<script lang="ts">
import { onMount, tick } from 'svelte';
import Icon from "@iconify/svelte";  
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "$lib/components/ui/accordion";

  interface FAQProps {
    icon: string;
    question: string;
    answer: string;
    value: string;
    image?: string;
  }

  const FAQList: FAQProps[] = [
    {
      icon: "iconoir:code",
      question: "User Sign Up",
      answer: "VRelief is a virtual reality (VR) therapy platform designed to help individuals manage ADHD, PTSD, and aviophobia (fear of flying) through immersive, expert-crafted scenarios. Using a smartphone app and affordable VR headsets, users engage in guided, evidence-based exercises at home to confront fears, process trauma, or improve focus in a safe, controlled environment. Our beta program is currently testing these scenarios to refine the experience.",
      value: "item-1",
    },
    {
      icon: "ri:psychotherapy-line",
      question: "Who can benefit from VRelief’s VR therapy?",
      answer: "VRelief targets adults and adolescents dealing with ADHD, PTSD, or aviophobia, conditions affecting over 400 million people globally. Whether you’re a veteran processing trauma, someone struggling with focus, or anxious about flying, our tailored scenarios aim to provide accessible relief. We plan to expand to other disorders like anxiety and depression in the future.",
      value: "item-2",
    },
    {
      icon: "ant-design:layout-outlined",
      question: "Is VR therapy effective, and is it backed by science?",
      answer: "Yes, VR therapy is clinically validated for mental health treatment. Studies show it reduces PTSD symptoms by up to 75%, fear of heights by 68%, and improves self-compassion in depression by 25%. VRelief’s scenarios are designed with mental health experts to ensure clinical precision, and our beta testing will further validate effectiveness.",
      value: "item-3",
    },
    {
      icon: "ri:psychotherapy-line",
      question: "How can I join the VRelief beta program?",
      answer: "Our beta program is open to individuals interested in testing our VR therapy. Sign up on our website to receive updates and instructions. Participants will use our app with a compatible VR headset, provide feedback on usability and impact, and help shape the final product.",
      value: "item-4",
    },
    {
      icon: "ant-design:layout-outlined",
      question: "What’s next for VRelief after the beta phase?",
      answer: "Post-beta, we’ll refine our scenarios based on user feedback and launch a freemium app with basic and premium features. We’re also exploring AI and biofeedback integration to enhance therapy outcomes by 15% and plan to partner with therapists and clinics for broader reach. Long-term, we aim to address more disorders like depression and anxiety.",
      value: "item-5",
    },
  ];
  let openItems: string[] = [];
  let manualMode = false;

  // reactive index of the last opened item
  $: lastIndex = openItems.length ? FAQList.findIndex(faq => faq.value === openItems[openItems.length - 1]) : -1;
  // calculate height percentage for the progress line
  $: progressHeight = lastIndex >= 0
    ? `${(lastIndex / (FAQList.length - 1)) * 100}%`
    : '0%';

  onMount(() => {
    // scroll-driven observer
    const triggers = document.querySelectorAll<HTMLElement>('.accordion-trigger');
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        if (manualMode) return; // skip when in manual mode
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('data-value');
          if (entry.isIntersecting && id && !openItems.includes(id)) {
            openItems = [...openItems, id];
          }
        });
      },
      {
        root: null,
        rootMargin: '-40% 0px -60% 0px',
        threshold: 0,
      }
    );
    triggers.forEach((trigger) => scrollObserver.observe(trigger));

    const faqSection = document.getElementById('faq');
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          manualMode = false;
        }
      },
      { root: null, threshold: 0 }
    );
    if (faqSection) sectionObserver.observe(faqSection);

    return () => {
      scrollObserver.disconnect();
      sectionObserver.disconnect();
    };
  });

  // manual expand/collapse handlers
  function expandAll() {
    manualMode = true;
    openItems = FAQList.map(f => f.value);
  }
  async function collapseAll() {
  manualMode = true;
  openItems = [];
  // wait until Svelte has applied the new `openItems = []` to the DOM
  await tick();
  // scroll the FAQ section into view at its top
  const faqSection = document.getElementById('faq');
  faqSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
</script>

<section id="faq" class="container md:w-[1200px] py-24 sm:py-32">
  <div class="text-center mb-8">
    <h2 class="text-lg text-primary mb-2 tracking-wider">User Experience</h2>
    <h2 class="text-3xl md:text-4xl font-bold">Common Questions</h2>
    <div class="mt-4 flex justify-center space-x-4">
          </div>
  </div>

  <div class="relative">

    <!-- Accordion with timeline markers -->
    <Accordion type="multiple" bind:value={openItems} class="w-full">
      {#each FAQList as { icon, question, answer, value }}
      <AccordionItem value={value} class="bg-muted/00 dark:bg-card/0 h-full pb-6 relative border-none p-1 px-4 m-4">
        <AccordionTrigger data-value={value} class="accordion-trigger text-left text-lg flex flex-col">
          
          <div class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4 w-fit">
            <Icon icon={icon} width="50" height="50" class="mx-0" style="color: hsl(var(--primary))" />
          </div>
          <div class="pb-4">  {question}
          </div>
        </AccordionTrigger>

        <AccordionContent>
          {answer}
        </AccordionContent>
        <AccordionContent>
          <!-- <div class="border border-white w-full h-[90dvh]">

          </div> -->
        </AccordionContent>
      </AccordionItem>
    {/each}    
  </Accordion>
  </div>
<div class="flex w-full">
  <!-- <button on:click={expandAll} class="px-2 text-sm hover:underline py-1 mx-1 my-4 ml-auto foreground rounded">
    Expand All
  </button>
  <button on:click={collapseAll} class="px-2 text-sm hover:underline py-1 mx-1 my-4 foreground rounded">
    Collapse All
  </button> -->
</div>
</section>
