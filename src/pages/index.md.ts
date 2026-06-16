import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Jake Builds (@jake-builds)

Jake's personal blog and coding experiments. Every commit lands on GitHub for you to fork & remix.

## Navigation

- [About](/about.md)
- [Recent Posts](/posts.md)
- [Archives](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- Twitter: [@jakexshi](https://x.com/jakexshi)
- GitHub: [@jake-builds](https://github.com/jake-builds)
- Email: jake@jake-builds.github.io

---

*This is the markdown-only version of jake-builds.github.io. Visit [jake-builds.github.io](https://jake-builds.github.io) for the full experience.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
