export const config = {
  domainSource: "https://www.fana.club", // Your WeWeb app preview link
  patterns: [
      {
          pattern: "/influencer/[^/]+",
          metaDataEndpoint: "https://pktcxwwyadqahlmajzfh.supabase.co/rest/v1/influencer_metadata?slug=eq.{slug}&select=title,description,image,keywords"
      }
  ]
};
