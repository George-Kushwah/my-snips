import React from "react";

const Cshook = () => {
  const addcomment = (tree: any, id: any, newcom: any) => {
    if (tree.id === id) {
      tree.reply.unshift(newcom);
      return tree;
    }
    const update = tree.reply.map((item: any) => addcomment(item, id, newcom));
    return { ...tree, reply: update };
  };
  const deletes = (tree: any, id: any) => {
    if (tree?.id === id) {
      let dc = tree?.reply?.filter((ele: any) => ele.id !== id);
      // return dc;
    }
    const update = tree.reply.map((item: any) => deletes(item, id));
    return { ...tree, reply: update };
  };
  return { addcomment, deletes };
};
export default Cshook;
