import ResourcePage from "@/components/ResourcePage";

export default function ResumeTemplatePage() {
  return (
    <ResourcePage
      eyebrow="Free resource"
      title="Canadian Resume Starter Template"
      description="A simple structure for newcomers who want a clean, Canadian-style resume without overthinking the format."
      cta={{ label: "Back to Tools", href: "/#tools" }}
      sections={[
        {
          title: "Recommended structure",
          items: [
            "Name, city, phone/email, LinkedIn or portfolio if relevant.",
            "Short summary: 2–3 lines focused on your role, skills, and what you are looking for.",
            "Skills section with tools, languages, certifications, and practical strengths.",
            "Work experience with action bullets: what you did, tools used, and result if possible.",
            "Education and certifications near the bottom unless you are a student/new graduate.",
          ],
        },
        {
          title: "Quick rules",
          items: [
            "Keep it to 1–2 pages for most entry-level and part-time roles.",
            "Avoid photos, age, marital status, passport details, and unnecessary personal information.",
            "Use simple headings and readable spacing. Fancy design is less important than clarity.",
            "Customize the top summary and skills for each job type.",
            "Save as PDF before applying unless the employer asks for another format.",
          ],
        },
        {
          title: "Bullet formula",
          items: [
            "Start with an action verb: handled, supported, prepared, resolved, coordinated.",
            "Mention the task: customer orders, inventory, reports, tickets, schedules.",
            "Add context or result: faster service, fewer errors, better tracking, happy customers.",
            "Example: Supported daily customer orders and payment processing in a fast-paced retail environment.",
          ],
        },
        {
          title: "Newcomer tip",
          items: [
            "If you do not have Canadian experience yet, highlight transferable skills from India or other countries.",
            "Volunteer work, projects, internships, and campus roles can help fill gaps.",
            "For survival jobs, keep the resume practical and relevant to the role.",
          ],
        },
      ]}
    />
  );
}
