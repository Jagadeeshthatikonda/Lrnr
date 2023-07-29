import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./App.css";

interface TreeNode {
  id: number;
  label: string;
  children: number[];
  isOpen: boolean;
}

interface TreeNodeComponentProps {
  node: TreeNode;
  toggleNode: (nodeId: number) => void;
  addNewNode: (nodeId: number) => void;
  nodesMap: Map<number, TreeNode>;
}

const TreeNodeComponent: React.FC<TreeNodeComponentProps> = ({
  node,
  toggleNode,
  addNewNode,
  nodesMap,
}) => {
  return (
    <li>
      {node.children.length > 0 && (
        <span className="toggle-icon" onClick={() => toggleNode(node.id)}>
          {node.isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </span>
      )}
      {node.label}
      <button onClick={() => addNewNode(node.id)}>Add New Node</button>
      {node.isOpen && node.children.length > 0 && (
        <ul>
          {node.children.map(childId => (
            <TreeNodeComponent
              key={childId}
              node={nodesMap.get(childId)!}
              toggleNode={toggleNode}
              addNewNode={addNewNode}
              nodesMap={nodesMap}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

interface TreeProps {
  rootId: number;
  nodesMap: Map<number, TreeNode>;
  toggleNode: (nodeId: number) => void;
  addNewNode: (nodeId: number) => void;
}

export const Tree: React.FC<TreeProps> = ({
  rootId,
  nodesMap,
  toggleNode,
  addNewNode,
}) => {
  const rootNode = nodesMap.get(rootId);

  return (
    <ul className="tree">
      {rootNode && (
        <TreeNodeComponent
          node={rootNode}
          toggleNode={toggleNode}
          addNewNode={addNewNode}
          nodesMap={nodesMap}
        />
      )}
    </ul>
  );
};
