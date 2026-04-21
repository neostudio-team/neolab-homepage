import {
  Card,
  CardDesc,
  CardTitle,
  Grid,
  IconWrap,
  Inner,
  Section,
  SolutionIcon,
  Title,
} from "./CoreSolutionsSection.styles";

interface SolutionItem {
  title: string;
  description: string;
}

interface CoreSolutionsSectionProps {
  dict: {
    title: string;
    smart: SolutionItem;
    inputDevice: SolutionItem;
    cloud: SolutionItem;
    application: SolutionItem;
  };
}

const icons = [
  "/images/icons/icon1-smart.png",
  "/images/icons/Icon2-input.png",
  "/images/icons/icon3-cloud.png",
  "/images/icons/icon4-app.png",
];

export default function CoreSolutionsSection({ dict }: CoreSolutionsSectionProps) {
  const solutions = [dict.smart, dict.inputDevice, dict.cloud, dict.application];

  return (
    <Section>
      <Inner>
        <Title>{dict.title}</Title>
        <Grid>
          {solutions.map((solution, i) => (
            <Card key={solution.title}>
              <IconWrap>
                <SolutionIcon src={icons[i]} alt={solution.title} width={48} height={48} />
              </IconWrap>
              <CardTitle>{solution.title}</CardTitle>
              <CardDesc>{solution.description}</CardDesc>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}
