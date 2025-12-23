import { contentRepository } from "@/infrastructure/content.repository";
import { HeroSection } from "@/components/sections/HeroSection";
import { VillainSection } from "@/components/sections/VillainSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { AwardSection } from "@/components/sections/AwardSection";
import { FooterSection } from "@/components/sections/FooterSection";

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
