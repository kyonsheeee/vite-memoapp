import { Button, Form, Input } from "antd";

type MemoFormProps = {
  onAdd: (title: string, content: string) => void;
  isEditing?: boolean;
};

export const MemoForm = ({ onAdd, isEditing }: MemoFormProps) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: { title: string; content: string }) => {
    const { title, content } = values;
    if (!title.trim() && !content.trim()) return;
    onAdd(title, content);
    form.resetFields();
  };

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        style={{ marginBottom: "20px" }}
      >
        <Form.Item label="タイトル" name="title">
          <Input placeholder="タイトル" />
        </Form.Item>
        <Form.Item label="メモ内容" name="content">
          <Input.TextArea
            placeholder="メモ内容"
            rows={4}
            autoSize={{ minRows: 3, maxRows: 6 }}
            disabled={isEditing}
          />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          block
          disabled={isEditing}
          style={{
            background: "linear-gradient(90deg, #ff7eb3 0%, #ff758c 100%",
            border: "none",
            width: "100%",
          }}
        >
          追加
        </Button>
      </Form>
    </>
  );
};
