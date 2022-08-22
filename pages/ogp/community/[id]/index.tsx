import CommunityOgp from "src/components/ogp/CommunityOgpComponent";

export const getServerSideProps = async (ctx) => {
  const { name = null, profile_image: profileImage = null, member_count: memberCount = 0 } = ctx.query;

  return {
    props: {
      community: {
        name,
        profileImage: profileImage ? Buffer.from(profileImage, "base64url").toString("utf8") : "",
        memberCount,
      },
    },
  };
};

export default CommunityOgp;
