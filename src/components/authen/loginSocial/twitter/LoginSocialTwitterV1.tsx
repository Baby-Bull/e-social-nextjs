/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable camelcase */
/**
 *
 * LoginSocialGithub
 *
 */
import React, { forwardRef, memo, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";

import { getAuthUrlTwitter } from "src/services/auth";

import { IResolveParams, objectType, TypeCrossFunction } from "..";

interface Props {
  state?: string;
  scope?: string;
  className?: string;
  redirect_uri: string;
  children?: React.ReactNode;
  onLoginStart?: () => void;
  onLogoutSuccess?: () => void;
  onReject: (reject: string | objectType) => void;
  onResolve: ({ provider, data }: IResolveParams) => void;
}

export const LoginSocialTwitterV1 = forwardRef(
  (
    {
      state = "",
      scope = "repo,gist",
      className = "",
      redirect_uri,
      children,
      onReject,
      onResolve,
      onLoginStart,
      onLogoutSuccess,
    }: Props,
    ref: React.Ref<TypeCrossFunction>,
  ) => {
    const [isLogged, setIsLogged] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
      const popupWindowURL = new URL(window.location.href);
      const oauthToken = popupWindowURL.searchParams.get("oauth_token");
      const oauthVerifier = popupWindowURL.searchParams.get("oauth_verifier");
      const twitterAuth = localStorage.getItem("twitter");
      console.log("HERE", twitterAuth, oauthToken, twitterAuth);
      if (oauthToken && oauthVerifier && twitterAuth) {
        const cachedTwitterTokens = JSON.parse(twitterAuth);
        console.log(cachedTwitterTokens, oauthToken, oauthVerifier);
        localStorage.setItem(
          "twitter",
          JSON.stringify({
            ...cachedTwitterTokens,
            oauth_token: oauthToken,
            oauth_verifier: oauthVerifier,
          }),
        );
        window.close();
      }
    }, []);

    const getAccessToken = useCallback(
      (code: any) => {
        console.log("HERE");
        setIsProcessing(false);
        setIsLogged(true);
        onResolve({ provider: "twitter", data: code });
      },
      [onReject, redirect_uri, state],
    );

    const handlePostMessage = useCallback(
      async ({ type, code, provider }) => type === "code" && provider === "twitter" && code && getAccessToken(code),
      [getAccessToken],
    );
    const onChangeLocalStorage = useCallback(() => {
      // window.removeEventListener("storage", onChangeLocalStorage, false);
      const twitterAuth = localStorage.getItem("twitter");
      console.log("DADA");
      setIsProcessing(true);
      handlePostMessage({ provider: "twitter", type: "code", code: JSON.parse(twitterAuth) });
      localStorage.removeItem("twitter");
    }, [handlePostMessage]);

    const onLogin = useCallback(() => {
      if (!isProcessing) {
        onLoginStart && onLoginStart();
        const width = 450;
        const height = 730;
        const left = window.screen.width / 2 - width / 2;
        const top = window.screen.height / 2 - height / 2;
        const twitterPopup = window.open(
          "",
          "Twitter",
          `menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=${width}, height=${height}, top=${top}, left=${left}`,
        ); // fix bug on safari, window.open must not be in async function
        getAuthUrlTwitter(redirect_uri).then((authLinks) => {
          localStorage.setItem(
            "twitter",
            JSON.stringify({
              oauth_verifier: authLinks.oauth_verifier,
              oauth_token_secret: authLinks.oauth_token_secret,
            }),
          );
          window.addEventListener("storage", onChangeLocalStorage, false);
          twitterPopup.location = authLinks.url;
        });
      }
    }, [isProcessing, onLoginStart, onChangeLocalStorage, scope, state, redirect_uri]);

    useImperativeHandle(ref, () => ({
      onLogout: () => {
        if (isLogged) {
          setIsLogged(false);
          onLogoutSuccess && onLogoutSuccess();
        } else {
          console.log("You must login before logout.");
        }
      },
    }));

    return (
      <div className={className} onClick={onLogin}>
        {children}
      </div>
    );
  },
);

export default memo(LoginSocialTwitterV1);
