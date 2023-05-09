import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import { Form } from "../../ui/form/Form";
import { routs } from "../../../routs";
import { Container } from "../../ui/Container";
import { InputField } from "../../ui/form/fields/InputField";
import { SubmitButton } from "../../ui/form/fields/SubmitButton";

const LoginPage = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  return (
    <Form onSubmit={() => navigate(routs.ENTER_CODE)}>
      <MainContainer vertical gap={20}>
        <LoginField
          border
          opacity="glass"
          required
          name="login"
          placeholder={intl.formatMessage({
            id: "loginpage.login.placeholder",
          })}
        />
        <ContinueButton styletype="primary" size="big" fit>
          <FormattedMessage id="loginpage.account.continue" />
        </ContinueButton>
      </MainContainer>
    </Form>
  );
};

const MainContainer = styled(Container)`
  justify-content: center;
  align-items: center;
  self-align: center;
  height: calc(100% - 318px);
  margin-top: 260px;

  @media (max-width: 700px) {
    overflow-y: hidden;
    width: 100%;
    padding: 0px 10%;
  }
`;

const LoginField = styled(InputField)`
  width: 320px;
  margin-left: -10px;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const ContinueButton = styled(SubmitButton)`
  width: 352px;

  @media (max-width: 700px) {
    width: 100%;
  }

  animation-duration: 0.7s;
  animation-name: slideuploginpagebutton;
  animation-direction: alternate;
  @keyframes slideuploginpagebutton {
    from {
      margin-top: 100%;
    }
    to {
      margin-top: 0%;
    }
  }
`;

export { LoginPage };
