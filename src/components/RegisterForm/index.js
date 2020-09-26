import React from "react";
import { Steps, Button, message } from "antd";

const { Step } = Steps;

const steps = [
  {
    title: "Nome",
  },
  {
    title: "Sobrenome",
  },
  {
    title: "Senha",
  },
  {
    title: "E-mail",
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
