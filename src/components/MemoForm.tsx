import { useState } from "react";

type MemoFormProps = {
  onAdd: (title: string, content: string) => void;
};

export const MemoForm = ({ onAdd }: MemoFormProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() && !content.trim()) return;
    onAdd(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="タイトル"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <textarea
            placeholder="メモ内容"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">追加</button>
      </form>
    </>
  );
};
