import { List, Card, Button, Empty } from "antd";
import { Memo } from "../types";

type MemoListProps = {
  memos: Memo[];
  onDelete: (id: string) => void;
};

export const MemoList = ({ memos, onDelete }: MemoListProps) => {
  if (memos.length === 0) {
    return <Empty description="メモはまだありません。" />;
  }

  return (
    <div style={{ maxWidth: "100%", width: "100%" }}>
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={memos}
        renderItem={(memo) => (
          <List.Item>
            <Card
              title={memo.title || "(タイトルなし)"}
              extra={
                <Button danger onClick={() => onDelete(memo.id)}>
                  削除
                </Button>
              }
              style={{ width: "100%" }}
            >
              {memo.content || "(内容なし)"}
            </Card>
          </List.Item>
        )}
      ></List>
    </div>
  );
};
