import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.hello,
    ...SHADOWS.medium,
    shadowColor: COLORS.hello,
  },
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "70%",
    height: "70%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  jobName: {
    fontSize: SIZES.medium,
    fontFamily: "JBMBold",
    color: COLORS.searchWrapper,
  },
  jobType: {
    fontSize: SIZES.small + 2,
    fontFamily: "JBMRegular",
    color: COLORS.greenBackground,
    marginTop: 3,
    textTransform: "capitalize",
  },
});

export default styles;
