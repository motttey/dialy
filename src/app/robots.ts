import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "GPTBot",
        disallow: ["/", "/dialy"],
      },
      {
        userAgent: "Googlebot",
        allow: ["/", "/dialy"],
      },
      // 効かないかも
      {
        userAgent: "ia_archiver",
        disallow: ["/", "/dialy"],
      },
    ],
  };
}
