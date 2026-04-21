"use client";

import {
  ConsentBlock,
  ConsentCheckbox,
  ConsentLabel,
  ConsentLead,
  Deco1,
  Deco2,
  Deco3,
  Deco4,
  Deco5,
  FieldInput,
  FieldRow,
  FieldTextarea,
  Form,
  Inner,
  Lead,
  PrivacyLink,
  PrivacyNote,
  Section,
  SubmitButton,
  SubmitWrap,
  Title,
} from "./CustomerInquiryForm.styles";

export default function CustomerInquiryForm() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <Section>
      <Deco1 />
      <Deco2 />
      <Deco3 />
      <Deco4 />
      <Deco5 />

      <Inner>
        <Title>문의하기</Title>
        <Lead>
          해당하는 제품의 자주 묻는 질문에서 원하는 답변을 찾을 수 없는 경우
          <br />
          에는 아래의 전화번호, 이메일, 혹은 문의하기 폼을 이용하여 주세요
        </Lead>
        <PrivacyNote>
          (주)네오랩컨버전스의 개인정보 취급방침을 확인 하시려면 상세 보기를 눌러 주세요{" "}
          <PrivacyLink href="https://www.neolab.kr/privacy-policy/" target="_blank" rel="noopener noreferrer">
            상세보기
          </PrivacyLink>
        </PrivacyNote>

        <Form onSubmit={handleSubmit}>
          <FieldRow>
            <FieldInput type="text" placeholder="성함" />
          </FieldRow>
          <FieldRow>
            <FieldInput type="tel" placeholder="전화번호" />
          </FieldRow>
          <FieldRow>
            <FieldInput type="email" placeholder="이메일 주소" />
          </FieldRow>
          <FieldRow>
            <FieldInput type="text" placeholder="제품명" />
          </FieldRow>
          <FieldRow>
            <FieldInput type="text" placeholder="구매시기" />
          </FieldRow>
          <FieldRow>
            <FieldTextarea placeholder="증상" rows={4} />
          </FieldRow>

          <ConsentBlock>
            <ConsentLead>개인정보 수집·이용에 동의합니다.</ConsentLead>
            <ConsentLabel>
              <ConsentCheckbox type="checkbox" required />
              <span>동의(필수)</span>
            </ConsentLabel>
          </ConsentBlock>

          <SubmitWrap>
            <SubmitButton type="submit">보내기</SubmitButton>
          </SubmitWrap>
        </Form>
      </Inner>
    </Section>
  );
}
