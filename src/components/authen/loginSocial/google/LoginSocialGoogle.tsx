import { CodeResponse, GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import React, { FC } from "react";

import { IResolveParams } from "..";

type Props = {
  // eslint-disable-next-line no-unused-vars
  onSuccess: (response: IResolveParams<{ access_token: CodeResponse }>) => void;
  // eslint-disable-next-line no-unused-vars
  onError: (err: unknown) => void;
  redirectUrl: string;
};

const GoogleLogin: FC<Props> = ({ onSuccess, onError, redirectUrl, children }) => {
  const state = (Math.random() + 1).toString(36).substring(7);

  const loginGoogle = useGoogleLogin({
    onSuccess: (code: CodeResponse) => onSuccess({ provider: "google", data: { access_token: code } }),
    onError,
    flow: "auth-code",
    redirect_uri: redirectUrl,
    state,
  });

  return <div onClick={loginGoogle}>{children}</div>;
};

type WrapperProps = Props & {
  clientId: string;
};

const LoginSocialGoogle: FC<WrapperProps> = ({ onSuccess, onError, redirectUrl, clientId, children }) => (
  <GoogleOAuthProvider clientId={clientId}>
    <GoogleLogin onSuccess={onSuccess} onError={onError} redirectUrl={redirectUrl}>
      {children}
    </GoogleLogin>
  </GoogleOAuthProvider>
);

export default LoginSocialGoogle;
