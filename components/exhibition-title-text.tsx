export function ExhibitionTitleText({ text }: { text: string }) {
  return text.split(/(Together in Motion: Black and Indigenous Futures in Treaty 1 Territory|En mouvement ensemble : avenirs noirs et autochtones sur le territoire du Traité no 1|Together in Motion|En mouvement ensemble)/g).map((part, index) =>
    part === "Together in Motion: Black and Indigenous Futures in Treaty 1 Territory" || part === "En mouvement ensemble : avenirs noirs et autochtones sur le territoire du Traité no 1"
      || part === "Together in Motion" || part === "En mouvement ensemble"
      ? <em key={index} className="italic">{part}</em>
      : part,
  );
}
