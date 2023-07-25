import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    backgroundColor: COLORS.greenBackground,
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
  },
  headText: {
    fontSize: SIZES.large,
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
  contentBox: {
    marginVertical: SIZES.small,
  },
  contextText: {
    fontSize: SIZES.medium - 2,
    color: COLORS.hello,
    fontFamily: FONT.regular,
    marginVertical: SIZES.small / 1.25,
  },
});

export default styles;
