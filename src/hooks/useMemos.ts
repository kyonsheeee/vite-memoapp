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
    setMemos([newMemo, ...memos]);
  };

  const deleteMemo = (id: string) => {
    setMemos(memos.filter((memo) => memo.id !== id));
  };

  return { memos, addMemo, deleteMemo };
};
