import { NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.formData();
  const email = formData.get("email");
  const teamSize = formData.get("teamSize");
  const challenge = formData.get("challenge");

  const launchPlan = {
    email,
    teamSize,
    challenge,
    scheduledWith: "Muze onboarding specialist",
    nextSteps: [
      "Map existing lead capture points",
      "Sync CRM integrations and enrichment",
      "Draft industry-specific reply scripts",
      "Launch pilot within 48 hours"
    ]
  };

  return NextResponse.json({
    ok: true,
    confirmation: `We reserved a launch call for ${email}. Look out for an invite in the next 10 minutes.`,
    launchPlan
  });
}
