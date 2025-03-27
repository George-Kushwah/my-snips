import React, { createRef, useEffect, useRef } from "react";

interface NoteIpros {
  note: any;
  setnote: React.Dispatch<React.SetStateAction<any>>;
}
const Dragdrop = ({ note, setnote }: NoteIpros) => {
  const refs = useRef<any>([]);
  useEffect(() => {
    const savenotes: any =
      JSON.parse(localStorage.getItem("notes") as any) || [];
    const updatenotes = note.map((item: any) => {
      const savenote = savenotes.find((n: any) => n?.id === item.id);
      if (savenote) {
        return { ...item, postion: savenote.postion };
      } else {
        const postion = determinNewPosition();
        return { ...item, postion };
      }
    });
    setnote(updatenotes);
    localStorage.setItem("notes", JSON.stringify(updatenotes));
  }, [note.length]);
  const determinNewPosition = () => {
    const maxX = window.innerWidth - 250;
    const maxy = window.innerHeight - 250;
    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxy),
    };
  };
  const HandlestartDrag = (ind: any, ev: any) => {
    const { id } = ind;
    const noteref = refs.current[id].current;
    const rect = noteref.getBoundingClientRect();
    const offx = ev.clientX - rect.left;
    const offy = ev.clientY - rect.top;
    const startpos = ind;
    const Handlemouseup = (ev: any) => {
      const newoffx = ev.clientX - offx;
      const newoffy = ev.clientY - offy;
      noteref.style.left = `${newoffx}px`;
      noteref.style.top = `${newoffy}px`;
    };
    const HandlemouseMove = () => {
      document.removeEventListener("mouseup", HandlemouseMove);
      document.removeEventListener("mousemove", Handlemouseup);
      const finalrect = noteref.getBoundingClientRect();
      const newpostion = { x: finalrect.left, y: finalrect.top };
      if (false) {
      } else {
        updateNodepostion(id, newpostion);
      }
    };
    document.addEventListener("mouseup", Handlemouseup);
    document.addEventListener("mousemove", HandlemouseMove);
  };
  const updateNodepostion = (id: any, pos: any) => {
    const updatenodes = note.map((note: any) =>
      note.id === id ? { ...note, postion: pos } : note
    );
    setnote(updatenodes);
    localStorage.setItem("notes", JSON.stringify(updatenodes));
  };
  return (
    <div className="position-relative">
      {note.map((item: any, ind: any) => (
        <div
          key={ind}
          className="notes"
          ref={
            refs.current[item?.id]
              ? refs.current[item?.id]
              : (refs.current[item?.id] = createRef())
          }
          onMouseDown={(e) => HandlestartDrag(item, e)}
          style={{
            top: `${item?.postion?.y}px`,
            left: `${item?.postion?.x}px`,
          }}
        >
          ❤️❤️❤️{item?.note}
        </div>
      ))}
    </div>
  );
};

export default Dragdrop;
