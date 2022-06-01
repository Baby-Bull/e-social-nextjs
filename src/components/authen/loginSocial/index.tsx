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
export { default as LoginSocialTwitter } from "./LoginSocialTwitter";
