export type objectType = {
  [key: string]: any;
};

export type IResolveParams = {
  provider: string;
  data?: objectType;
};

export type TypeCrossFunction = {
  onLogout: () => void;
};

export { default as LoginSocialGithub } from "./LoginSocialGithub";
export { default as LoginSocialTwitterV1 } from "./twitter/LoginSocialTwitterV1";
export { default as LoginSocialTwitterV2 } from "./twitter/LoginSocialTwitterV2";
