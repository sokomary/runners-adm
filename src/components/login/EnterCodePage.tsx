import React, { useEffect, useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { useField } from "react-final-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Form } from "../ui/form/Form";
import { routs } from "../../routs";
import { ToastContent } from "../ui/ToastContent";
import { InputField } from "../ui/form/fields/InputField";
import { Container } from "../ui/Container";
import { SubmitButton } from "../ui/form/fields/SubmitButton";

interface Code {
  d0: string;
  d1: string;
  d2: string;
  d3: string;
  d4: string;
  d5: string;
}
const EnterCodePage = () => {
  const navigate = useNavigate();
  const getCode = (values: Code) =>
    Object.values(values).reduce((a, v) => a + v);
  return (
    <Form
      onSubmit={(values: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const code = getCode(values as Code);
        navigate(routs.START);
      }}
    >
      <MainContainer vertical gap={30}>
        <CodeHeader>
          <FormattedMessage id="register.code.header" />
        </CodeHeader>
        <FormContent />
        <ResendContainer gap={5}>
          <FormattedMessage id="register.code.question" />
          <CreateAccountLinkText
            onClick={() =>
              toast(
                <ToastContent>
                  <FormattedMessage id="register.code.resended" />
                </ToastContent>
              )
            }
          >
            <FormattedMessage id="register.code.actions.resend" />
          </CreateAccountLinkText>
        </ResendContainer>
        <StyledSubmitButton styletype="primary">
          <FormattedMessage id="register.code.actions.submit" />
        </StyledSubmitButton>
      </MainContainer>
    </Form>
  );
};

const FormContent = () => {
  const [back1, setBack1] = useState(false);
  const [back2, setBack2] = useState(false);
  const [back3, setBack3] = useState(false);
  const [back4, setBack4] = useState(false);
  const [back5, setBack5] = useState(false);

  const ref0 = useRef<HTMLInputElement>(null);
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);
  const ref4 = useRef<HTMLInputElement>(null);
  const ref5 = useRef<HTMLInputElement>(null);

  const { input: input0 } = useField("d0");
  const { input: input1 } = useField("d1");
  const { input: input2 } = useField("d2");
  const { input: input3 } = useField("d3");
  const { input: input4 } = useField("d4");
  const { input: input5 } = useField("d5");

  useEffect(() => {
    if (back5 && ref4.current && input5.value.length === 0) {
      ref4.current.focus();
      setBack5(false);
    }
  }, [back5, input5.value.length]);

  useEffect(() => {
    if (back4 && ref3.current && input4.value.length === 0) {
      ref3.current.focus();
      setBack4(false);
    }
  }, [back4, input4.value.length]);

  useEffect(() => {
    if (back3 && ref2.current && input3.value.length === 0) {
      ref2.current.focus();
      setBack3(false);
    }
  }, [back3, input3.value.length]);

  useEffect(() => {
    if (back2 && ref1.current && input2.value.length === 0) {
      ref1.current.focus();
      setBack2(false);
    }
  }, [back2, input2.value.length]);

  useEffect(() => {
    if (back1 && ref0.current && input1.value.length === 0) {
      ref0.current.focus();
      setBack1(false);
    }
  }, [back1, input1.value.length]);

  useEffect(() => {
    if (ref0.current) {
      ref0.current.focus();
    }
  }, [ref0]);

  useEffect(() => {
    if (input0.value.length === 1 && ref1.current) {
      ref1.current.focus();
    }
  }, [input0.value.length]);

  useEffect(() => {
    if (input1.value.length === 1 && ref2.current) {
      ref2.current.focus();
    }
  }, [input1.value.length]);

  useEffect(() => {
    if (input2.value.length === 1 && ref3.current) {
      ref3.current.focus();
    }
  }, [input2.value.length]);

  useEffect(() => {
    if (input3.value.length === 1 && ref4.current) {
      ref4.current.focus();
    }
  }, [input3.value.length]);

  useEffect(() => {
    if (input4.value.length === 1 && ref5.current) {
      ref5.current.focus();
    }
  }, [input4.value.length]);

  return (
    <CodeContainer gap={9}>
      <DigitContainer vertical gap={1}>
        <InvisibleField
          type="number"
          name="d0"
          required
          invisible
          maxlen={1}
          ref={ref0}
        />
        <Underscore />
      </DigitContainer>
      <DigitContainer vertical gap={1}>
        <InvisibleField
          type="number"
          name="d1"
          required
          invisible
          maxlen={1}
          ref={ref1}
          onKeyDown={(e) => {
            if (e.key === "Backspace" && ref0.current) {
              setBack1(true);
            }
          }}
        />
        <Underscore />
      </DigitContainer>
      <DigitContainer vertical gap={1}>
        <InvisibleField
          type="number"
          name="d2"
          required
          invisible
          maxlen={1}
          ref={ref2}
          onKeyDown={(e) => {
            if (e.key === "Backspace" && ref1.current) {
              setBack2(true);
            }
          }}
        />
        <Underscore />
      </DigitContainer>
      <DigitContainer vertical gap={1}>
        <InvisibleField
          type="number"
          name="d3"
          required
          invisible
          maxlen={1}
          ref={ref3}
          onKeyDown={(e) => {
            if (e.key === "Backspace" && ref2.current) {
              setBack3(true);
            }
          }}
        />
        <Underscore />
      </DigitContainer>
      <DigitContainer vertical gap={1}>
        <InvisibleField
          type="number"
          name="d4"
          required
          invisible
          maxlen={1}
          ref={ref4}
          onKeyDown={(e) => {
            if (e.key === "Backspace" && ref3.current) {
              setBack4(true);
            }
          }}
        />
        <Underscore />
      </DigitContainer>
      <DigitContainer vertical gap={1}>
        <InvisibleField
          type="number"
          name="d5"
          required
          invisible
          maxlen={1}
          ref={ref5}
          onKeyDown={(e) => {
            if (e.key === "Backspace" && ref4.current) {
              setBack5(true);
            }
          }}
        />
        <Underscore />
      </DigitContainer>
    </CodeContainer>
  );
};

