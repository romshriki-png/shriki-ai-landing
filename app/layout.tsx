import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shriki.ai Automations — אוטומציות AI לעסקים",
  description: "ייעוץ ואוטומציות AI מותאמות אישית לעסקים B2B. חסכו זמן, הגדילו הכנסות, עבדו חכם יותר.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="h-full">
      <body className="min-h-full flex flex-col bg-[#080C1F] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
