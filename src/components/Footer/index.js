import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { Button } from "antd";

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <div>
      Lembre-se das regras básicas de segurança. Antes de inserir o seu número
      de identificação e senha de acesso em seu site, certifique-se de que sua
      senha é segura. A senha tem que conter pelo menos 8 caracteres e consiste
      em maiúsculas e minúsculas letras. Lembre-se: O banco não exige
      confirmação de quaisquer dados, por meio de SMS ou e-mail, ou instalação
      de quaisquer aplicativos nos telefones ou computadores dos usuários. Este
      site usa cookies para fornecer serviços ao mais alto nível. Ao clicar ou
      navegar no site, você concorda em permitir nossa coleta de informações por
      meio de cookies. Para mais informações sobre segurança, visite: {""}
      <Button onClick={() => dispatch(push("/privacidade"))}>
        Regras de privacidade
      </Button>
    </div>
  );
};

export default Footer;
