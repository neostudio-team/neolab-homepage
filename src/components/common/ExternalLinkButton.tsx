import { memo, type AnchorHTMLAttributes } from "react";
import { Icon } from "@iconify/react";
import { ExternalLinkAnchor } from "./ExternalLinkButton.styles";

type ExternalLinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
  iconSize?: number;
};

function ExternalLinkButtonComponent({
  label,
  iconSize = 32,
  ...anchorProps
}: ExternalLinkButtonProps) {
  return (
    <ExternalLinkAnchor {...anchorProps}>
      {label}
      <Icon icon="ei:arrow-right" width={iconSize} height={iconSize} aria-hidden />
    </ExternalLinkAnchor>
  );
}

const ExternalLinkButton = memo(ExternalLinkButtonComponent);

export default ExternalLinkButton;
