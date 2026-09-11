# NBCS readiness preview — September 11, 2026

Publication of the reviewed local build was authorized on September 11, 2026. The release is based on the current production commit and includes the final venue-map placement above “Also happening in Winnipeg”.

## Protected live version

The release base is `add3c23dfeb6ce1db1c43966bddb73b282b13f56`. That commit contains the separately authorized Canada Life description correction in English and French. The readiness build preserves that correction. Do not roll back to the older `65e55bd` snapshot unless intentionally reverting that correction too.

The release branch is `codex/nbcs-readiness-preview`, for the existing NBCS2026/NBCS2026 repository and Vercel project. Check its deployment before advancing main. Preserve the existing domains, environment variables and deployment-protection settings.

## Build and review

1. Extract the saved source archive into its own folder, or check out the preview branch after its upload is approved.
2. Use the Node version supported by the existing Vercel project. Run `npm ci`, `npm test`, and `npm run build`. The lockfile is authoritative; do not regenerate dependencies during deployment.
3. Run `npm start` for the production-mode local preview, or review the Vercel Preview deployment produced by this branch.
4. Review `/en/program` and `/fr/program`, all three days, the theme explorer, and a shared link such as `/fr/program?day=1#day2-d2-am-1`. The anchor must select Saturday and open the health session even though the query is stale.
5. Review `/en/ticket#opening-ceremony-rsvp` and the French equivalent, plus the homepage artwork on a phone and desktop.

## Before any approved promotion

Confirm `RESEND_API_KEY` is configured as a server-only Vercel variable for the deployment environment. The obsolete `NEXT_PUBLIC_RESEND_API_KEY` fallback is deliberately removed. Never paste the key into GitHub or browser-visible code. Preserve existing sender and `FEEDBACK_RECIPIENT_EMAIL` values. A missing provider configuration returns a safe error and retains form entries; it must not claim success.

No real contact, feedback, survey, media, RSVP or ticket submission was made during automated testing. Tests mock the email provider. The existing server-only RESEND_API_KEY was confirmed present for all Vercel environments before release. End-to-end email delivery still requires an explicitly authorized staff delivery check. Ticket purchases and actual attendee registrations were not performed.

Review the exact candidate commit and approve it before merging to `main` or promoting a deployment. Verify both public domains and both languages after promotion. If necessary, use Vercel's rollback to the deployment for `add3c23d`. There are no database migrations in this candidate.

## Staff updates

- Official session text, speakers, times and rooms remain in the six `data/day*-schedule*.ts` files. Edit English and French together, retain IDs, and review the automatically generated preview before publishing.
- `data/program.ts` supplies the schedule, theme links, feedback choices and opening RSVP from those same records.
- Theme membership alone is in `data/program-themes.ts`; do not copy session descriptions into that file.
- Interpretation links remain in the existing session interpretation data. All 31 mappings pass the integrity check.
- The opening RSVP continues to use the existing Microsoft Form. Staff can edit questions and manage responses in Microsoft Forms without editing the website. Form ownership, repeat-response restrictions and capacity remain managed there; this website does not claim or invent availability.
- Youth waitlist continues to use the existing Google Form. Bizzabo event and flow IDs are unchanged.

## Operational limits

Form throttling is deliberately lightweight: 20 new attempts per ten-minute window per hashed IP per server instance. This is not a distributed global quota. Duplicate retries use a browser submission key, bounded server coalescing and Resend idempotency keys. Provider idempotency has its own retention period; it is not permanent RSVP deduplication. See [Resend's documented behavior](https://resend.com/docs/dashboard/emails/idempotency-keys).

The CSP limits objects, base URLs and who may frame this site. It does not restrict required third-party scripts, media or outbound frames. Vercel manages HTTPS; no account-level HSTS or protection changes were made.

## Added assets and follow-up review

The source archive now includes the user-supplied Manitoba Opera logo and Treemonisha ad, the official Roots in Harmony logo, and the complete original Sandy and Nora podcast artwork. When a public source export is explicitly approved, include these four binary assets as well as the text changes. `work/readiness-asset-paths.json` lists them; `work/readiness-asset-blobs.json` contains base64 blob inputs. Create binary Git blobs and use their returned SHAs in the tree; do not pass binary content through UTF-8 text tree entries. The portable ZIP already includes them correctly.

Also review `/en/summit-week#treemonisha`, the “Also happening in Winnipeg” section and its Sandy and Nora card, `/fr/summit-week`, mobile community partner sizing, desktop French main navigation, and all seven mobile theme buttons. Bizzabo’s direct registration fallback has been verified in English and French without entering attendee information or placing an order. The event/flow IDs are unchanged. Provider-owned French availability labels still need attention in Bizzabo’s settings.
