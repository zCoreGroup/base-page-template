/**
 * I've defined two interfaces: FontDefinition to capture the font properties and TypographyToken to represent each typography token object.
Each typography token is typed with TypographyToken.
Optional properties like letter_spacing are appropriately included where defined in the original JSON-like structure.
 */

interface FontDefinition {
  family: string;
  size: number;
  weight: number;
  stretch: number;
}

interface TypographyToken {
  font: FontDefinition;
  line_height: number;
  letter_spacing?: number;
}

export const m3MobileDisplayLarge: TypographyToken = {
  font: { family: "LibreFranklin", size: 57, weight: 400, stretch: 1 },
  line_height: 64,
  letter_spacing: -0.25
};

export const m3MobileDisplayMedium: TypographyToken = {
  font: { family: "LibreFranklin", size: 45, weight: 400, stretch: 1 },
  line_height: 52
};

export const m3MobileDisplaySmall: TypographyToken = {
  font: { family: "LibreFranklin", size: 36, weight: 400, stretch: 1 },
  line_height: 44
};

export const m3MobileHeadlineLarge: TypographyToken = {
  font: { family: "LibreFranklin", size: 32, weight: 700, stretch: 1 },
  line_height: 40
};

export const m3MobileHeadlineMedium: TypographyToken = {
  font: { family: "LibreFranklin", size: 28, weight: 700, stretch: 1 },
  line_height: 36
};

export const m3MobileTitleLarge: TypographyToken = {
  font: { family: "LibreFranklin", size: 22, weight: 400, stretch: 1 },
  line_height: 28
};

export const m3MobileTitleMedium: TypographyToken = {
  font: { family: "LibreFranklin", size: 16, weight: 400, stretch: 1 },
  line_height: 24,
  letter_spacing: 0.15
};

export const m3MobileLabelLargeProminent: TypographyToken = {
  font: { family: "IBMPlexMono", size: 16, weight: 400, stretch: 1 },
  line_height: 20,
  letter_spacing: 0.1
};

export const m3MobileHeadlineSmall: TypographyToken = {
  font: { family: "LibreFranklin", size: 24, weight: 700, stretch: 1 },
  line_height: 32
};

export const m3MobileLabelMedium: TypographyToken = {
  font: { family: "IBMPlexMono", size: 12, weight: 400, stretch: 1 },
  line_height: 16,
  letter_spacing: 0.5
};

export const m3MobileTitleSmall: TypographyToken = {
  font: { family: "LibreFranklin", size: 14, weight: 400, stretch: 1 },
  line_height: 20,
  letter_spacing: 0.1
};

export const m3MobileLabelSmall: TypographyToken = {
  font: { family: "IBMPlexMono", size: 8, weight: 400, stretch: 1 },
  line_height: 16,
  letter_spacing: 0.5
};

export const m3MobileLabelMediumProminent: TypographyToken = {
  font: { family: "IBMPlexMono", size: 12, weight: 400, stretch: 1 },
  line_height: 16,
  letter_spacing: 0.5
};

export const m3MobileLabelLarge: TypographyToken = {
  font: { family: "IBMPlexMono", size: 14, weight: 400, stretch: 1 },
  line_height: 20,
  letter_spacing: 0.1
};

export const m3MobileBodyLarge: TypographyToken = {
  font: { family: "LibreFranklin", size: 16, weight: 400, stretch: 1 },
  line_height: 24,
  letter_spacing: 0.5
};

export const m3MobileBodyMedium: TypographyToken = {
  font: { family: "LibreFranklin", size: 14, weight: 400, stretch: 1 },
  line_height: 20,
  letter_spacing: 0.25
};

export const m3MobileBodySmall: TypographyToken = {
  font: { family: "LibreFranklin", size: 12, weight: 400, stretch: 1 },
  line_height: 16,
  letter_spacing: 0.4
};

export const m3WebLibreFranklinH2: TypographyToken = {
  font: { family: "LibreFranklin", size: 25, weight: 400, stretch: 1 },
  line_height: 25 // Assuming this is correct as per the pattern
};

export const m3WebLibreFranklinH1: TypographyToken = {
  font: { family: "LibreFranklin", size: 28, weight: 400, stretch: 1 },
  line_height: 28
};

export const m3WebLibreFranklinH3: TypographyToken = {
  font: { family: "LibreFranklin", size: 22, weight: 400, stretch: 1 },
  line_height: 22
};

export const m3WebLibreFranklinSmall: TypographyToken = {
  font: { family: "LibreFranklin", size: 12, weight: 400, stretch: 1 },
  line_height: 12
};

export const m3WebLibreFranklinCaption: TypographyToken = {
  font: { family: "LibreFranklin", size: 14, weight: 400, stretch: 1 },
  line_height: 14
};

export const m3WebIbmPlexSansH1: TypographyToken = {
  font: { family: "IBMPlexSans", size: 28, weight: 400, stretch: 1 },
  line_height: 28
};

export const m3WebLibreFranklinH4: TypographyToken = {
  font: { family: "LibreFranklin", size: 20, weight: 400, stretch: 1 },
  line_height: 20
};

export const m3WebLibreFranklinBody: TypographyToken = {
  font: { family: "LibreFranklin", size: 16, weight: 400, stretch: 1 },
  line_height: 16
};

export const m3WebIbmPlexSansH2: TypographyToken = {
  font: { family: "IBMPlexSans", size: 25, weight: 400, stretch: 1 },
  line_height: 25
};

export const m3WebIbmPlexSansH3: TypographyToken = {
  font: { family: "IBMPlexSans", size: 22, weight: 400, stretch: 1 },
  line_height: 22
};

export const m3WebIbmPlexSansSmall: TypographyToken = {
  font: { family: "IBMPlexSans", size: 12, weight: 400, stretch: 1 },
  line_height: 12
};

export const m3WebIbmPlexSansCaption: TypographyToken = {
  font: { family: "IBMPlexSans", size: 14, weight: 400, stretch: 1 },
  line_height: 14
};

export const m3WebIbmPlexSansBody: TypographyToken = {
  font: { family: "IBMPlexMono", size: 16, weight: 400, stretch: 1 },
  line_height: 16
};

export const m3WebIbmPlexSansH4: TypographyToken = {
  font: { family: "IBMPlexSans", size: 20, weight: 400, stretch: 1 },
  line_height: 20
};