const CodeHeader = styled.div`
  color: white;
  font-size: 38px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 125px;

  @media (max-width: 700px) {
    margin-bottom: 20px;
    font-size: 24px;
  }
`;

const Underscore = styled.div`
  background-color: #4a6161;
  opacity: 62;
  border-radius: 11px;
  height: 5px;
  width: 50px;

  @media (max-width: 700px) {
    width: 35px;
  }
`;

const MainContainer = styled(Container)`
  align-items: center;
  margin-top: 100px;

  @media (max-width: 700px) {
    margin-top: 0px;
    height: calc(100vh - 150px);
    justify-content: center;
  }
`;

const ResendContainer = styled(Container)`
  color: white;
  margin-top: 47px;

  @media (max-width: 700px) {
    margin-top: 20px;
    font-size: 14px;
  }
`;

const CreateAccountLinkText = styled.div`
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
`;

const InvisibleField = styled(InputField)`
  width: 40px;
  color: white !important;
  text-align: center;
  font-size: 40px;

  color: white;
  font-weight: bold;

  @media (max-width: 700px) {
    font-size: 25px;
  }
`;

const DigitContainer = styled(Container)`
  align-items: center;

  animation-duration: 0.6s;
  animation-name: enter-code-fields;
  animation-direction: alternate;
  @keyframes enter-code-fields {
    from {
      margin-left: 50%;
    }
    to {
      margin-left: 0%;
    }
  }

  @media (max-width: 700px) {
    animation-duration: 0.6s;
    animation-name: enter-code-fields-wide;
    animation-direction: alternate;
    @keyframes enter-code-fields-wide {
      from {
        margin-left: 20%;
      }
      to {
        margin-left: 0%;
      }
    }
  }
`;

const CodeContainer = styled(Container)`
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`;

const StyledSubmitButton = styled(SubmitButton)`
  @media (max-width: 700px) {
    margin-top: 50px;
  }
`;

export { EnterCodePage };
