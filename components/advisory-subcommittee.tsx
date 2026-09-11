import { ADVISORY_SUBCOMMITTEE } from "@/data/advisory-subcommittee";

export function AdvisorySubcommittee({ locale }: { locale: string }) {
  const isFr = locale === "fr";

  return (
    <section id="summit-advisory" className="bg-[#FAF6F7] px-5 py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-9 max-w-4xl">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-[#8C0C3A]">
            {isFr ? "Avec reconnaissance" : "With gratitude"}
          </p>
          <h2 className="mt-3 font-heading text-[clamp(30px,4vw,52px)] font-black leading-tight text-[#1E1E1E]">
            {isFr
              ? "Conseil consultatif du Sommet"
              : "Summit Advisory Council"}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#1E1E1E]/78 sm:text-lg">
            {isFr
              ? "Le Conseil consultatif du Sommet réunit des leaders communautaires, des organismes et des institutions du Manitoba et de partout au Canada afin d’orienter le 5e Sommet pancanadien des communautés noires. Ses membres contribuent à l’orientation du programme, à la mobilisation communautaire, aux partenariats locaux et au rayonnement, afin que le Sommet reflète les priorités, les histoires et les réalités vécues des communautés qu’il sert. Leur travail incarne l’approche de coconstruction au cœur du Sommet : les communautés ne sont pas simplement invitées à participer, elles contribuent à bâtir le rassemblement lui-même."
              : "The Summit Advisory Council brings together community leaders, organizations and institutions from across Manitoba and Canada to shape the direction of the 5th National Black Canadians Summit. Its members contribute to program orientation, community engagement, local partnerships and outreach, ensuring that the Summit reflects the priorities, histories and lived realities of the communities it serves. Their work embodies the co-construction approach at the heart of the Summit: communities are not simply invited to attend; they help build the gathering itself."}
          </p>
          <p className="mt-4 font-bold text-[#5D1831]">
            {isFr
              ? "Nous remercions chaleureusement les membres du Conseil consultatif du Sommet."
              : "We gratefully acknowledge the members of the Summit Advisory Council."}
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[#E8D4DB] bg-white shadow-[0_16px_45px_rgba(93,24,49,0.06)]">
          <div className="hidden grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] bg-[#5D1831] px-6 py-4 text-sm font-black uppercase tracking-[0.1em] text-white sm:grid">
            <span>{isFr ? "Nom" : "Name"}</span>
            <span>
              {isFr ? "Organisme affilié" : "Affiliated organization"}
            </span>
          </div>
          <ul>
            {ADVISORY_SUBCOMMITTEE.map((member, index) => (
              <li
                key={member.name}
                className={`grid gap-1 border-t border-[#E8D4DB] px-6 py-4 first:border-t-0 sm:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] sm:gap-6 ${index % 2 === 1 ? "bg-[#FAF6F7]/65" : "bg-white"}`}
              >
                <span className="font-bold text-[#5D1831]">{member.name}</span>
                <span className="text-sm leading-relaxed text-[#1E1E1E]/75 sm:text-base">
                  {member.organization}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
