import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

class PostService {
  private dir: string;

  constructor(dir: string = "_posts") {
    this.dir = join(process.cwd(), dir);
  }

  public getPostSlugs(): string[] {
    const dirents = fs.readdirSync(this.dir, { withFileTypes: true });
    const files = dirents.flatMap((dirent) => {
      if (dirent.isDirectory()) {
        return fs
          .readdirSync(join(this.dir, dirent.name))
          .map((file) => join(dirent.name, file));
      }
      return [dirent.name];
    });
    return files.filter((file) => file.endsWith(".md"));
  }

  public getPostBySlug(slug: string): Post {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(this.dir, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { ...data, slug: realSlug, content } as Post;
  }

  public getAllPosts(): Post[] {
    return this.getPostSlugs()
      .map((slug) => this.getPostBySlug(slug))
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  }
}

export default PostService;
