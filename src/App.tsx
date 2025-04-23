import { MemoForm } from "./components/MemoForm";
import { MemoList } from "./components/MemoList";
import { useMemos } from "./hooks/useMemos";
import "./App.css";

function App() {
  const { memos, addMemo, deleteMemo } = useMemos();

  return (
    <div className="App">
      <h1>メモアプリ</h1>
      <MemoForm onAdd={addMemo} />
      <MemoList memos={memos} onDelete={deleteMemo} />
    </div>
  );
}

export default App;
