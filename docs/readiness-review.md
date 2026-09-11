# NBCS refinement and production review — September 11, 2026

## Implemented

- Refined the current local readiness build; retained official programme copy, artwork, fonts, colours, bilingual routes and existing integrations. Reviewed the supplied [Matwa reference](https://thematwagroup.com/counselling-and-psychotherapy.html) for editorial rhythm only.
- Programme hero: exactly three uppercase lines with periods in English and French. A restrained stagger gives the approved words more emphasis.
- Seven-destination Programme navigation includes a separate Opening Ceremony link. Public labels correctly distinguish Friday Power of Youth Day, Saturday Day 1 and Sunday Day 2. Permanent day/session URL IDs remain compatible with existing links.
- The chronological programme remains first. Desktop theme wheel now contains the existing full-colour Summit mark without text; mobile uses a compact native selector plus seven numbered, keyboard-accessible theme buttons with 44px touch targets. Labels and selected states do not rely on colour alone.
- Summit Week has all seven date anchors, active navigation, chronological event ordering and compact festival appearances; its full festival description is shown once in an expandable overview. Existing dates, event wording, registration links and Sunday-after-Summit guidance remain intact.
- Registration navigation omits Next step. Existing Opening Ceremony RSVP stays directly below Youth Waitlist and derives its timing and Microsoft Form from the current programme record.
- About navigation says Summit Advisory Council before Voices. The council section is in that order; its heading, introduction and acknowledgement now consistently use Summit Advisory Council / Conseil consultatif du Sommet, as subsequently requested.
- Long-page navigation covers About, Programme, Registration, Summit Week, Plan, Exhibitors, Media, Feedback and Partners. The shorter Contact page does not gain an unnecessary rail.
- Complete homepage tree roots remain visible. The tablet artwork/background join is softened without enlarging the hero. The compact sticky logo is protected from legacy tablet header-sizing rules.

## Programme taxonomy

28 substantive sessions, each assigned to exactly one primary theme. No duplicate membership. Ceremonies, receptions, registration, general networking, meals, breaks and rehearsal are excluded. The Youth Day kick-off remains in the chronological programme because its description is primarily welcome/performance rather than a substantive thematic session.

### Justice, Rights & Community Safety

- Power of Youth Day: Fighting Racism: From Awareness to Action (day1:session-8)
- Justice Reform, Legal Accountability, and Community Safety Beyond Policing (day2:d2-am-4)
- Plenary Session — Black Justice Strategies (day2:plenary-afternoon)
- Anti-racism in sport: Equity, Representation and Accountability (day2:d2-pm-5)

### Health, Wellness & Community Care

- Power of Youth Day: Health and Empowerment (day1:session-4)
- Power of Youth Day: Heal to Lead: Mental Health and Black Youth (day1:session-9)
- Anti-Black Racism in Healthcare: Structural Racism and Health Inequities (day2:d2-am-1)
- Black Mental Health Care: From Investment and Action to Systemic Change (day2:d2-pm-3)

### Education, Leadership & Representation

- Power of Youth Day: Leadership and Governance (day1:session-1)
- Black Women, Girls, and Gender-Diverse Communities: Safety, Leadership, and Equity (day2:d2-am-5)
- Anti-Black Racism and Educational Equity Across Canada (day2:d2-pm-1)
- Beyond the Seat: Leadership, Influence and Power (day2:d2-pm-2)

### Economic Power, Work & Housing

- Power of Youth Day: Economic Development and Entrepreneurship (day1:session-3)
- Power of Youth Day: Building Wealth Starting Today (day1:session-10)
- Modernizing Employment Equity with the African-Canadian Senate Group (day2:d2-am-3)
- Black-Led Housing Solutions: Affordability, Stability, and Belonging (day2:d2-am-6)
- Pathways to Success: Employment and Entrepreneurship supports for Black Youth (day2:d2-pm-7)

### Technology, Media & Future Skills

- Power of Youth Day: Innovation, Technology and Future Skills (day1:session-2)
- Power of Youth Day: Your Roadmap to CBC: "How to Pitch" by CBC (day1:session-12)
- Anti-Blackness in AI and the Digital Public Sphere (day2:d2-am-7)

### Arts, Culture & Narrative

- Power of Youth Day: Culture, Art and Narrative Memory (day1:session-5)
- Power of Youth Day: Art as an Act of Resistance (day1:session-7)
- Power of Youth Day: Our Voices Across Time (day1:session-11)
- Narrative Sovereignty: Black Cultural Infrastructure and the Power of Story (day2:d2-am-2)
- The Arts & Culture Scene in Canada: Shifting from Surviving to Thriving (day2:d2-pm-6)

### Policy, Governance & Collective Action

- Power of Youth Day: Plenary Session — Black and Indigenous Intergenerational Dialogue: Coming Together for the Healing of the World (day1:plenary-afternoon)
- Opening Plenary — Canada and the Second International Decade for People of African Descent (day2:opening-plenary)
- Policy Change and Government Accountability for Black Communities (day2:d2-pm-4)

## Issues repaired

- Replaced overlapping theme arrays with a single primary theme per session.
- Replaced date-based youth prefixes with shared block-type metadata; Opening Ceremony and other Friday logistics never acquire that prefix.
- Corrected day numbering in the programme navigation, visible day tabs and feedback session choices.
- Normalized stale day query parameters after direct cross-day links, preventing later section navigation from reverting to the wrong day.
- Corrected the tablet sticky-logo clipping, homepage artwork join and slight French hero clipping at 320px.
- Localized remaining Programme gallery image descriptions. Kept existing missing-headshot handling, stable speaker keys and disclosure behaviour.
- Added safe handling for missing festival data and failed decorative event images without hiding event details.

## Security and privacy

The prior readiness protections are retained: server-side validation and size limits, HTML escaping, same-origin checks, honeypots, bounded per-instance throttling, duplicate-submit coalescing, provider idempotency and safe errors. Anonymous feedback omits identity from delivered email. Public APIs return status/messages, not attendee lists or submissions. Browser tests did not create attendee records or send real messages.

No credential-pattern matches or tracked environment files were found in the candidate source. This is a source-level check, not certification of repository history or account settings. Server email configuration stays server-only; missing provider configuration fails safely. The existing minimal CSP, no-sniff, framing and referrer headers preserve legitimate third-party embeds. No new hosting, HSTS, account, production environment or deployment-protection changes were made.

The dependency audit reports **zero known vulnerabilities**. No additional libraries or framework upgrades were introduced in this refinement. The earlier targeted security updates and authoritative lockfile are retained. Throttling remains a lightweight per-instance measure, not a distributed global quota.

## Verification and production status

- Production build and TypeScript pass; 12 targeted tests pass, covering bilingual IDs, one-theme membership, metadata-based naming, correct day labels, all seven week dates, 31 interpretation mappings, RSVP data, Canada Life text and server-side form protections.
- All 22 English/French routes return 200. No duplicate static IDs, missing local anchor destinations, missing alt attributes or unsafe new-tab links were found in rendered routes. Programme and registration pages remain dynamically rendered, avoiding a newly introduced long-lived page cache.
- Browser review covers desktop keyboard theme selection, opening-ceremony navigation, cross-day session expansion/focus, French mobile selector, responsive home artwork and seven-date Summit Week navigation. Reviewed widths include 320, 390, 768 and 1280 pixels. Final checks also confirmed menu Escape/focus return, the ordered About and registration rails, localized registration iframe titles, Friday and Saturday theme links, and a French-to-English switch retaining the open session. Session headings settled at approximately 184px, below the mobile rail ending at 156px. The stale query now normalizes to the displayed day before subsequent section navigation.
- The build emits a local webpack cache-snapshot warning; compilation and production output succeed. Full-repository lint still has inherited issues in older components. The changed core navigation/theme modules have no lint errors; small raw logo images have non-blocking image-optimization suggestions.
- Updated external URL checks covered 88 destinations: 81 successful, five blocked automated requests and two hotel-site timeouts. There are no remaining confirmed 404 or DNS-failure links in this checked set. Blocked requests and timeouts are not treated as proof of dead links.
- Production-mode preview is local at http://127.0.0.1:3004/en/program. The current live site was not changed. See preview-deployment.md for the existing protected production baseline and promotion steps.

## Remaining editorial and operational questions

1. **Se construire pour bâtir son avenir** is absent from both current schedules. No session was restored or invented. Supply the current approved bilingual record if it should return.
2. Automated requests to five hotel/transport/venue destinations were blocked, and the Hilton/Choice hotel pages timed out. Retain legitimate booking links unless confirmed unavailable. Sankofa Gifts (404), Kokeb Restaurant (DNS failure) and West Natural Good (DNS failure) no longer have website links; their listings and available directions remain.
3. Existing repeated historical photographs remain flagged from the previous pass. No new duplicate photography or generated images were added.
4. Bizzabo’s live embedded English ticket selector and its direct English/French registration flows were verified read-only. Both show the youth pass sold out and the general pass selectable. The provider’s five-second iframe-response warning is not itself evidence of registration failure; local embedded loading can still stall. The preview retains retry handling and now always offers the verified direct registration flow in a new tab. Event/flow IDs, pricing, availability, API integration and waitlist are unchanged. Bizzabo’s French flow still displays “Sold out” and “Sale ends…” in English; those labels require review in Bizzabo settings. No purchase, attendee registration, real email delivery or form submission was performed. Google/Microsoft permissions, staff delivery and final checkout still need an authorized operational check before production promotion.
5. This practical accessibility review includes keyboard, labels, focus, ARIA, contrast, responsive layout and reduced-motion implementation; it is not a full assistive-technology certification or penetration test.


## Side Events and partner follow-up

- Added Roots in Harmony and Manitoba Opera to Community Partners. Manitoba Opera uses the user-supplied logo; Roots in Harmony uses the Winnipeg choir’s [official logo](https://www.rootsinharmony.ca/). The logo assets are retained unchanged; responsive containers handle their display. Existing requested partner order, including OEDD/ANSDPAD near the end, is preserved.
- Main navigation and footer now say Side Events / Événements parallèles; the route remains `/summit-week`. Hero says NBCS 2026 Side Events / SPCN 2026 Événements parallèles. “Experience Winnipeg during Summit Week” and its French equivalent remain unchanged.
- Grouped Sandy and Nora and the supplied Treemonisha artwork under “Also happening in Winnipeg” / “À découvrir aussi à Winnipeg”, below the venue map, following the Summit Week event listings. The group heading remains in the page, but its menu item is removed. Treemonisha retains its page-navigation link. Treemonisha is first, with Sandy and Nora below it at every viewport size. [Manitoba Opera’s official page](https://mbopera.ca/whats-on/scott-joplins-treemonisha-a-musical-reimagining/) confirms November 21, 25 and 27, 2026 at Centennial Concert Hall. It is clearly dated in November and is not added to September’s daily schedule. Artwork is shown in full at its original 2:1 ratio. Replaced the paraphrased description with a short, verbatim English excerpt from Manitoba Opera’s “The Music” section (beginning “Inspired by Joplin’s vision”), plus a direct French translation. No new story summary is included.
- Listed [Sandy and Nora live in Winnipeg](https://thepointofsale.com/tickets/q3e260920001?lang=en) in the separate Winnipeg section, with its date and time preserved: Sunday, September 20, 4:30–6:45 p.m.; doors at 4:15 p.m. It no longer repeats in the daily Summit Week listings. Venue is Deer Lodge Community Club, 323 Bruce Avenue, Winnipeg, MB. The ticket page mistakenly labels the province QC; the [venue’s own site](https://deerlodgecommunityclub.ca/) confirms Manitoba. The event description is sourced from the ticket page. Replaced its pre-cropped image with the complete original square artwork from the podcast feed linked by sandyandnora.com: https://assets.pippa.io/shows/61b766901695625e8ae95092/show-cover.jpg. It is shown whole with contain sizing; both faces and all artwork text are visible. Sandy’s card puts the artwork beside its details on large screens and above them on mobile. The event has its own ticket and directions links; the shared live Google My Map was not edited from this preview.
- Shared page rails now animate the active marker between sections, retain semantic links and keyboard focus, and respect reduced-motion preferences. Main menu links gain a restrained animated underline. The persistent site menu remains accessible while navigating page sections. Desktop header spacing accommodates the longer French Side Events label.
- Numbered mobile theme controls update the same selection and session list as the dropdown and desktop wheel. Numbers remain visible, buttons announce their full theme names and pressed state, and the selected heading is announced politely.
- The source package includes all four new image assets. Build, route audit, integrity tests and responsive review are recorded in the verification section above. Live production and hosting settings remain untouched.

## Maintenance

| Update | Authoritative location |
| --- | --- |
| Session titles, descriptions, speakers, rooms and times | data/day1-schedule.ts through data/day3-schedule-fr.ts; update both languages and preserve IDs |
| Public day labels, block types, shared programme registry | data/program.ts |
| Primary theme membership and bilingual theme labels | data/program-themes.ts |
| Interpretation/caption links | data/program-wordly-links.ts |
| Summit Week dates, times, venues and external links | data/summit-week-events.ts |
| Summit Week presentation/date navigation | components/summit-week-event-list.tsx |
| Opening Ceremony RSVP | Opening-ceremony record in day1 schedules; components/opening-ceremony-rsvp.tsx; existing Microsoft Form |
| Youth waitlist and Bizzabo | app/[locale]/ticket/page.tsx and components/bizzabo-registration-widget.tsx; existing form owners retain response settings |
| Feedback choices and server processing | components/feedback-form.tsx, app/api/feedback/route.ts, lib/form-security.ts |
| Programme navigation | components/program-navigation.tsx and shared labels in data/program.ts |
| Other page-navigation labels | Corresponding app/[locale]/page folder; shared components/about-section-nav.tsx |
| Visual refinements | app/refinements.css and components/program-theme-explorer.css |

Run npm test and npm run build before promotion. Review both language versions and a cross-day link after any programme edit. The source archive contains the current local files and lockfile, without local credentials or build caches.
