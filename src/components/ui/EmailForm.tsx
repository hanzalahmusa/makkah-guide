"use client";

import { useState, type FormEvent } from "react";

interface EmailFormProps {
  className?: string;
  buttonText?: string;
  placeholder?: string;
}

export function EmailForm({
  className = "",
  buttonText = "Get the Free Guide",
  placeholder = "your@email.com",
}: EmailFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");

    // TODO: Wire up to /api/subscribe once Resend is configured
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("success");
    setMessage("Thanks! We'll send the guide when it's ready.");
    setEmail("");
  }

  if (status === "success") {
    return (
      <div className={`rounded-2xl bg-sage/10 p-6 text-center ${className}`}>
        <p className="font-heading text-xl text-sage-dark">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        required
        className="flex-1 rounded-full border border-sand-dark bg-white px-5 py-3 text-ink placeholder:text-ink-light/50 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-sage px-6 py-3 font-semibold text-white transition-colors hover:bg-sage-dark disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : buttonText}
      </button>
      {status === "error" && (
        <p className="text-sm text-clay sm:col-span-2">{message}</p>
      )}
    </form>
  );
}
