import type { Meta, StoryObj } from '@storybook/react-vite';
import styled from 'styled-components';
import { fontFamily, letterSpacing } from '../../../src/tokens';

const LetterSpacingDisplay = () => {
  return (
    <Container>
      <PageTitle>Letter Spacing</PageTitle>
      <Description>
        자간은 글자 간의 간격을 조절해 텍스트의 가독성과 시각적 리듬을 향상시키는 타이포그래피 요소입니다. 텍스트 스타일에 따라 적절한 자간 값을 적용하여 콘텐츠의 밀도와 안정감을 조정하며, 일관된 디자인 경험을 제공하기 위해 자간 토큰을 정의합니다.
      </Description>

      <TokenList>
        {Object.entries(letterSpacing).map(([key, value]) => (
          <TokenItem key={key}>
            <TokenHeader>
              <TokenInfo>
                <TokenName>letterspacing-{key}</TokenName>
                <TokenSpec>
                  <SpecItem>{value}</SpecItem>
                </TokenSpec>
              </TokenInfo>
            </TokenHeader>
            <PreviewBox>
              <PreviewText $spacing={value}>
                The quick brown fox jumps over the lazy dog
              </PreviewText>
              <PreviewTextKo $spacing={value}>
                세련된 디자인과 편리한 사용성을 제공합니다
              </PreviewTextKo>
            </PreviewBox>
          </TokenItem>
        ))}
      </TokenList>
    </Container>
  );
};

const meta: Meta<typeof LetterSpacingDisplay> = {
  title: 'Foundation/Typography',
  component: LetterSpacingDisplay,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LetterSpacing: Story = {};

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

const PreviewBox = styled.div`
  padding: 32px 40px;
  background: #f7f8fa;
  border-radius: 12px;
  display: grid;
  gap: 16px;
`;

const PreviewText = styled.div<{ $spacing: string }>`
  font-size: 24px;
  letter-spacing: ${props => props.$spacing};
  color: #000000;
  line-height: 1.4;
`;

const PreviewTextKo = styled.div<{ $spacing: string }>`
  font-size: 24px;
  letter-spacing: ${props => props.$spacing};
  color: #000000;
  line-height: 1.5;
`;
