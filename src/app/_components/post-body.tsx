import markdownStyles from "./markdown-styles.module.css";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import { Noto_Serif_JP } from "next/font/google";

type Props = {
  content: string;
};

const NotoSerifJP = Noto_Serif_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  // https://github.com/vercel/next.js/pull/44594
  variable: "--font-noto-sans-jp",
  preload: true,
  display: "swap",
});

// https://github.com/cure53/DOMPurify?tab=readme-ov-file#running-dompurify-on-the-server
export function PostBody({ content }: Props) {
  const window = new JSDOM("").window;
  const purify = DOMPurify(window);

  return (
    <div className={`mx-auto max-w-full lg:max-w-4xl ${NotoSerifJP.className}`}>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{
          __html: purify.sanitize(content),
        }}
      />
    </div>
  );
}
