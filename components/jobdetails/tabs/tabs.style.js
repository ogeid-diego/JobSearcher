import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.small / 2,
  },
  btn: (name, activeTab) => ({
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.xLarge,
    backgroundColor: name === activeTab ? COLORS.greenBackground : COLORS.white,
    borderRadius: SIZES.medium,
    marginLeft: 2,
    ...SHADOWS.medium,
  }),
  btnText: (name, activeTab) => ({
    fontFamily: "sans-serif",
    fontSize: SIZES.small,
    color: name === activeTab ? COLORS.white : COLORS.greenBackground,
  }),
});

export default styles;
