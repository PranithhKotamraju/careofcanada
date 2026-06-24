import ResourcePage from "@/components/ResourcePage";

export default function NewcomerLinksPage() {
  return (
    <ResourcePage
      eyebrow="Official links"
      title="Newcomer Links for First 30–60 Days"
      description="A calm list of important official starting points. Use these links to verify requirements directly with government sources."
      cta={{ label: "Open checklist", href: "/first-30-days" }}
      sections={[
        {
          title: "First setup priorities",
          items: [
            "Apply for SIN so you can work and access government programs.",
            "Understand provincial health coverage and how to access health services.",
            "Set up CRA access when eligible so tax credits and benefits are easier to manage.",
            "Use settlement services for language, employment, housing, and community support.",
          ],
        },
        {
          title: "Safety reminders",
          items: [
            "Do not share SIN, passport, or banking details casually over WhatsApp or social media.",
            "Use official government websites for eligibility and application instructions.",
            "If a job or housing offer feels rushed or asks for unusual payments, pause and verify.",
          ],
        },
      ]}
      links={[
        {
          label: "Apply for a SIN",
          href: "https://www.canada.ca/en/employment-social-development/services/sin/apply.html",
        },
        {
          label: "Health services in Canada",
          href: "https://www.canada.ca/en/services/health/health-system-services.html",
        },
        {
          label: "CRA My Account",
          href: "https://www.canada.ca/en/revenue-agency/services/e-services/cra-login-services.html",
        },
        {
          label: "Settlement services",
          href: "https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/new-life-canada/community-connections/settlement-services.html",
        },
        {
          label: "Benefits Finder",
          href: "https://www.canada.ca/en/services/benefits/finder.html",
        },
      ]}
    />
  );
}
