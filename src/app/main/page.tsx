import PortfolioHero from "./_components/portfolio-hero";
import WorkShowcase from "./_components/work-showcase";
import CapabilityIndex from "./_components/capability-index";
import ProjectGeography from "./_components/project-geography";
import ContactSection from "./_components/contact-section";

export default function PortfolioPage() {
  return (
    <main id="top" className="flex-1">
      <PortfolioHero />
      <WorkShowcase />
      <CapabilityIndex />
      <ProjectGeography />
      <ContactSection />
    </main>
  );
}
