import fs from "fs";
import path from "path";

export interface Frontmatter {
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  tech?: string[];
  link?: string;
  cover?: string;
}

export interface ContentItem {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
}

const contentDir = path.join(process.cwd(), "content");

function parseFrontmatter(raw: string): { frontmatter: Frontmatter; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { frontmatter: { title: "Untitled", date: "" }, content: raw };
  }

  const yamlBlock = match[1];
  const content = match[2].trim();
  const frontmatter: Record<string, unknown> = { title: "Untitled", date: "" };

  for (const line of yamlBlock.split("\n")) {
    const sep = line.indexOf(":");
    if (sep === -1) continue;
    const key = line.slice(0, sep).trim();
    let value: unknown = line.slice(sep + 1).trim();

    // Parse arrays: [item1, item2]
    if (typeof value === "string" && value.startsWith("[") && value.endsWith("]")) {
      value = value.slice(1, -1).split(",").map((s) => s.trim().replace(/^["']|["']$/g, ""));
    }
    // Remove quotes
    if (typeof value === "string") {
      value = value.replace(/^["']|["']$/g, "");
    }

    frontmatter[key] = value;
  }

  return {
    frontmatter: frontmatter as unknown as Frontmatter,
    content,
  };
}

export function getAllItems(type: "projects" | "blog"): ContentItem[] {
  const dir = path.join(contentDir, type);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  const items = files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const slug = file.replace(/\.md$/, "");
    const { frontmatter, content } = parseFrontmatter(raw);
    return { slug, frontmatter, content };
  });

  return items.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export function getItem(type: "projects" | "blog", slug: string): ContentItem | null {
  const filePath = path.join(contentDir, type, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { frontmatter, content } = parseFrontmatter(raw);
  return { slug, frontmatter, content };
}
