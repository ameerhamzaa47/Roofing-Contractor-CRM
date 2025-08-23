import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { SuccessStories } from '@/components/SuccessStories';
import { LeadQualityGuarantee } from '@/components/LeadQualityGuarantee';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { FAQ } from '@/components/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <LeadQualityGuarantee />
      <WhyChooseUs />
      <SuccessStories />
      <FAQ />
    </>
  );
}