/* eslint-disable */
import * as React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { parseCookies } from "nookies";
import Head from "next/head";

import { IS_PROFILE_EDITED, USER_TOKEN } from "src/helpers/storage";
import { getOrtherUserProfile, getUserCommunites, getUserRecommended, getUserReviews } from "src/services/user";
import { isMobile } from "react-device-detect";
import ProfileComponent from "../../src/components/profile/ProfileComponent";

const sampleUserId = "624cf8551b8a720009e2e1db";

const Profile = ({ url, userId, profileSkill, countAllCommunities, initialReviews, initialCursorReview, countAllReviews, recommended }) => (
  <React.Fragment>
    <Head>
      <meta property="og:type" content="article" key="og-type" />
      <meta property="og:title" content={`goodhub user: ${profileSkill.username}`} key="og-title" />
      <meta property="og:description" content={profileSkill.self_description} key="og-description" />
      <meta property="og:url" content={url} key="og-url" />
      <meta property="og:image" content={profileSkill.ogp_image} key="og-img" />
      <meta property="og:site_name" content="goodhub" key="og-type" />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="315" />
      <meta name="twitter:card" content="summary_large_image" key="twitter-card" />
      <meta name="twitter:url" content={url} key="twitter-url" />
      <meta name="twitter:image" content={profileSkill.ogp_image} key="twitter-image" />
      <meta name="twitter:title" content={`goodhub user: ${profileSkill.username}`} key="twitter-title" />
      <meta name="twitter:description" content={profileSkill.self_description} key="twitter-description" />
      {/* Inject MUI styles first to match with the prepend: true configuration. */}
    </Head>
    <ProfileComponent
      // isAuth={isAuth}
      userId={userId}
      profileSkill={profileSkill}

      countAllCommunities={countAllCommunities}

      initialReviews={initialReviews}
      initialCursorReview={initialCursorReview}
      countAllReviews={countAllReviews}

      recommended={recommended}
    />
  </React.Fragment>
);

export const getServerSideProps = async (ctx) => {
  const { locale } = ctx;
  const { userId } = ctx.params;
  const cookies = parseCookies(ctx);
  const isAuth = cookies[USER_TOKEN];
  if (isAuth && cookies[IS_PROFILE_EDITED] === "false") {
    return {
      redirect: {
        destination: "/register/form",
        permanent: false,
      },
    };
  }
  const [profileSkill, communities, allReviews, recommended] = await Promise.all([
    getOrtherUserProfile(userId),
    getUserCommunites(userId, isMobile ? 2 : 10, ""),
    getUserReviews(userId, isMobile ? 5 : 10, ""),
    ...(isAuth ? [getUserRecommended(20)] : [Promise.resolve(undefined)]),
  ]);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "profile", "user-search", "home"])),
      url: `${process.env.NEXT_PUBLIC_URL_PROFILE}${ctx.resolvedUrl}`,
      isAuth,
      userId,
      profileSkill,

      countAllCommunities: communities?.items_count || 0,

      initialReviews: allReviews?.items || [],
      initialCursorReview: allReviews?.cursor || "",
      countAllReviews: allReviews?.items_count || 0,

      recommended: recommended?.items || [],
      paths: [{ params: { userId: sampleUserId } }],
      fallback: true, // 上記以外のパスでアクセスした場合は 404 ページにしない
    },
  };
};

export default Profile;
