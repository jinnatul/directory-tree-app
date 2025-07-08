import React, { useState } from "react";
import type { TreeNodeData } from "@/types/TreeNode";

type TreeNodeProps = {
  node: TreeNodeData;
  fetchChildren: (path: string) => Promise<TreeNodeData[]>;
  onDoubleClick: (path: string) => void;
};

export default function TreeNode({
  node,
  fetchChildren,
  onDoubleClick,
}: TreeNodeProps) {
  const [expanded, setExpanded] = useState(false);
  const [children, setChildren] = useState<TreeNodeData[]>([]);

  const toggle = async () => {
    if (!expanded && node.hasChildren && children.length === 0) {
      const fetched = await fetchChildren(node.path);
      setChildren(fetched);
    }
    setExpanded(!expanded);
  };

  return (
    <li>
      <div
        onClick={toggle}
        onDoubleClick={() => onDoubleClick(node.path)}
        style={{ cursor: "pointer" }}
      >
        {node.hasChildren ? (expanded ? "▼" : "▶") : "•"} {node.name}
      </div>
      {expanded && children.length > 0 && (
        <ul>
          {children.map((child) => (
            <TreeNode
              key={child.path}
              node={child}
              fetchChildren={fetchChildren}
              onDoubleClick={onDoubleClick}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
