import { useState, useEffect } from "react";
import { Memo } from "../types";
import { v4 as uuidv4 } from "uuid";

const STORAGE_KEY = "memoApp:memos";

export const useMemos = () => {
  const [memos, setMemos] = useState<Memo[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Memo[];
        const withDates = parsed.map((memo) => ({
          ...memo,
          createdAt: new Date(memo.createdAt),
        }));
        setMemos(withDates);
      } catch (error) {
        console.error("Failed to parse memos from localStorage", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memos));
  }, [memos]);

  const addMemo = (title: string, content: string) => {
    const newMemo: Memo = {
      id: uuidv4(),
      title,
      content,
      createdAt: new Date(),
    };
    setMemos((prev) => [newMemo, ...prev]);
  };

  const deleteMemo = (id: string) => {
    setMemos((prev) => prev.filter((memo) => memo.id !== id));
  };

  const updateMemo = (id: string, newTitle: string, newContent: string) => {
    setMemos((prev) =>
      prev.map((memo) =>
        memo.id === id
          ? { ...memo, title: newTitle, content: newContent }
          : memo
      )
    );
  };

  return { memos, addMemo, deleteMemo, updateMemo };
};
