import { fontSize, fontWeight, lineHeight, letterSpacing } from '../tokens';

// Typography 스타일 정의
const styles = {
  // Display
  display4: {
    fontSize: fontSize.t12,
    lineHeight: lineHeight.t12,
    letterSpacing: letterSpacing.lg,
  },
  display3: {
    fontSize: fontSize.t11,
    lineHeight: lineHeight.t11,
    letterSpacing: letterSpacing.lg,
  },
  display2: {
    fontSize: fontSize.t10,
    lineHeight: lineHeight.t10,
    letterSpacing: letterSpacing.md,
  },
  display1: {
    fontSize: fontSize.t9,
    lineHeight: lineHeight.t9,
    letterSpacing: letterSpacing.md,
  },

  // Title
  title3: {
    fontSize: fontSize.t8,
    lineHeight: lineHeight.t8,
    letterSpacing: letterSpacing.md,
  },
  title2: {
    fontSize: fontSize.t7,
    lineHeight: lineHeight.t7,
    letterSpacing: letterSpacing.md,
  },
  title1: {
    fontSize: fontSize.t6,
    lineHeight: lineHeight.t6,
    letterSpacing: letterSpacing.md,
  },

  // Body
  body3: {
    fontSize: fontSize.t5,
    lineHeight: lineHeight.t5,
    letterSpacing: letterSpacing.md,
  },
  body2: {
    fontSize: fontSize.t4,
    lineHeight: lineHeight.t4,
    letterSpacing: letterSpacing.md,
  },
  body1: {
    fontSize: fontSize.t3,
    lineHeight: lineHeight.t3,
    letterSpacing: letterSpacing.md,
  },

  // Caption
  caption2: {
    fontSize: fontSize.t2,
    lineHeight: lineHeight.t2,
    letterSpacing: letterSpacing.md,
  },
  caption1: {
    fontSize: fontSize.t1,
    lineHeight: lineHeight.t1,
    letterSpacing: letterSpacing.md,
  },
} as const;

// Weight 매핑
const weightMap = {
  regular: fontWeight['400'],
  medium: fontWeight['500'],
  semibold: fontWeight['600'],
  bold: fontWeight['700'],
} as const;

// Typography 헬퍼 함수
export const typo = (
  variant: keyof typeof styles,
  weight: keyof typeof weightMap = 'regular'
) => {
  const style = styles[variant];
  return `
    font-size: ${style.fontSize};
    font-weight: ${weightMap[weight]};
    line-height: ${style.lineHeight};
    letter-spacing: ${style.letterSpacing};
  `;
};

// 개별 export
export const typography = styles;
export { weightMap };
