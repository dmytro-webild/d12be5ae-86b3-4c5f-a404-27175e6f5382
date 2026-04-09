"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { ArrowUp, DollarSign, TrendingUp, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumLarge"
        background="grid"
        cardStyle="subtle-shadow"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "About",
          id: "about",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="PulseAgency"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="PulseAgency"
      description="We architect social influence through data-driven precision, transforming brands into industry leaders."
      buttons={[
        {
          text: "Start Your Growth",
          href: "#contact",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-low-poly-background-with-connecting-dots-lines_1048-5910.jpg",
          imageAlt: "Digital Strategy",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169842.jpg",
          imageAlt: "Analytics Dashboards",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-technology-background-with-low-poly-plexus-design_1048-16168.jpg",
          imageAlt: "Global Reach",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/hi-tech-futuristic-hud-display-circle-elements_1379-889.jpg",
          imageAlt: "Social Marketing",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/training-achieve-objectives_1134-420.jpg",
          imageAlt: "Agency Team",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/defocused-metallic-strings_53876-95116.jpg",
          imageAlt: "Content Strategy",
        },
      ]}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "InnovateTech",
        "GrowthInc",
        "GlobalMedia",
        "FutureBrands",
        "Skyward",
        "BrandLeaders",
        "ApexSolutions",
      ]}
      title="Trusted by industry giants"
      description="Driving exponential growth for established market leaders and innovators."
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="About Us"
      title="Data-First Social Architecture"
      description="We combine creative storytelling with deep analytics to build sustainable, high-impact social presence."
      subdescription="Our agency focuses on measurable outcomes, blending art and science to achieve market-leading dominance."
      icon={Zap}
      imageSrc="http://img.b2bpic.net/free-photo/middle-aged-hispanic-business-man_23-2151020303.jpg"
      imageAlt="Premium Agency Office"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "1",
          title: "Predictive Analytics",
          tags: [
            "AI-Driven",
            "Real-Time",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/data-analysis-summary-graph-arrow-up_53876-133586.jpg",
        },
        {
          id: "2",
          title: "Global Reach Optimization",
          tags: [
            "Automated",
            "Global",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/cyberpunk-location-tracking-mobile-device_23-2152001127.jpg",
        },
        {
          id: "3",
          title: "Conversion Intelligence",
          tags: [
            "High-Performance",
            "ROI",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/modern-equipped-computer-lab_23-2149241197.jpg",
        },
      ]}
      title="Precision Marketing Suite"
      description="A comprehensive stack designed for maximum conversion and engagement."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          title: "Average Growth",
          value: "450%",
          icon: TrendingUp,
        },
        {
          id: "m2",
          title: "Conversion Lift",
          value: "2.8x",
          icon: ArrowUp,
        },
        {
          id: "m3",
          title: "Campaign ROI",
          value: "12x",
          icon: DollarSign,
        },
      ]}
      title="Impact at Scale"
      description="Proven results for ambitious brands."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Elena Vance",
          role: "CMO",
          testimonial: "The precision of their data analytics truly changed our entire content strategy.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-cheerful-sucesful-buisnesswoman-glass-building-s-background_613910-21670.jpg",
        },
        {
          id: "2",
          name: "Marcus Thorne",
          role: "CEO",
          testimonial: "They don't just post content; they build influence that converts consistently.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-successful-businessman-thinking-posing-beige-wall_176420-144.jpg",
        },
        {
          id: "3",
          name: "Sarah Chen",
          role: "Marketing Director",
          testimonial: "PulseAgency is the secret weapon behind our record-breaking yearly performance.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-successful-businesswoman-with-charming-smile-posing-street-with-interesting-architecture-background_613910-3354.jpg",
        },
        {
          id: "4",
          name: "David Miller",
          role: "Operations Manager",
          testimonial: "Seamless execution and clear ROI-focused reports make working with them a joy.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-pretty-woman-sitting-table-trench-coat-working-laptop-co-working-office-wearing-glasses-smiling-happy-positive-workplace_285396-65.jpg",
        },
        {
          id: "5",
          name: "Jessica Wright",
          role: "Founder",
          testimonial: "The most professional agency we have ever engaged. Absolutely stellar impact.",
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-attractive-businesswoman-crossing-arms_1262-4724.jpg",
        },
      ]}
      title="Proven Outcomes"
      description="What our partners say about PulseAgency."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      text="Ready to scale your digital presence? Let's build your future, today."
      buttons={[
        {
          text: "Book Consultation",
          href: "mailto:hello@pulseagency.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Case Studies",
              href: "#case-studies",
            },
          ],
        },
        {
          items: [
            {
              label: "Careers",
              href: "#careers",
            },
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Privacy",
              href: "#privacy",
            },
          ],
        },
        {
          items: [
            {
              label: "LinkedIn",
              href: "https://linkedin.com",
            },
            {
              label: "Twitter",
              href: "https://twitter.com",
            },
            {
              label: "Instagram",
              href: "https://instagram.com",
            },
          ],
        },
      ]}
      logoText="PulseAgency"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
