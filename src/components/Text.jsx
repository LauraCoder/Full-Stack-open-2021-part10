import { Text as NativeText, StyleSheet, Platform } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: Platform.select({
      android: theme.fonts.android,
      ios: theme.fonts.ios,
      default: theme.fonts.main,
    }),
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorWhite: {
    color: theme.colors.white,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  subheadingStyle: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textPrimary,
  },
  subheadingStyleSecondary: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.primary,
  },
  contentTextStyle: {
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
    color: theme.colors.textSecondary,
    marginVertical: 5,
  },
  errorMessage: {
    color: theme.colors.warning,
    paddingTop: 10,
    textAlign: 'center',
  }
});

const Text = ({ color, fontSize, fontWeight, subHeading, subHeadingBlue, contentText, errorMessage, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'white' && styles.colorWhite,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    subHeading && styles.subheadingStyle,
    subHeadingBlue && styles.subheadingStyleSecondary,
    contentText && styles.contentTextStyle,
    errorMessage && styles.errorMessage,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;