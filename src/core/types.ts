export interface HeroContent {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    microCopy: string[];
}

export interface VillainContent {
    title: string;
    mainText: string;
    comparison: {
        oldMarketing: string[];
        codirectWay: string[];
    };
}

export interface MethodStep {
    title: string;
    copy: string;
}

export interface MethodologyContent {
    title: string;
    steps: MethodStep[];
}

export interface SocialProofContent {
    title: string;
    stats: {
        label: string;
        value: string;
    }[];
    testimonial: {
        quote: string;
        author: string;
        role: string;
    };
}

export interface AboutContent {
    title: string;
    text: string[];
    image: string;
}

export interface InstagramContent {
    title: string;
    subtitle: string;
    buttonText: string;
    image: string;
}

export interface AwardContent {
    label: string;
    title: string;
    description: string;
    image: string;
}

export interface FooterContent {
    cta: string;
    buttonText: string;
    links: string[];
}

export interface HomePageContent {
    hero: HeroContent;
    villain: VillainContent;
    methodology: MethodologyContent;
    socialProof: SocialProofContent;
    about: AboutContent;
    instagram: InstagramContent;
    award: AwardContent;
    footer: FooterContent;
}
