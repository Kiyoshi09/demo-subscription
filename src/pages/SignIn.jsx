import styled from "styled-components";
import '@aws-amplify/ui-react/styles.css';
import { MyAuthenticator } from "../components/atoms/MyAuthenticator";
import { Navigate } from "react-router-dom";

export const SignIn = () => {
  //const navigate = useNavigate();
  console.log("[Rendering] === SignIn ===");

  return (
    <SignInArea>
      <MyAuthenticator initialState="signIn">
        {
          ({ signOut, user }) => (
            // <div>
            //   <p>
            //     Hey { user.username }, welcome to my channel, with auth!
            //   </p>
            //   <button onClick={ signOut }>Sign out</button>
            // </div>

            <Navigate replace to="/moviemain?from=signin" />

          )
        }
      </MyAuthenticator>
    </SignInArea>
  );
}

const SignInArea = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100vh;
`;
