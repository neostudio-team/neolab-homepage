"use client";
import { useState } from "react";
import {
  Answer,
  Chevron,
  Item,
  QuestionButton,
  Root,
} from "./SupportFaqAccordion.styles";

interface FaqItem {
  q: string;
  a: string | string[];
}

interface SupportFaqAccordionProps {
  items: FaqItem[];
}

function FaqRow({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
}) {
  function handleQuestionClick() {
    onToggle(index);
  }

  return (
    <Item>
      <QuestionButton type="button" onClick={handleQuestionClick}>
        <span>{item.q}</span>
        <Chevron>{isOpen ? "−" : "+"}</Chevron>
      </QuestionButton>
      {isOpen && (
        <Answer>
          {Array.isArray(item.a)
            ? item.a.map((line, j) => <p key={String(j)}>{line}</p>)
            : <p>{item.a}</p>}
        </Answer>
      )}
    </Item>
  );
}

export default function SupportFaqAccordion({ items }: SupportFaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  function handleToggle(index: number) {
    setOpen((prev) => (prev === index ? null : index));
  }

  return (
    <Root>
      {items.map((item, i) => (
        <FaqRow
          key={item.q}
          item={item}
          index={i}
          isOpen={open === i}
          onToggle={handleToggle}
        />
      ))}
    </Root>
  );
}
