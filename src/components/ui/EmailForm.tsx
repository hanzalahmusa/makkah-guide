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
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("Check your email for the guide!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
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
