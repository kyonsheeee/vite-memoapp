import { Memo } from "../types";

type MemoListProps = {
  memos: Memo[];
  onDelete: (id: string) => void;
};

export const MemoList = ({ memos, onDelete }: MemoListProps) => {
  if (memos.length === 0) {
    return <p>メモはまだありません。</p>;
  }

  return (
    <div>
      {memos.map((memo) => (
        <div>
          <h2>{memo.title}</h2>
          <p>{memo.content}</p>
          <p>作成日時: {memo.createdAt.toLocaleString()}</p>
          <button onClick={() => onDelete(memo.id)}>削除</button>
        </div>
      ))}
    </div>
  );
};
