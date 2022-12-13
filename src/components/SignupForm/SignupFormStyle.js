import { StyleSheet } from "react-native";

const SignupFormStyle = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  screencontent: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  signupForm: {
    alignItems: "center",
  },

  button: {
    backgroundColor: "#bbaaf3",
    width: "90%",
    height: 56,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 8,
  },
  pressedStyle: {
    backgroundColor: "#bbaaf3",
    width: "90%",
    height: 56,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.9,
    position: "absolute",
    bottom: 8,
  },
  validStyle: {
    backgroundColor: "#542ee0",
  },
  buttonTextStyle: {
    color: "white",
    fontSize: 17,
  },
});

export default SignupFormStyle;
