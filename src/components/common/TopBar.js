import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const TopBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <CommonBar>
        <div className="home_btn" onClick={() => navigate("/main")}>
          home
        </div>
        <div className="left_btn" onClick={() => navigate("/profile")}>
          profile
        </div>
        <div className="middle_btn" onClick={() => navigate("/reply/1")}>
          middle
        </div>
        <div className="right_btn" onClick={() => navigate("/history")}>
          middle
        </div>
      </CommonBar>
    </>
  );
};

const CommonBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  height: 58px;
  background-color: #6c6fba;
  color: #6c6fba;
  justify-content: space-between;

  .home_btn {
    cursor: pointer;
  }

  .left_btn {
    cursor: pointer;
  }
  .middle_btn {
    cursor: pointer;
  }
  .right_btn {
    cursor: pointer;
  }
`;
