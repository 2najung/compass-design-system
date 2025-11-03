import type { Meta, StoryObj } from '@storybook/react-vite';
import styled from 'styled-components';
import { fontFamily, fontWeight } from '../../../src/tokens';

const weightNames: Record<string, string> = {
  '400': 'Regular',
  '500': 'Medium',
  '600': 'SemiBold',
  '700': 'Bold',
};

const FontWeightDisplay = () => {
  return (
    <Container>
      <PageTitle>Font Weight</PageTitle>
      <Description>
        폰트의 두께는 콘텐츠의 위계를 구분하고 시각적 강조를 더하는 데 중요한
        타이포그래피 요소입니다.
        <br />
        명확한 시각적 대비와 계층 구조를 위해 네 가지 폰트 두께 토큰을
        정의합니다.
      </Description>

      <TokenList>
        {Object.entries(fontWeight).map(([key, value]) => (
          <TokenItem key={key}>
            <TokenHeader>
              <TokenInfo>
                <TokenName>font-{key}</TokenName>
                <TokenSpec>
                  <SpecItem>{value}</SpecItem>
                  <SpecDivider>/</SpecDivider>
                  <SpecItem secondary>{weightNames[key]}</SpecItem>
                </TokenSpec>
              </TokenInfo>
            </TokenHeader>
            <PreviewBox>
              <PreviewText $weight={value}>
                The quick brown fox jumps over the lazy dog
              </PreviewText>
              <PreviewTextKo $weight={value}>
                세련된 디자인과 편리한 사용성을 제공합니다
              </PreviewTextKo>
            </PreviewBox>
          </TokenItem>
        ))}
      </TokenList>
    </Container>
  );
};

const meta: Meta<typeof FontWeightDisplay> = {
  title: 'Foundation/Typography',
  component: FontWeightDisplay,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const FontWeight: Story = {};

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
  color: ${(props) => (props.secondary ? '#888888' : '#000000')};
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

const PreviewText = styled.div<{ $weight: number }>`
  font-size: 24px;
  font-weight: ${(props) => props.$weight};
  color: #000000;
  line-height: 1.4;
  letter-spacing: -0.02em;
`;

const PreviewTextKo = styled.div<{ $weight: number }>`
  font-size: 24px;
  font-weight: ${(props) => props.$weight};
  color: #000000;
  line-height: 1.5;
  letter-spacing: -0.02em;
`;
