import { List, Card, Button, Empty, Space, Input } from "antd";
import { Memo } from "../types";
import { useState } from "react";

type MemoListProps = {
  memos: Memo[];
  onDelete: (id: string) => void;
  onUpdate: (id: string, title: string, content: string) => void;
};

export const MemoList = ({ memos, onDelete, onUpdate }: MemoListProps) => {
  const [editId, setEditId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  if (memos.length === 0) {
    return <Empty description="メモはまだありません。" />;
  }

  const startEditing = (memo: Memo) => {
    setEditId(memo.id);
    setEditTitle(memo.title);
    setEditContent(memo.content);
  };

  const saveEdit = () => {
    if (editId) {
      onUpdate(editId, editTitle, editContent);
      setEditId(null);
    }
  };

  return (
    <div style={{ maxWidth: "100%", width: "100%" }}>
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={memos}
        renderItem={(memo) => (
          <List.Item>
            <Card
              style={{
                width: "100%",
                minWidth: "500px",
                maxWidth: "100%",
                wordWrap: "break-word",
              }}
              title={
                editId === memo.id ? (
                  <Input
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                ) : (
                  memo.title || "(タイトルなし)"
                )
              }
              extra={
                editId === memo.id ? (
                  <Button type="primary" onClick={saveEdit}>
                    保存
                  </Button>
                ) : (
                  <Space>
                    <Button onClick={() => startEditing(memo)}>編集</Button>
                    <Button danger onClick={() => onDelete(memo.id)}>
                      削除
                    </Button>
                  </Space>
                )
              }
            >
              {editId === memo.id ? (
                <Input.TextArea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  rows={4}
                />
              ) : (
                memo.content || "(内容なし)"
              )}
            </Card>
          </List.Item>
        )}
      ></List>
    </div>
  );
};
