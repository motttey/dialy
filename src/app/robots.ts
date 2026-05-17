import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "GPTBot",
        disallow: ["/", "/diary"],
      },
      {
        userAgent: "Googlebot",
        allow: ["/", "/diary"],
      },
      // 効かないかも
      {
        userAgent: "ia_archiver",
        disallow: ["/", "/diary"],
      },
    ],
  };
}
