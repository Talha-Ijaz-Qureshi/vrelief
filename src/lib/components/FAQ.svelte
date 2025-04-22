<script lang="ts">
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "$lib/components/ui/accordion";

  interface FAQProps {
    question: string;
    answer: string;
    value: string;
  }

  const FAQList: FAQProps[] = [
    {
      question: "What is VRelief, and how does it work?",
      answer: "VRelief is a virtual reality (VR) therapy platform designed to help individuals manage ADHD, PTSD, and aviophobia (fear of flying) through immersive, expert-crafted scenarios. Using a smartphone app and affordable VR headsets, users engage in guided, evidence-based exercises at home to confront fears, process trauma, or improve focus in a safe, controlled environment. Our beta program is currently testing these scenarios to refine the experience.",
      value: "item-1",
    },
    {
      question: "Who can benefit from VRelief’s VR therapy?",
      answer:
        "VRelief targets adults and adolescents dealing with ADHD, PTSD, or aviophobia, conditions affecting over 400 million people globally. Whether you’re a veteran processing trauma, someone struggling with focus, or anxious about flying, our tailored scenarios aim to provide accessible relief. We plan to expand to other disorders like anxiety and depression in the future.",
      value: "item-2",
    },
    {
      question:
        "Is VR therapy effective, and is it backed by science?",
      answer:
        "Yes, VR therapy is clinically validated for mental health treatment. Studies show it reduces PTSD symptoms by up to 75%, fear of heights by 68%, and improves self-compassion in depression by 25%. VRelief’s scenarios are designed with mental health experts to ensure clinical precision, and our beta testing will further validate effectiveness.",
      value: "item-3",
    },
    {
      question: "How can I join the VRelief beta program?",
      answer: "Our beta program is open to individuals interested in testing our VR therapy. Sign up on our website to receive updates and instructions. Participants will use our app with a compatible VR headset, provide feedback on usability and impact, and help shape the final product.",
      value: "item-4",
    },
    {
      question:
        "What’s next for VRelief after the beta phase?",
      answer: "Post-beta, we’ll refine our scenarios based on user feedback and launch a freemium app with basic and premium features. We’re also exploring AI and biofeedback integration to enhance therapy outcomes by 15% and plan to partner with therapists and clinics for broader reach. Long-term, we aim to address more disorders like depression and anxiety.",
      value: "item-5",
    },
  ];
</script>

<section id="faq" class="container md:w-[700px] py-24 sm:py-32">
  <div class="text-center mb-8">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">FAQS</h2>
    <h2 class="text-3xl md:text-4xl text-center font-bold">
      Common Questions
    </h2>
  </div>

  <Accordion type="single" class="w-full">
    {#each FAQList as { question, answer, value }}
      <AccordionItem {value}>
        <AccordionTrigger class="text-left">
          {question}
        </AccordionTrigger>
        <AccordionContent>
          {answer}
        </AccordionContent>
      </AccordionItem>
    {/each}
  </Accordion>

  <h3 class="font-medium mt-4">
    Still have questions?
    <a href="#contact" class="text-muted-foreground">
      <span class="underline">Contact us</span>
    </a>
  </h3>
</section>
