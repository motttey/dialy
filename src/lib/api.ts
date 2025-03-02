import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = (dir: string) => join(process.cwd(), dir);

export function getPostSlugs(dir?: string) {
  return fs.readdirSync(postsDirectory(dir ? dir : "_posts"));
}

export function getPostBySlug(slug: string, dir?: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory(dir ? dir : "_posts"), `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(dir?: string): Post[] {
  const slugs = getPostSlugs(dir);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, dir))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
