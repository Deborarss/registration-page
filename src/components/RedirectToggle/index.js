import React from "react";
import { createStructuredSelector } from "reselect";
import { push } from "connected-react-router";
import { useSelector, useDispatch } from "react-redux";
import { makeSelectLocation } from "../../containers/App/selectors";

const stateSelector = createStructuredSelector({
  location: makeSelectLocation(),
});

const RedirectToggle = () => {
  const {
    location: { pathname },
  } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const TogglePath = ({ name, path }) => (
    <button onClick={() => dispatch(push(path))}>{name}</button>
  );

  return (
    <div>
      {pathname === "/login" ? (
        <div>
          Se ainda não tem conta, você pode criar uma agora clicando em{" "}
          <TogglePath name="Register" path="/register " />
        </div>
      ) : (
        <div>
          Se você já tem uma conta, você pode logar clicando aqui{" "}
          <TogglePath name="Login" path="/login" />
        </div>
      )}
    </div>
  );
};

export default RedirectToggle;
