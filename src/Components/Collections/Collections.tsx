import React from "react";

import { observer } from "mobx-react-lite";
import { Tooltip } from "react-tooltip";

import { NodeType } from "../../Constants/collections";
import { CollectionModel } from "../../store/CollectionModels/CollectionModel";

import "./styles.css";

interface CollectionsProps {
  selectedTab: string;
}

//TODO: MOBX Didn't configured properly used dom elements for achieving functioanlity
//TODO: Code need to be refactored as it is not in accordance with code guidelines

export const Collections = observer((props: CollectionsProps) => {
  const { selectedTab } = props;
  const collectionModel = new CollectionModel("DFIN", "CONTAINER_NODE_TYPE");
  let currentNode = React.useRef<CollectionModel | undefined>();
  let localValue = localStorage.getItem("collections");
  let valueObject = localValue ? JSON.parse(localValue) : undefined;
  if (valueObject) {
    collectionModel.getAndCreateCollectionModel(
      valueObject.collections,
      collectionModel
    );
  }

  function convertToHTML() {
    const treeContainer = document.getElementById("treeContainer");
    const htmlTree = buildHTMLTree([collectionModel]);
    if (treeContainer) treeContainer.innerHTML = "";
    treeContainer?.appendChild(htmlTree);
  }

  const isNodeTypeContainer = (nodeType: string): boolean =>
    nodeType === NodeType.ContainerNode;

  function addChild(nodeType: string) {
    if (!currentNode.current) return;
    const isCurrentNodeRoot = currentNode.current.id === "DFIN";
    const isContainerNode = isNodeTypeContainer(nodeType);
    let collectionName = isCurrentNodeRoot
      ? `collection.${currentNode.current.collections.length + 1}`
      : `${currentNode.current.id}.${
          currentNode.current.collections.length + 1
        }`;
    const treeContainer = document.getElementById("treeContainer");
    const newNode = document.createElement("li");
    newNode.classList.add("each-collection-list");
    const textNode = document.createElement("span");
    textNode.textContent = collectionName;
    const contentWIthIcon = document.createElement("div");
    contentWIthIcon.classList.add(
      "content-with-icon",
      isContainerNode ? "dummy-class-name" : "lead-node-selected-styles"
    );

    if (isContainerNode) {
      const chevronIconElement = document.createElement("i");
      chevronIconElement.classList.add(
        "fa",
        "fa-solid",
        "fa-chevron-up",
        "fa-2xs",
        "chevron-icon-color",
        "rotate"
      );
      contentWIthIcon.classList.add("collapsible");
      contentWIthIcon.appendChild(chevronIconElement);
      contentWIthIcon.addEventListener("click", function () {
        const chevronIconElement = contentWIthIcon.querySelector("i");
        chevronIconElement?.classList.toggle("down");
        var content = this.nextElementSibling;
        content?.classList.toggle("hide-class-name");
      });
    }
    contentWIthIcon.appendChild(textNode);

    const addNodeElement = document.createElement("i");
    if (isNodeTypeContainer(nodeType)) {
      addNodeElement.classList.add("fa", "fa-plus", "fa-light", "leaf-node");
      addNodeElement.setAttribute("data-tooltip-id", "add-leaf-node-tooltip");
      addNodeElement.setAttribute("data-tooltip-content", "Create Item");
      contentWIthIcon.appendChild(addNodeElement);
    }
    newNode.appendChild(contentWIthIcon);

    const parent =
      treeContainer?.querySelector(".selected") ||
      treeContainer?.querySelector(".selected-root");
    if (parent) {
      const childrenList = parent.querySelector("ul");
      const immediateChild = parent.querySelector("div");
      contentWIthIcon.style.paddingLeft = `${
        parseInt(immediateChild?.style.paddingLeft ?? "0") + 10
      }px`;
      contentWIthIcon.style.fontSize = "15px";
      if (!childrenList) {
        const ul = document.createElement("ul");
        ul.classList.add("collections-list");
        ul.addEventListener("click", e => {
          e.stopPropagation();
          const selectedNode = document.querySelector(".selected");
          if (selectedNode) {
            selectedNode.classList.remove("selected");
          }
          ul.classList.add("selected");
        });
        parent.appendChild(ul);
      }
      parent.querySelector("ul")?.appendChild(newNode);
    } else {
      document.getElementById("root")?.appendChild(newNode);
    }

    let newCollectionModel = new CollectionModel(collectionName, nodeType);
    currentNode?.current?.collections.push(newCollectionModel);
    newNode.addEventListener("click", e => {
      e.stopPropagation();
      const selectedNode = document.querySelector(".selected");
      const previousSelectedElement = document.querySelector(
        ".leaf-node-visibility"
      );
      if (previousSelectedElement)
        previousSelectedElement.classList.remove("leaf-node-visibility");
      addNodeElement.classList.add("leaf-node-visibility");

      if (selectedNode) {
        selectedNode.classList.remove("selected");
      }

      const addNodePlusElement = document.querySelector(".add-node");
      if (!isNodeTypeContainer(nodeType)) {
        addNodePlusElement?.classList.add("add-node-plus-visibility");
      } else {
        addNodePlusElement?.classList.remove("add-node-plus-visibility");
      }
      newNode.classList.add("selected");
      currentNode.current = newCollectionModel;
    });

    if (isNodeTypeContainer(nodeType)) {
      addNodeElement.addEventListener("click", e => {
        e.stopPropagation();
        addChild(NodeType.LeafNode);
      });
    }

    console.log(collectionModel, "collectionModel=");
    localStorage.setItem("collections", JSON.stringify(collectionModel));
  }

  function buildHTMLTree(tree: CollectionModel[], nestedCount = 0) {
    const ul = document.createElement("ul");
    ul.classList.add("collections-list");
    ul.addEventListener("click", e => {
      e.stopPropagation();
      const selectedNode = document.querySelector(".selected");
      if (selectedNode) {
        selectedNode.classList.remove("selected");
      }
      ul.classList.add("selected");
    });

    tree.forEach((node, index) => {
      console.log("empty", node);
      const isNodeRoot = node.id === "DFIN";
      const isContainerNode = isNodeTypeContainer(node.nodeType);
      const li = document.createElement("li");
      li.classList.add("each-collection-list");
      const textNode = document.createElement("span");
      textNode.textContent = node.id;
      const contentWIthIcon = document.createElement("div");
      contentWIthIcon.classList.add(
        "content-with-icon",
        isNodeRoot
          ? "root-node-class-name"
          : isContainerNode
          ? "dummy-class-name"
          : "lead-node-selected-styles"
      );
      contentWIthIcon.style.paddingLeft = `${10 * nestedCount}px`;
      contentWIthIcon.style.fontSize = "15px";
      const isNodeTypeContainerAndNotRootNode = isContainerNode && !isNodeRoot;
      const chevronIconElement = document.createElement("i");
      if (isNodeTypeContainerAndNotRootNode) {
        chevronIconElement.classList.add(
          "fa",
          "fa-solid",
          "fa-chevron-up",
          "fa-2xs",
          "chevron-icon-color",
          "rotate"
        );

        contentWIthIcon.appendChild(chevronIconElement);
        contentWIthIcon.classList.add("collapsible");
      }
      contentWIthIcon.appendChild(textNode);

      const addLeafNodeElement = document.createElement("i");
      if (isNodeTypeContainerAndNotRootNode) {
        addLeafNodeElement.classList.add(
          "fa",
          "fa-plus",
          "fa-light",
          "leaf-node"
        );
        addLeafNodeElement.setAttribute(
          "data-tooltip-id",
          "add-leaf-node-tooltip"
        );
        addLeafNodeElement.setAttribute("data-tooltip-content", "Create Item");

        addLeafNodeElement.addEventListener("click", e => {
          e.stopPropagation();
          addChild(NodeType.LeafNode);
        });

        contentWIthIcon.appendChild(addLeafNodeElement);
      }

      if (isNodeRoot) {
        const addNodeElement = document.createElement("i");
        addNodeElement.classList.add(
          "fa",
          "fa-plus",
          "fa-light",
          "add-node",
          "add-node-icon-styles"
        );
        addNodeElement.setAttribute(
          "data-tooltip-id",
          "add-container-node-tooltip"
        );
        addNodeElement.setAttribute(
          "data-tooltip-content",
          "Create Container"
        );
        addNodeElement.addEventListener("click", () => {
          const previousSelectedElement = document.querySelector(
            ".leaf-node-visibility"
          );
          if (previousSelectedElement)
            previousSelectedElement.classList.remove("leaf-node-visibility");
          addChild(NodeType.ContainerNode);
        });
        contentWIthIcon.appendChild(addNodeElement);
        currentNode.current = collectionModel;
        li.classList.add("selected-root");
      } else {
        contentWIthIcon.addEventListener("click", function (e) {
          e.stopPropagation();
          var content = this.nextElementSibling;
          const previousSelectedElement = document.querySelector(
            ".leaf-node-visibility"
          );
          if (previousSelectedElement)
            previousSelectedElement.classList.remove("leaf-node-visibility");

          chevronIconElement?.classList.toggle("down");
          content?.classList.toggle("hide-class-name");
          if (isContainerNode)
            addLeafNodeElement?.classList.add("leaf-node-visibility");
          const addNodePlusElement = document.querySelector(".add-node");
          if (!isContainerNode) {
            addNodePlusElement?.classList.add("add-node-plus-visibility");
          } else {
            addNodePlusElement?.classList.remove("add-node-plus-visibility");
          }
          const selectedNode = document.querySelector(".selected");
          if (selectedNode) {
            selectedNode.classList.remove("selected");
          }
          li.classList.add("selected");
          currentNode.current = node;
        });
      }
      li.appendChild(contentWIthIcon);
      if (node.collections.length > 0) {
        const childrenUL = buildHTMLTree(node.collections, nestedCount + 1);
        if (isNodeTypeContainerAndNotRootNode)
          childrenUL.classList.add("hide-class-name");
        li.appendChild(childrenUL);
      }
      li.addEventListener("click", e => {
        e.stopPropagation();
        const selectedNode = document.querySelector(".selected");
        if (selectedNode) {
          selectedNode.classList.remove("selected");
        }
        li.classList.add("selected");
        currentNode.current = node;
      });

      ul.appendChild(li);
    });

    return ul;
  }

  React.useEffect(() => {
    convertToHTML();
  }, []);

  return (
    <div>
      <div id="treeContainer">
        <Tooltip id="add-leaf-node-tooltip" />
        <Tooltip id="add-container-node-tooltip" />
      </div>
    </div>
  );
});
