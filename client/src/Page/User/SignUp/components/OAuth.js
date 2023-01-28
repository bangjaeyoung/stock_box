import styled from "styled-components";
import Horizon from "../../../../Components/Style/User/Horizon";
import OAuthButton from "../../../../Components/Style/User/OAuthButton";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  a {
    width: 100%;
    color: #262626;
    text-decoration: none;
  }
`;

const MarginedHorizon = styled(Horizon)`
  margin: 26px 0;
`;

// OAuth로 회원가입하는 버튼
const OAuth = () => {
  const handleGoogleClick = () => {};

  return (
    <Container>
      <OAuthButton google onClick={handleGoogleClick}>
        구글로 회원가입
      </OAuthButton>
      <MarginedHorizon />
    </Container>
  );
};

export default OAuth;
