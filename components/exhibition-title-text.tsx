export function ExhibitionTitleText({ text }: { text: string }) {
  return text.split(/(Together in Motion 2026|En mouvement ensemble 2026)/g).map((part, index) =>
    part === "Together in Motion 2026" || part === "En mouvement ensemble 2026"
      ? <em key={index} className="italic">{part}</em>
      : part,
  );
}
