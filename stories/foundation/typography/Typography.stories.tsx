import type { Meta, StoryObj } from '@storybook/react-vite';
import styled from 'styled-components';
import { fontFamily } from '../../../src/tokens';
import { typo } from '../../../src/styles/typography';

const TypographyDisplay = () => {
  const displayStyles = ['display4', 'display3', 'display2', 'display1'] as const;
  const titleStyles = ['title3', 'title2', 'title1'] as const;
  const bodyStyles = ['body3', 'body2', 'body1'] as const;
  const captionStyles = ['caption2', 'caption1'] as const;
  const weights = ['regular', 'medium', 'semibold', 'bold'] as const;

  return (
    <Container>
      <PageTitle>Typography</PageTitle>
      <Description>
        Typography 스타일은 계층 구조와 굵기를 조합하여 일관된 텍스트 스타일을 제공합니다.
      </Description>

      {/* Display */}
      <Section>
        <SectionTitle>Display</SectionTitle>
        <TokenList>
          {displayStyles.map((style) => (
            <TokenItem key={style}>
              <TokenHeader>
                <TokenName>{style}</TokenName>
              </TokenHeader>
              <WeightGrid>
                {weights.map((weight) => (
                  <WeightItem key={weight}>
                    <WeightLabel>{weight}</WeightLabel>
                    <PreviewBox>
                      <PreviewText $typo={typo(style, weight)}>
                        세련된 디자인과 편리한 사용성
                      </PreviewText>
                    </PreviewBox>
                  </WeightItem>
                ))}
              </WeightGrid>
            </TokenItem>
          ))}
        </TokenList>
      </Section>

      {/* Title */}
      <Section>
        <SectionTitle>Title</SectionTitle>
        <TokenList>
          {titleStyles.map((style) => (
            <TokenItem key={style}>
              <TokenHeader>
                <TokenName>{style}</TokenName>
              </TokenHeader>
              <WeightGrid>
                {weights.map((weight) => (
                  <WeightItem key={weight}>
                    <WeightLabel>{weight}</WeightLabel>
                    <PreviewBox>
                      <PreviewText $typo={typo(style, weight)}>
                        세련된 디자인과 편리한 사용성
                      </PreviewText>
                    </PreviewBox>
                  </WeightItem>
                ))}
              </WeightGrid>
            </TokenItem>
          ))}
        </TokenList>
      </Section>

      {/* Body */}
      <Section>
        <SectionTitle>Body</SectionTitle>
        <TokenList>
          {bodyStyles.map((style) => (
            <TokenItem key={style}>
              <TokenHeader>
                <TokenName>{style}</TokenName>
              </TokenHeader>
              <WeightGrid>
                {weights.map((weight) => (
                  <WeightItem key={weight}>
                    <WeightLabel>{weight}</WeightLabel>
                    <PreviewBox>
                      <PreviewText $typo={typo(style, weight)}>
                        세련된 디자인과 편리한 사용성을 제공합니다
                      </PreviewText>
                    </PreviewBox>
                  </WeightItem>
                ))}
              </WeightGrid>
            </TokenItem>
          ))}
        </TokenList>
      </Section>

      {/* Caption */}
      <Section>
        <SectionTitle>Caption</SectionTitle>
        <TokenList>
          {captionStyles.map((style) => (
            <TokenItem key={style}>
              <TokenHeader>
                <TokenName>{style}</TokenName>
              </TokenHeader>
              <WeightGrid>
                {weights.map((weight) => (
                  <WeightItem key={weight}>
                    <WeightLabel>{weight}</WeightLabel>
                    <PreviewBox>
                      <PreviewText $typo={typo(style, weight)}>
                        세련된 디자인과 편리한 사용성을 제공합니다
                      </PreviewText>
                    </PreviewBox>
                  </WeightItem>
                ))}
              </WeightGrid>
            </TokenItem>
          ))}
        </TokenList>
      </Section>
    </Container>
  );
};

const meta: Meta<typeof TypographyDisplay> = {
  title: 'Foundation/Typography',
  component: TypographyDisplay,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Typography: Story = {};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 40px;
  font-family: ${fontFamily.primary};
  background: #ffffff;
`;

const PageTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #000000;
  margin: 0 0 16px 0;
  letter-spacing: -0.03em;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #555555;
  margin: 0 0 60px 0;
`;

const Section = styled.section`
  margin-bottom: 80px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #000000;
  margin: 0 0 40px 0;
  letter-spacing: -0.02em;
`;

const TokenList = styled.div`
  display: grid;
  gap: 48px;
`;

const TokenItem = styled.div`
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 48px;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const TokenHeader = styled.div`
  margin-bottom: 24px;
`;

const TokenName = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
`;

const WeightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
`;

const WeightItem = styled.div``;

const WeightLabel = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #888888;
  margin-bottom: 12px;
  text-transform: capitalize;
`;

const PreviewBox = styled.div`
  padding: 24px;
  background: #f7f8fa;
  border-radius: 8px;
  min-height: 80px;
  display: flex;
  align-items: center;
`;

const PreviewText = styled.div<{ $typo: string }>`
  color: #000000;
  ${props => props.$typo}
`;
