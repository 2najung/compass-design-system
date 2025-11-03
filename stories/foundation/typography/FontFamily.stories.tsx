import type { Meta, StoryObj } from '@storybook/react-vite';
import styled from 'styled-components';
import { fontFamily } from '../../../src/tokens';

const FontFamilyDisplay = () => {
  return (
    <Container>
      <PageTitle>Font Family</PageTitle>

      <Section>
        <SectionTitle>Pretendard</SectionTitle>
        <Description>
          언어별 가독성과 시각적 일관성을 고려해 국문, 영문에 Pretendard를 사용합니다.<br />
          각 폰트는 플랫폼과 컴포넌트에 관계없이 동일하게 적용되며, Compass의 모든 디자인 자산에 사용할 것을 권장합니다.
        </Description>

        <PreviewSection>
          <PreviewLarge>
            The quick brown fox jumps over the lazy dog
          </PreviewLarge>
          <PreviewLargeKo>
            세련된 디자인과 편리한 사용성을 제공합니다
          </PreviewLargeKo>
        </PreviewSection>

        <CharacterSection>
          <CharacterGroup>
            <CharLabel>Uppercase</CharLabel>
            <CharDisplay>ABCDEFGHIJKLMNOPQRSTUVWXYZ</CharDisplay>
          </CharacterGroup>
          <CharacterGroup>
            <CharLabel>Lowercase</CharLabel>
            <CharDisplay>abcdefghijklmnopqrstuvwxyz</CharDisplay>
          </CharacterGroup>
          <CharacterGroup>
            <CharLabel>Numbers</CharLabel>
            <CharDisplay>0123456789</CharDisplay>
          </CharacterGroup>
          <CharacterGroup>
            <CharLabel>Special Characters</CharLabel>
            <CharDisplay>!@#$%^&*()_+-=[]{}|;':",./&lt;&gt;?</CharDisplay>
          </CharacterGroup>
        </CharacterSection>

        <SpecTable>
          <SpecRow>
            <SpecLabel>Font Family</SpecLabel>
            <SpecValue>{fontFamily.primary}</SpecValue>
          </SpecRow>
          <SpecRow>
            <SpecLabel>Weights Available</SpecLabel>
            <SpecValue>Regular (400), Medium (500), SemiBold (600), Bold (700)</SpecValue>
          </SpecRow>
        </SpecTable>
      </Section>
    </Container>
  );
};

const meta: Meta<typeof FontFamilyDisplay> = {
  title: 'Foundation/Typography',
  component: FontFamilyDisplay,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const FontFamily: Story = {};

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
  margin: 0 0 60px 0;
  letter-spacing: -0.03em;
`;

const Section = styled.section`
  margin-bottom: 80px;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #000000;
  margin: 0 0 16px 0;
  letter-spacing: -0.02em;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #555555;
  margin: 0 0 48px 0;
`;

const PreviewSection = styled.div`
  padding: 48px 40px;
  background: #f7f8fa;
  border-radius: 12px;
  margin-bottom: 48px;
`;

const PreviewLarge = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 24px;
  line-height: 1.3;
  letter-spacing: -0.02em;
`;

const PreviewLargeKo = styled.div`
  font-size: 36px;
  font-weight: 500;
  color: #000000;
  line-height: 1.4;
  letter-spacing: -0.02em;
`;

const CharacterSection = styled.div`
  display: grid;
  gap: 32px;
  margin-bottom: 48px;
`;

const CharacterGroup = styled.div``;

const CharLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #888888;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const CharDisplay = styled.div`
  font-size: 20px;
  color: #000000;
  letter-spacing: 0.03em;
  word-break: break-all;
`;

const SpecTable = styled.div`
  border-top: 2px solid #000000;
`;

const SpecRow = styled.div`
  display: flex;
  padding: 24px 0;
  border-bottom: 1px solid #e5e5e5;

  &:last-child {
    border-bottom: none;
  }
`;

const SpecLabel = styled.div`
  width: 240px;
  font-size: 15px;
  font-weight: 600;
  color: #000000;
  flex-shrink: 0;
`;

const SpecValue = styled.div`
  font-size: 15px;
  color: #555555;
  line-height: 1.6;
`;
