import type { Meta, StoryObj } from '@storybook/react-vite';
import styled from 'styled-components';
import { fontFamily, lineHeight } from '../../../src/tokens';

const LineHeightDisplay = () => {
  return (
    <Container>
      <PageTitle>Line Height</PageTitle>
      <Description>
        줄 높이 토큰은 적절한 수직 리듬과 가독성을 보장합니다.<br />
        동일한 순서의 폰트 크기 토큰과 함께 사용하는 것을 권장합니다.
      </Description>

      <TokenList>
        {Object.entries(lineHeight).map(([key, value]) => {
          const remValue = (parseInt(value) / 16).toFixed(3);
          return (
            <TokenItem key={key}>
              <TokenHeader>
                <TokenInfo>
                  <TokenName>leading-{key}</TokenName>
                  <TokenSpec>
                    <SpecItem>{value}</SpecItem>
                    <SpecDivider>/</SpecDivider>
                    <SpecItem secondary>{remValue}rem</SpecItem>
                  </TokenSpec>
                </TokenInfo>
              </TokenHeader>
              <PreviewBox $lineHeight={value}>
                <PreviewText>
                  Typography is the art and technique of arranging type to make written language legible, readable and appealing when displayed.
                </PreviewText>
                <PreviewTextKo>
                  타이포그래피는 문자를 배열하여 가독성과 심미성을 높이는 기술입니다. 적절한 행간은 텍스트의 가독성에 큰 영향을 미칩니다.
                </PreviewTextKo>
              </PreviewBox>
            </TokenItem>
          );
        })}
      </TokenList>
    </Container>
  );
};

const meta: Meta<typeof LineHeightDisplay> = {
  title: 'Foundation/Typography',
  component: LineHeightDisplay,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LineHeight: Story = {};

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

const PreviewBox = styled.div<{ $lineHeight: string }>`
  padding: 32px 40px;
  background: #f7f8fa;
  border-radius: 12px;
  line-height: ${props => props.$lineHeight};
  display: grid;
  gap: 24px;
`;

const PreviewText = styled.div`
  font-size: 16px;
  color: #000000;
  letter-spacing: -0.01em;
`;

const PreviewTextKo = styled.div`
  font-size: 16px;
  color: #000000;
  letter-spacing: -0.01em;
`;
