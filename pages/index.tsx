import { useEffect, useState } from "react";
import TreeNode from "@/components/TreeNode";
import AddressBar from "@/components/AddressBar";
import type { TreeNodeData } from "@/types/TreeNode";

export default function Home() {
  const [rootPath, setRootPath] = useState("/");
  const [nodes, setNodes] = useState<TreeNodeData[]>([]);

  const fetchChildren = async (path: string): Promise<TreeNodeData[]> => {
    const res = await fetch(`/api/tree?path=${encodeURIComponent(path)}`);
    return await res.json();
  };

  const loadRoot = async (path: string) => {
    const data = await fetchChildren(path);
    setNodes(data);
    setRootPath(path);
    window.history.pushState({}, "", path);
  };

  useEffect(() => {
    const initialPath =
      window.location.pathname === "/" ? "/Projects" : window.location.pathname;
    if (initialPath === "/Projects") {
      window.history.replaceState({}, "", "/Projects");
    }
    loadRoot(initialPath);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <AddressBar path={rootPath} onChange={loadRoot} />
      <ul>
        {nodes.map((node) => (
          <TreeNode
            key={node.path}
            node={node}
            fetchChildren={fetchChildren}
            onDoubleClick={loadRoot}
          />
        ))}
      </ul>
    </div>
  );
}
