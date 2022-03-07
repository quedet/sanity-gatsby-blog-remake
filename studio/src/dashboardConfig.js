export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6225deb5d049c254831185e4",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-remake-studio",
                  apiId: "e460d5d2-fc0b-4ee6-84b1-ebf0a3440bf0",
                },
                {
                  buildHookId: "6225deb597c7911b4da8d252",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-remake",
                  apiId: "93a507a6-dd51-4d1e-a102-fbb3e388b3b1",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/quedet/sanity-gatsby-blog-remake",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-remake.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
