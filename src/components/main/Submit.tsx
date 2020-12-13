import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { nullCheckObjectValues } from '../../lib/util';

const SubmitBlock = styled.section`
  text-align: center;
  background-color: white;
  font-size: 1rem;
  padding: 0 10px 40px;
`;

const SubmitTitle = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(115, 165, 190);
  font-weight: bold;
  font-size: 1.8rem;
  padding: 20px;
`;

const SubmitComment = styled.p`
  font-size: 1rem;
  color: black;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputBlock = styled.div`
  display: flex;
  max-width: 1068px;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0 10px;
  height: 2.5rem;
  border-radius: 4px;
  border: 1px solid black;
  margin-bottom: 1.7rem;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  &::placeholder {
    color: black;
  }
`;

const SubmitButton = styled.button`
  width: 250px;
  height: 52px;
  border-radius: 4px;
  background-color: black;
  font-weight: bold;
  color: white;
  border: none;
`;

export interface M4UFormProps {
  name?: string;
  address?: string;
  email?: string;
  phone?: string;
  tag?: string;
}

const Submit: React.FC = () => {
  const [form, setForm] = useState<M4UFormProps>({
    name: '',
    address: '',
    email: '',
    phone: '',
    tag: '',
  });

  const setFormData = (args: M4UFormProps) =>
    setForm((prev) => ({ ...prev, ...args }));

  const onClickSubmit = () => {
    if (!nullCheckObjectValues({ ...form })) {
      window.alert('모든 정보를 입력해주세요.');
      return;
    }
    const mailContent = `업체명: ${form.name}\n주소: ${form.address}\n이메일: ${form.email}\n전화번호: ${form.phone}\n상세업종: ${form.tag}`;
    emailjs
      .send(
        `${process.env.REACT_APP_EMAIL_JS_SERVICE_ID}`,
        `${process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID}`,
        { message: mailContent },
        `${process.env.REACT_APP_EMAIL_JS_USER_ID}`,
      )
      .then(
        (res) => console.log(res),
        (err) => console.error(err),
      );
    return;
  };

  return (
    <SubmitBlock>
      <SubmitTitle>공장 입점 문의</SubmitTitle>
      <SubmitComment>
        여러분의 공장을 알리고 싶다면 입점을 신청해주세요!
      </SubmitComment>
      <Form>
        <InputBlock>
          <Input
            placeholder="업체명"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ name: e.target.value })
            }
          />
        </InputBlock>
        <InputBlock>
          <Input
            placeholder="주소"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ address: e.target.value })
            }
          />
        </InputBlock>
        <InputBlock>
          <Input
            placeholder="이메일"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ email: e.target.value })
            }
          />
        </InputBlock>
        <InputBlock>
          <Input
            placeholder="휴대전화 번호 (-를 제외하고 입력해주세요)"
            pattern="[0-9]*"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ phone: e.target.value })
            }
          />
        </InputBlock>
        <InputBlock>
          <Input
            placeholder="세부업종을 정해주세요"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ tag: e.target.value })
            }
          />
        </InputBlock>
      </Form>
      <SubmitButton onClick={onClickSubmit}>제출하기</SubmitButton>
    </SubmitBlock>
  );
};

export default Submit;
