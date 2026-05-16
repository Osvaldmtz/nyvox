import { NextResponse } from "next/server";

type Body = {
  name?: unknown;
  email?: unknown;
  projectType?: unknown;
  message?: unknown;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

export async function POST(req: Request) {
  let json: Body;
  try {
    json = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const name = json.name;
  const email = json.email;
  const projectType = json.projectType;
  const message = json.message;

  if (
    !isNonEmptyString(name) ||
    !isNonEmptyString(email) ||
    !isNonEmptyString(projectType) ||
    !isNonEmptyString(message)
  ) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const payload = {
    name: name.trim(),
    email: email.trim(),
    projectType: projectType.trim(),
    message: message.trim(),
  };

  console.log("[contact]", payload);

  return NextResponse.json({ ok: true });
}
