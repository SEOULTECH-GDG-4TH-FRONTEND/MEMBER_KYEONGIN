import "./App.css";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import ProfileCard from "./components/ProfileCard";
import { useAuth } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllUsers } from "./apis/user";
import { createQuestion } from "./apis/qna";

const Wrapper = styled.div`
  display: flex;
  padding: 50px 85px;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 32px;
  color: #454545;
  font-weight: 700;
`;

const Layout = styled.div`
  display: flex;
  margin-top: 30px;
`;

const CardWrapper = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: ${(props) =>
    props.expandedCard ? "repeat(2, 1fr)" : "repeat(4, 1fr)"};
  gap: 30px;
`;

const ProfileContainer = styled.div`
  position: relative;
`;

const QuestionPanel = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 16px;
  padding: 20px;
  height: 70vh;
  margin-left: 20px;
  display: ${(props) => (props.expanded ? "block" : "none")};
  position: relative;
`;

const QuestionArea = styled.textarea`
  resize: none;
  border-radius: 8px;
  height: 70%;
  border: 1px solid #a0a0a0;
  padding: 10px;
  font-size: 14px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const SendPerson = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #454545;
`;

const Button = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  font-size: 14px;
  color: white;
  background-color: ${(props) => (props.disabled ? "#d6d6d6" : "#007bff")};
  border: none;
  border-radius: 8px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "#d6d6d6" : "#0056b3")};
  }
`;

function App() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);
  const [questionContent, setQuestionContent] = useState("");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllUsers();
        setProfiles(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const handleCardClick = (id) => {
    setExpandedCard((prev) => (prev === id ? null : id)); // 클릭 시 토글
    setQuestionContent(""); // 질문 내용을 초기화
    window.scrollTo({ top: 0, behavior: "smooth" }); // 스크롤을 맨 위로 이동
  };

  const handleSubmit = async (userId) => {
    if (!questionContent.trim()) {
      alert("질문 내용을 입력하세요!");
      return;
    }
    try {
      await createQuestion({ targetId: userId, content: questionContent });
      alert("질문을 성공적으로 작성했습니다.");
      setExpandedCard(null);
    } catch {
      alert("질문을 작성하는 데 실패했습니다.");
    }
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <Title>누구에게 질문할까요?</Title>
        <Layout>
          <CardWrapper expandedCard={!!expandedCard}>
            {profiles.map((profile) => (
              <ProfileContainer key={profile.id}>
                <ProfileCard
                  id={profile.id}
                  name={profile.username}
                  bio={profile.bio}
                  questionCount={profile.receivedQuestionCount}
                  onClick={() => handleCardClick(profile.id)}
                />
              </ProfileContainer>
            ))}
          </CardWrapper>
          <QuestionPanel expanded={!!expandedCard}>
            {expandedCard && (
              <>
                <SendPerson>
                  {
                    profiles.find((profile) => profile.id === expandedCard)
                      ?.username
                  }
                  님에게 질문하기
                </SendPerson>
                <QuestionArea
                  placeholder="질문 내용을 입력하세요..."
                  value={questionContent}
                  onChange={(e) => setQuestionContent(e.target.value)}
                />
                <Button
                  onClick={() => handleSubmit(expandedCard)}
                  disabled={!questionContent.trim()}
                >
                  질문하기
                </Button>
              </>
            )}
          </QuestionPanel>
        </Layout>
      </Wrapper>
    </>
  );
}

export default App;
