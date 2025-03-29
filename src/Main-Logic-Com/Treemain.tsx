import React from "react";

export default function Treemain() {
  const Addon = (tree: any, itemid: any, item: any, isFolder: any) => {
    if (tree?.id === itemid && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getDate(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }
    let latest: any = [];
    latest = tree.items.map((obj: any) => {
      return Addon(obj, itemid, item, isFolder);
    });
    return { ...tree, items: latest };
  };
  return { Addon };
}
