import { Noto_Serif_JP } from "next/font/google";
import markdownStyles from "./markdown-styles.module.css";

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

export function PostBody({ content }: Props) {
  return (
    <div className={`mx-auto max-w-full	lg:max-w-4xl ${NotoSerifJP.className}`}>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
