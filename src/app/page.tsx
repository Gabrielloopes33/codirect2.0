import dynamic from "next/dynamic";
import { contentRepository } from "@/infrastructure/content.repository";
import { HeroSection } from "@/components/sections/HeroSection";

// Lazy load all non-critical sections with loading states
const VillainSection = dynamic(() => import("@/components/sections/VillainSection").then(mod => ({ default: mod.VillainSection })), {
  loading: () => <div className="min-h-screen" />,
  ssr: true
});

const MethodologySection = dynamic(() => import("@/components/sections/MethodologySection").then(mod => ({ default: mod.MethodologySection })), {
  loading: () => <div className="min-h-screen" />,
  ssr: true
});

const AboutSection = dynamic(() => import("@/components/sections/AboutSection").then(mod => ({ default: mod.AboutSection })), {
  loading: () => <div className="min-h-screen" />,
  ssr: true
});

const InstagramSection = dynamic(() => import("@/components/sections/InstagramSection").then(mod => ({ default: mod.InstagramSection })), {
  loading: () => <div className="min-h-screen" />,
  ssr: true
});

const AwardSection = dynamic(() => import("@/components/sections/AwardSection").then(mod => ({ default: mod.AwardSection })), {
  loading: () => <div className="min-h-screen" />,
  ssr: true
});

const SocialProofSection = dynamic(() => import("@/components/sections/SocialProofSection").then(mod => ({ default: mod.SocialProofSection })), {
  loading: () => <div className="min-h-screen" />,
  ssr: true
});

const FooterSection = dynamic(() => import("@/components/sections/FooterSection").then(mod => ({ default: mod.FooterSection })), {
  loading: () => <div />,
  ssr: true
});

export default function Home() {
  const content = contentRepository;

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/20">
      <HeroSection content={content.hero} />
      <VillainSection content={content.villain} />
      <MethodologySection content={content.methodology} />
      <AboutSection content={content.about} />
      <InstagramSection content={content.instagram} />
      <AwardSection content={content.award} />
      <SocialProofSection content={content.socialProof} />
      <FooterSection content={content.footer} />
    </main>
  );
}
