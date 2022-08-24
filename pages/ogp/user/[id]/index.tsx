import ProfileOgp from "src/components/ogp/ProfileOgpComponent";

export const getServerSideProps = async (ctx) => {
  const {
    username = null,
    profile_image: profileImage = null,
    review_count: reviewCount = 0,
    match_count: matchCount = 0,
    community_count: communityCount = 0,
  } = ctx.query;
  return {
    props: {
      user: {
        username,
        profileImage: profileImage ? Buffer.from(profileImage, "base64url").toString("utf8") : "",
        reviewCount,
        matchCount,
        communityCount,
      },
    },
  };
};

export default ProfileOgp;
