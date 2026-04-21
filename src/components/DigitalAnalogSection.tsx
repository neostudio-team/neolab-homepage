import {
  ColLeft,
  ColRight,
  Desc,
  Grid,
  Inner,
  Section,
  Subtitle,
  Title,
} from "./DigitalAnalogSection.styles";

interface DigitalAnalogSectionProps {
  dict: {
    title: string;
    naturalInterface: string;
    naturalInterfaceDesc: string;
    convergedAnalog: string;
    convergedAnalogDesc: string;
  };
}

export default function DigitalAnalogSection({ dict }: DigitalAnalogSectionProps) {
  return (
    <Section>
      <Inner>
        <Title>{dict.title}</Title>
        <Grid>
          <ColRight>
            <Subtitle>{dict.naturalInterface}</Subtitle>
            <Desc>{dict.naturalInterfaceDesc}</Desc>
          </ColRight>
          <ColLeft>
            <Subtitle>{dict.convergedAnalog}</Subtitle>
            <Desc>{dict.convergedAnalogDesc}</Desc>
          </ColLeft>
        </Grid>
      </Inner>
    </Section>
  );
}
