import {
  Category,
  Desc,
  FutureImage,
  ImageCol,
  Inner,
  Row,
  Section,
  TextCol,
  Title,
} from "./FutureSection.styles";

interface FutureSectionProps {
  dict: {
    category: string;
    title: string;
    description: string;
  };
}

export default function FutureSection({ dict }: FutureSectionProps) {
  return (
    <Section>
      <Inner>
        <Row>
          <TextCol>
            <Category>{dict.category}</Category>
            <Title>{dict.title}</Title>
            <Desc>{dict.description}</Desc>
          </TextCol>
          <ImageCol>
            <FutureImage
              src="/images/home/connect5-metaverse.png"
              alt="Metaverse Connection"
              width={624}
              height={450}
            />
          </ImageCol>
        </Row>
      </Inner>
    </Section>
  );
}
