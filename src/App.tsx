import { MemoForm } from "./components/MemoForm";
import { MemoList } from "./components/MemoList";
import { useMemos } from "./hooks/useMemos";
import "./App.css";
import { Layout, Typography, Flex } from "antd";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  const { memos, addMemo, deleteMemo } = useMemos();

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
          }}
        >
          <Header style={{ backgroundColor: "#001529", padding: 20 }}>
            <Title level={2} style={{ color: "#fff", margin: 0 }}>
              メモアプリ
            </Title>
          </Header>

          <Content style={{ padding: "24px", maxWidth: 600, margin: "auto" }}>
            <MemoForm onAdd={addMemo} />
            <MemoList memos={memos} onDelete={deleteMemo} />
          </Content>

          <Footer style={{ textAlign: "center" }}>
            © {new Date().getFullYear()} Kyoko's Memo App
          </Footer>
        </Layout>
      </Flex>
    </div>
  );
}

export default App;
