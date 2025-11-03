import type { Meta, StoryObj } from '@storybook/react-vite';
import styled from 'styled-components';
import { fontFamily, fontSize } from '../../../src/tokens';

const FontSizeDisplay = () => {
  return (
    <Container>
      <PageTitle>Font Size</PageTitle>
      <Description>
        폰트 크기 토큰은 전근성과 확장성을 위해 상대 단위(rem)를 사용합니다.<br />
        이 값들은 기본 설정 기준 1rem = 16px로 계산됩니다.
      </Description>

      <TokenList>
        {Object.entries(fontSize).map(([key, value]) => {
          const remValue = (parseInt(value) / 16).toFixed(3);
          return (
            <TokenItem key={key}>
              <TokenHeader>
                <TokenInfo>
                  <TokenName>text-{key}</TokenName>
                  <TokenSpec>
                    <SpecItem>{value}</SpecItem>
                    <SpecDivider>/</SpecDivider>
                    <SpecItem secondary>{remValue}rem</SpecItem>
                  </TokenSpec>
                </TokenInfo>
              </TokenHeader>
              <PreviewBox>
                <PreviewText $size={value}>
                  The quick brown fox jumps over the lazy dog
                </PreviewText>
                <PreviewTextKo $size={value}>
                  세련된 디자인과 편리한 사용성을 제공합니다
                </PreviewTextKo>
              </PreviewBox>
            </TokenItem>
          );
        })}
      </TokenList>
    </Container>
  );
};

const meta: Meta<typeof FontSizeDisplay> = {
  title: 'Foundation/Typography',
  component: FontSizeDisplay,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const FontSize: Story = {};

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

const TokenList = styled.div`
  display: grid;
  gap: 40px;
`;

const TokenItem = styled.div`
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 40px;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const TokenHeader = styled.div`
  margin-bottom: 24px;
`;

const TokenInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const TokenName = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #000000;
  font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
`;

const TokenSpec = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SpecItem = styled.span<{ secondary?: boolean }>`
  font-size: 15px;
  font-weight: 600;
  color: ${props => props.secondary ? '#888888' : '#000000'};
  font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
`;

const SpecDivider = styled.span`
  font-size: 15px;
  color: #cccccc;
`;

const PreviewBox = styled.div`
  padding: 32px 40px;
  background: #f7f8fa;
  border-radius: 12px;
  display: grid;
  gap: 16px;
`;

const PreviewText = styled.div<{ $size: string }>`
  font-size: ${props => props.$size};
  color: #000000;
  line-height: 1.4;
  letter-spacing: -0.02em;
`;

const PreviewTextKo = styled.div<{ $size: string }>`
  font-size: ${props => props.$size};
  color: #000000;
  line-height: 1.5;
  letter-spacing: -0.02em;
`;
