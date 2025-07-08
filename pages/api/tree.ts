import type { NextApiRequest, NextApiResponse } from "next";
import { treeData } from "@/lib/treeData";

const joinPath = (base: string, child: string): string => {
  if (base === "/") return `/${child}`;
  return `${base}/${child}`;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const path = decodeURIComponent((req.query.path as string) || "/");
  const children = treeData[path] || [];

  const hasChildren = (child: string) => {
    const childPath = joinPath(path, child);
    return !!treeData[childPath];
  };

  res.status(200).json(
    children.map((name) => ({
      name,
      path: joinPath(path, name),
      hasChildren: hasChildren(name),
    }))
  );
}
