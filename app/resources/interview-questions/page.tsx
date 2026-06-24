import ResourcePage from "@/components/ResourcePage";

export default function InterviewQuestionsPage() {
  return (
    <ResourcePage
      eyebrow="Free resource"
      title="Interview Questions & Calm Prep"
      description="Common interview questions and a simple answer framework so you can prepare without panic."
      cta={{ label: "Track applications", href: "/#job-tracker" }}
      sections={[
        {
          title: "Common questions",
          items: [
            "Tell me about yourself.",
            "Why do you want to work here?",
            "What is your availability?",
            "Tell me about a time you handled a difficult customer or situation.",
            "What are your strengths?",
            "Why should we hire you?",
          ],
        },
        {
          title: "Simple answer structure",
          items: [
            "Context: one short sentence about the situation.",
            "Action: what you personally did.",
            "Result: what improved, what you learned, or how it helped.",
            "Keep answers under 60–90 seconds unless they ask for more detail.",
          ],
        },
        {
          title: "Questions to ask them",
          items: [
            "What does a successful first month look like in this role?",
            "What are the usual shifts or peak hours?",
            "What training is provided?",
            "When can I expect the next step?",
          ],
        },
        {
          title: "Before the interview",
          items: [
            "Check the location, transit route, and travel time.",
            "Prepare your availability clearly.",
            "Bring ID or documents only when requested by the employer.",
            "Do not share SIN or banking details until a real job offer/onboarding step.",
          ],
        },
      ]}
    />
  );
}
