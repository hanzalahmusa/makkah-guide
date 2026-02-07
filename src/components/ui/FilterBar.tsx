"use client";

interface FilterBarProps {
  filters: { value: string; label: string }[];
  active: string;
  onChange: (value: string) => void;
}

export function FilterBar({ filters, active, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onChange(filter.value)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
            active === filter.value
              ? "bg-ink text-sand"
              : "bg-white text-ink-light hover:bg-sand-dark"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
