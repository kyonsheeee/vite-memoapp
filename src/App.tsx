import { useState } from "react";
import { MemoForm } from "./components/MemoForm";
import { MemoList } from "./components/MemoList";
import { useMemos } from "./hooks/useMemos";
import "./App.css";
import { Layout, Typography, Flex, Card } from "antd";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  const { memos, addMemo, deleteMemo, updateMemo } = useMemos();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="App">
      <Flex justify="center" align="start" style={{ minHeight: "100vh" }}>
        <Layout
          style={{
            width: "100%",
            maxWidth: "1000px",
            borderRadius: "8px",
            overflow: "hidden",
            background: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            margin: "20px",
            paddingBottom: "20px",
            minHeight: "100vh",
          }}
        >
          <Header
            style={{
              background: "linear-gradient(90deg, #ff9a9e 0%, #ff758c 100%)",
              padding: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Title
              level={2}
              style={{
                color: "#fff",
                margin: 0,
                textAlign: "center",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              メモアプリ
            </Title>
          </Header>

          <Content
            style={{
              padding: "24px",
              maxWidth: "800px",
              display: "flex",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <Card
              style={{
                minWidth: "600px",
                width: "100%",
                // backgroundColor: "#fffafc",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <MemoForm onAdd={addMemo} isEditing={isEditing} />
              <MemoList
                memos={memos}
                onDelete={deleteMemo}
                onUpdate={updateMemo}
                setIsEditing={setIsEditing}
              />
            </Card>
          </Content>

          <Footer style={{ textAlign: "center", backgroundColor: "#ffe4e1" }}>
            © {new Date().getFullYear()} Kyoko's Memo App
          </Footer>
        </Layout>
      </Flex>
    </div>
  );
}

export default App;
