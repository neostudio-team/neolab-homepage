import { Card, Inner, Main } from "./LegalDocumentShell.styles";

interface LegalDocumentShellProps {
  children: React.ReactNode;
}

export default function LegalDocumentShell({ children }: LegalDocumentShellProps) {
  return (
    <Main>
      <Inner>
        <Card>{children}</Card>
      </Inner>
    </Main>
  );
}
