
interface FontToken {
  family: string;
  size: number;
  weight: number;
  stretch: number;
}

interface TypographyToken {
  font: FontToken;
  line_height: number;
  letter_spacing?: number;
}

export const typography = {
  m3MobileDisplayLarge: {
    font: { family: "LibreFranklin", size: 57, weight: 400, stretch: 1 },
    line_height: 64,
    letter_spacing: -0.25,
  },
  m3MobileDisplayMedium: {
    font: { family: "LibreFranklin", size: 45, weight: 400, stretch: 1 },
    line_height: 52,
  },
  m3MobileDisplaySmall: {
    font: { family: "LibreFranklin", size: 36, weight: 400, stretch: 1 },
    line_height: 44,
  },
  m3MobileHeadlineLarge: {
    font: { family: "LibreFranklin", size: 32, weight: 700, stretch: 1 },
    line_height: 40,
  },
  m3MobileHeadlineMedium: {
    font: { family: "LibreFranklin", size: 28, weight: 700, stretch: 1 },
    line_height: 36,
  },
  m3MobileTitleLarge: {
    font: { family: "LibreFranklin", size: 22, weight: 400, stretch: 1 },
    line_height: 28,
  },
  m3MobileTitleMedium: {
    font: { family: "LibreFranklin", size: 16, weight: 400, stretch: 1 },
    line_height: 24,
    letter_spacing: 0.15,
  },
  m3MobileLabelLargeProminent: {
    font: { family: "IBMPlexMono", size: 16, weight: 400, stretch: 1 },
    line_height: 20,
    letter_spacing: 0.1,
  },
  m3MobileHeadlineSmall: {
    font: { family: "LibreFranklin", size: 24, weight: 700, stretch: 1 },
    line_height: 32,
  },
  m3MobileLabelMedium: {
    font: { family: "IBMPlexMono", size: 12, weight: 400, stretch: 1 },
    line_height: 16,
    letter_spacing: 0.5,
  },
  m3MobileTitleSmall: {
    font: { family: "LibreFranklin", size: 14, weight: 400, stretch: 1 },
    line_height: 20,
    letter_spacing: 0.1,
  },
  m3MobileLabelSmall: {
    font: { family: "IBMPlexMono", size: 8, weight: 400, stretch: 1 },
    line_height: 16,
    letter_spacing: 0.5,
  },
  m3MobileLabelMediumProminent: {
    font: { family: "IBMPlexMono", size: 12, weight: 400, stretch: 1 },
    line_height: 16,
    letter_spacing: 0.5,
  },
  m3MobileLabelLarge: {
    font: { family: "IBMPlexMono", size: 14, weight: 400, stretch: 1 },
    line_height: 20,
    letter_spacing: 0.1,
  },
  m3MobileBodyLarge: {
    font: { family: "LibreFranklin", size: 16, weight: 400, stretch: 1 },
    line_height: 24,
    letter_spacing: 0.5,
  },
  m3MobileBodyMedium: {
    font: { family: "LibreFranklin", size: 14, weight: 400, stretch: 1 },
    line_height: 20,
    letter_spacing: 0.25,
  },
  m3MobileBodySmall: {
    font: { family: "LibreFranklin", size: 12, weight: 400, stretch: 1 },
    line_height: 16,
    letter_spacing: 0.4,
  },
  m3WebLibreFranklinH2: {
    font: { family: "LibreFranklin", size: 25, weight: 400, stretch: 1 },
  },
  m3WebLibreFranklinH1: {
    font: { family: "LibreFranklin", size: 28, weight: 400, stretch: 1 },
  },
  m3WebLibreFranklinH3: {
    font: { family: "LibreFranklin", size: 22, weight: 400, stretch: 1 },
  },
  m3WebLibreFranklinSmall: {
    font: { family: "LibreFranklin", size: 12, weight: 400, stretch: 1 },
  },
  m3WebLibreFranklinCaption: {
    font: { family: "LibreFranklin", size: 14, weight: 400, stretch: 1 },
  },
  m3WebIbmPlexSansH1: {
    font: { family: "IBMPlexSans", size: 28, weight: 400, stretch: 1 },
  },
  m3WebLibreFranklinH4: {
    font: { family: "LibreFranklin", size: 20, weight: 400, stretch: 1 },
  },
  m3WebLibreFranklinBody: {
    font: { family: "LibreFranklin", size: 16, weight: 400, stretch: 1 },
  },
  m3WebIbmPlexSansH2: {
    font: { family: "IBMPlexSans", size: 25, weight: 400, stretch: 1 },
  },
  m3WebIbmPlexSansH3: {
    font: { family: "IBMPlexSans", size: 22, weight: 400, stretch: 1 },
  },
  m3WebIbmPlexSansSmall: {
    font: { family: "IBMPlexSans", size: 12, weight: 400, stretch: 1 },
  },
  m3WebIbmPlexSansCaption: {
    font: { family: "IBMPlexSans", size: 14, weight: 400, stretch: 1 },
  },
  m3WebIbmPlexSansBody: {
    font: { family: "IBMPlexMono", size: 16, weight: 400, stretch: 1 },
  },
  m3WebIbmPlexSansH4: {
    font: { family: "IBMPlexSans", size: 20, weight: 400, stretch: 1 },
  },
};
