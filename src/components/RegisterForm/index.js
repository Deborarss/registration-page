import React from "react";
import { Steps, Button, message, Form, Input, Select } from "antd";

const { Step } = Steps;

const FirstName = () => (
  <Form.Item
    name="firstname"
    rules={[
      {
        required: true,
        message: "Por favor, digite seu nome!",
      },
    ]}
  >
    <Input placeholder="Digite seu nome" />
  </Form.Item>
);

const LastName = () => (
  <Form.Item
    name="lastname"
    rules={[
      {
        required: true,
        message: "Por favor, digite seu sobrenome!",
      },
    ]}
  >
    <Input placeholder="Digite seu sobrenome" />
  </Form.Item>
);

const Password = () => (
  <Form.Item
    name="password"
    rules={[
      {
        required: true,
        message: "Por favor, digite seu senha!",
      },
    ]}
  >
    <Input placeholder="Digite sua senha" />
  </Form.Item>
);

const Currency = () => (
  <Form.Item name="gender" rules={[{ required: true }]}>
    <Select placeholder="Selecione uma opção" allowClear>
      <Select.Option value="male">Masculino</Select.Option>
      <Select.Option value="female">Feminino</Select.Option>
      <Select.Option value="other">Outro</Select.Option>
    </Select>
  </Form.Item>
);

const EmailAddress = () => (
  <Form.Item
    name="email"
    rules={[
      {
        required: true,
        message: "Por favor, digite seu e-mail!",
      },
    ]}
  >
    <Input placeholder="Digite seu e-mail" />
  </Form.Item>
);

const steps = [
  {
    title: "Nome",
    content: <FirstName />,
  },
  {
    title: "Sobrenome",
    content: <LastName />,
  },
  {
    title: "Senha",
    content: <Password />,
  },
  {
    title: "Moeda",
    content: <Currency />,
  },
  {
    title: "E-mail",
    content: <EmailAddress />,
  },
];

const RegisterForm = () => {
  const [currentStep, setCurrentStep] = React.useState(0);

  const success = () => {
    message.success("Processo finalizado com sucesso!");
  };

  return (
    <>
      <Steps current={currentStep}>
        {steps.map((step) => (
          <Step key={step.title} title={step.title} />
        ))}
      </Steps>

      <Form name="register">
        <div>{steps[currentStep].content}</div>
      </Form>

      <div style={{ marginTop: "30px" }}>
        {currentStep > 0 ? (
          <Button
            type="primary"
            style={{ marginRight: "10px" }}
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Voltar
          </Button>
        ) : (
          ""
        )}

        {currentStep < steps.length - 1 ? (
          <Button
            type="primary"
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            Próximo
          </Button>
        ) : (
          <Button type="primary" onClick={success}>
            Finalizar
          </Button>
        )}
      </div>
    </>
  );
};

export default RegisterForm;
