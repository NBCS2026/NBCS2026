// Attendee links from NBCS 2026 - Wordly.xlsx, Sheet1 column F.
// Keys use the shared English/French schedule IDs.
// Row 33 has no matching current session; do not assign its link elsewhere.
export const PROGRAM_WORDLY_LINKS: Record<string, { url: string; sourceRow: number }> = {
  "day1:opening-plenary": { url: "https://attend.wordly.ai/join/JOXN-5221", sourceRow: 5 },
  "day1:plenary-afternoon": { url: "https://attend.wordly.ai/join/CMNW-6116", sourceRow: 6 },
  "day1:opening-ceremony": { url: "https://attend.wordly.ai/join/DDAG-3310", sourceRow: 7 },
  "day2:opening-plenary": { url: "https://attend.wordly.ai/join/UCWN-3398", sourceRow: 8 },
  "day2:plenary-afternoon": { url: "https://attend.wordly.ai/join/VJRA-2541", sourceRow: 9 },
  "day3:closing-ceremony": { url: "https://attend.wordly.ai/join/XNYV-4425", sourceRow: 10 },
  "day1:session-1": { url: "https://attend.wordly.ai/join/OGDL-9852", sourceRow: 12 },
  "day1:session-8": { url: "https://attend.wordly.ai/join/FWDA-8103", sourceRow: 13 },
  "day2:d2-am-6": { url: "https://attend.wordly.ai/join/NSHR-7925", sourceRow: 14 },
  "day2:d2-pm-1": { url: "https://attend.wordly.ai/join/DKRK-2145", sourceRow: 15 },
  "day1:session-2": { url: "https://attend.wordly.ai/join/MBTR-8407", sourceRow: 17 },
  "day1:session-9": { url: "https://attend.wordly.ai/join/SMEQ-3712", sourceRow: 18 },
  "day2:d2-am-2": { url: "https://attend.wordly.ai/join/NVHY-4380", sourceRow: 19 },
  "day2:d2-pm-4": { url: "https://attend.wordly.ai/join/FUKE-3817", sourceRow: 20 },
  "day1:session-3": { url: "https://attend.wordly.ai/join/PSDL-2281", sourceRow: 22 },
  "day1:session-10": { url: "https://attend.wordly.ai/join/FCLH-1345", sourceRow: 23 },
  "day2:d2-am-4": { url: "https://attend.wordly.ai/join/GSRB-4833", sourceRow: 24 },
  "day2:d2-pm-7": { url: "https://attend.wordly.ai/join/NQYZ-8290", sourceRow: 25 },
  "day1:session-4": { url: "https://attend.wordly.ai/join/LCBB-0292", sourceRow: 27 },
  "day1:session-11": { url: "https://attend.wordly.ai/join/ELJT-9142", sourceRow: 28 },
  "day2:d2-am-1": { url: "https://attend.wordly.ai/join/GLFY-1950", sourceRow: 29 },
  "day2:d2-pm-3": { url: "https://attend.wordly.ai/join/KVCZ-9928", sourceRow: 30 },
  "day1:session-5": { url: "https://attend.wordly.ai/join/EQBE-0925", sourceRow: 32 },
  "day2:d2-am-5": { url: "https://attend.wordly.ai/join/AGYA-1059", sourceRow: 34 },
  "day2:d2-pm-5": { url: "https://attend.wordly.ai/join/ZKWN-0690", sourceRow: 35 },
  "day1:session-7": { url: "https://attend.wordly.ai/join/NOEG-3917", sourceRow: 37 },
  "day2:d2-am-7": { url: "https://attend.wordly.ai/join/UCLG-3546", sourceRow: 38 },
  "day2:d2-pm-6": { url: "https://attend.wordly.ai/join/GNWR-5044", sourceRow: 39 },
  "day1:session-12": { url: "https://attend.wordly.ai/join/XCHF-9688", sourceRow: 41 },
  "day2:d2-am-3": { url: "https://attend.wordly.ai/join/ODMK-9341", sourceRow: 42 },
  "day2:d2-pm-2": { url: "https://attend.wordly.ai/join/PEOB-9485", sourceRow: 43 },
};

export function getProgramWordlyLink(day: string, sessionId: string) {
  return PROGRAM_WORDLY_LINKS[`${day}:${sessionId}`]?.url;
}
