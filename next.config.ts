import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      // rss-filter-bot 동적 포스트 이미지 소스
      { protocol: "https", hostname: "cdn-images-1.medium.com", pathname: "/**" },
      { protocol: "https", hostname: "miro.medium.com", pathname: "/**" },
      { protocol: "https", hostname: "www.designboom.com", pathname: "/**" },
      { protocol: "https", hostname: "www.creativeboom.com", pathname: "/**" },
      { protocol: "https", hostname: "www.core77.com", pathname: "/**" },
      { protocol: "https", hostname: "www.yankodesign.com", pathname: "/**" },
      { protocol: "https", hostname: "www.dezeen.com", pathname: "/**" },
      { protocol: "https", hostname: "design-milk.com", pathname: "/**" },
      { protocol: "https", hostname: "abduzeedo.com", pathname: "/**" },
      { protocol: "https", hostname: "thedieline.com", pathname: "/**" },
      { protocol: "https", hostname: "www.itsnicethat.com", pathname: "/**" },
      { protocol: "https", hostname: "www.creativebloq.com", pathname: "/**" },
      { protocol: "https", hostname: "www.figma.com", pathname: "/**" },
      { protocol: "https", hostname: "www.smashingmagazine.com", pathname: "/**" },
      { protocol: "https", hostname: "speckyboy.com", pathname: "/**" },
      { protocol: "https", hostname: "hackaday.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
