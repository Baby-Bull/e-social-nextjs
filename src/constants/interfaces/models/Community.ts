export interface CommunityBasic {
  id: string;
  name: string;
  profileImage: string;
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
