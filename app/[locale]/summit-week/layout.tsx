import { pageMetadata } from "@/lib/seo";
export async function generateMetadata({ params }: { params: Promise<{locale: string}> }) { return pageMetadata((await params).locale, "/summit-week"); }
export default function PageLayout({children}: {children: React.ReactNode}) { return children; }
