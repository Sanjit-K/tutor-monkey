"use client";

interface ResourceLink {
  label: string;
  url: string;
  id: string;
  gtmLabel: string;
}

interface ResourceCardProps {
  title: string;
  description: string;
  links: ResourceLink[];
}

export default function ResourceCard({ title, description, links }: ResourceCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col items-start">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>

      {links.map((link) => (
        <a
          key={link.id}
          id={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-blue-600 hover:underline mb-2 last:mb-0"
          data-gtm="download"
          data-gtm-label={link.gtmLabel}
          aria-label={`Open ${link.gtmLabel}`}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
