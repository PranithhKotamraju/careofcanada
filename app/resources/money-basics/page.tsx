import ResourcePage from "@/components/ResourcePage";

export default function MoneyBasicsPage() {
  return (
    <ResourcePage
      eyebrow="Money basics"
      title="Budgeting, Banking & Credit Basics"
      description="A simple starting guide for managing first-month costs, banking, credit, and monthly survival planning in Canada."
      cta={{ label: "Use Cost Calculator", href: "/#cost-calculator" }}
      sections={[
        {
          title: "First-month budget",
          items: [
            "Estimate rent first. Housing usually decides whether the budget feels tight or manageable.",
            "Plan for groceries, phone, transit, utilities, winter clothing, deposits, and emergency buffer.",
            "Use the Cost Calculator as a starting estimate, then edit numbers based on real listings.",
          ],
        },
        {
          title: "Banking basics",
          items: [
            "Compare monthly fees, newcomer offers, e-transfer limits, and branch access.",
            "Set up direct deposit when you start working.",
            "Keep rent and bill payments trackable where possible.",
          ],
        },
        {
          title: "Credit basics",
          items: [
            "Credit history matters for rentals, phones, car loans, and future borrowing.",
            "Use a starter credit card carefully and pay the full balance on time.",
            "Avoid carrying high balances just to build credit.",
          ],
        },
        {
          title: "Newcomer money rules",
          items: [
            "Keep an emergency fund, even if it starts small.",
            "Do not send deposits before verifying housing or job legitimacy.",
            "Track subscriptions and small payments; they add up quickly.",
          ],
        },
      ]}
      links={[
        {
          label: "Financial Consumer Agency of Canada",
          href: "https://www.canada.ca/en/financial-consumer-agency.html",
        },
        {
          label: "Benefits Finder",
          href: "https://www.canada.ca/en/services/benefits/finder.html",
        },
      ]}
    />
  );
}
