export interface CommunityBasic {
  id: string;
  name: string;
  profile_image: string;
  member_count: number;
}

export interface IRecommendCommunityItemHomepage extends CommunityBasic {
  login_count: number;
  tags: Array<string>;
  description: string;
  is_public: boolean;
  join_status: string;
  status: number;
}
