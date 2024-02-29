import { Redirect, Stack, useRouter } from "expo-router";
import { View, KeyboardAvoidingView } from "react-native";
import { useSelector } from "react-redux";
const AppLayout = () => {
  const router = useRouter();
  const loggedStatus = useSelector(
    (state: any) => state.authReducer.isLoggedIn
  );

  console.log("logged status", loggedStatus);

  if (!loggedStatus) {
    return <Redirect href="/login" />;
  }

  return (
    <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </KeyboardAvoidingView>
  );
};

export default AppLayout;
