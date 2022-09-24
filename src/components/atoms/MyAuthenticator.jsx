import { Authenticator, useTheme, View, Image, Text, Heading } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";

export const MyAuthenticator = ({ initialState, email, children }) => {

  const components = {
    Header() {
      const { tokens } = useTheme();

      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Link to="/">
            <Image
              alt="Amplify logo"
              src="https://kiyotaro.cloud/images/2021_Tealium_logo.png"
            />
          </Link>
        </View>
      );
    },

    Footer() {
      const { tokens } = useTheme();

      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Text color={tokens.colors.neutral[80]}>
            &copy; All Rights Reserved
          </Text>
        </View>
      );
    },

    SignIn: {
      Header() {
        const { tokens } = useTheme();

        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.zero}`}
            level={3}
            color={"#808080"}
            textAlign={"center"}
          >
            Sign in to your account
          </Heading>
        );
      },
    },

    SignUp: {
      Header() {
        const { tokens } = useTheme();

        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.zero}`}
            level={3}
            color={"#808080"}
            textAlign={"center"}
          >
            Create a new account
          </Heading>
        );
      },
    }

  };

  const formFields = {
    signUp: {
      email: {
        value: email,
      }
    }
  };

  return (
    <Authenticator formFields={formFields} components={components} initialState={initialState}>
      {children}
    </Authenticator>
  );
}