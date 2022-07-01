export const bannersMockData = [
  {
    src: "/assets/images/home_page/home_1.svg",
  },
  {
    src: "/assets/images/home_page/home_2.svg",
  },
  {
    src: "/assets/images/home_page/home_3.svg",
  },
  {
    src: "/assets/images/home_page/home_4.svg",
  },
];

export const notificationMockData = {
  title: "お知らせ",
  data: [
    {
      content: "【コミュニティ機能など】2021年10月にRebaseがリニューアルしました🎉",
    },
    {
      content: "【コミュニティ機能など】2021年10月にRebaseがリニューアルしました🎉",
    },
  ],
};

// export const notificationsMockData = [
//   {
//     title: "ヒント",
//     content: "goodhub1へようこそ！まずはプロフィール詳細を記入してみると、マッチング率がUPします☆",
//   },
//   {
//     title: "ヒント",
//     content: "goodhub2へようこそ！まずはプロフィール詳細を記入してみると、マッチング率がUPします☆",
//   },
// ];

export const menuNotificationsData = [
  {
    id: 1,
    image: "/assets/images/avatar_user.png",
    content: "●●さんからマッチングリクエストが届きました。",
    important: false,
    createdTime: "6:16",
  },
  {
    id: 2,
    image: "/assets/images/avatar_review.png",
    content: "コミュニティ名の参加が承認されました。",
    important: false,
    createdTime: "6:16",
  },
  {
    id: 3,
    image: "/assets/images/avatar_review.png",
    content: "コミュニティ名の参加が承認されませんでした。",
    important: false,
    createdTime: "6:16",
  },
  {
    id: 4,
    image: "/assets/images/rectangle.png",
    content: "運営からのお知らせ内容が入ります。",
    important: true,
    createdTime: "6:16",
  },
  {
    id: 5,
    image: "/assets/images/avatar_user.png",
    content: "●●さんからメッセージが届きました。",
    important: false,
    createdTime: "6:16",
  },
  {
    id: 6,
    image: "/assets/images/avatar_user.png",
    content: "コミュニティ名のグループメッセージが届きました。",
    important: false,
    createdTime: "6:16",
  },
  {
    id: 7,
    image: "/assets/images/avatar_user.png",
    content: "●●さんがログインしました",
    important: true,
    createdTime: "6:16",
  },
  {
    id: 8,
    image: "/assets/images/avatar_user.png",
    content: "●●さんがログインしました",
    important: true,
    createdTime: "6:16",
  },
  {
    id: 9,
    image: "/assets/images/avatar_user.png",
    content: "●●さんがログインしました",
    important: true,
    createdTime: "6:16",
  },
  {
    id: 10,
    image: "/assets/images/avatar_user.png",
    content: "●●さんがログインしました",
    important: true,
    createdTime: "6:16",
  },
  {
    id: 111,
    image: "/assets/images/avatar_user.png",
    content: "●●さんがログインしました",
    important: true,
    createdTime: "6:16",
  },
];

export const dataMatchingMockData = {
  request: 3,
  application: 5,
  people: 3,
  community: 5,
};

const itemRecommendCommunityMockData = {
  id: "string",
  profile_image: "/assets/images/participating_community/community_sample.png",
  login_count: 6,
  name: "コミュニティの名前がここに入ります。最大文字数40文字です。コミュニティの名前が",
  member_count: 0,
  tags: ["#タグ", "#タグ", "#タグタグ", "#タグタグ", "#タグ", "#タグ", "#タグタグ", "#タグタグ"],
  description:
    "概要が数行表示されます。概要が数行表示されます。概要が数行表示されます。概要が数行表示されます。概要が数行表示されます。概要が数行表示概要が数行表示概要が数行表示",
  is_public: false,
  join_status: "",
};

export const recommendCommunityMockData = [
  {
    ...itemRecommendCommunityMockData,
    status: 1,
  },
  {
    ...itemRecommendCommunityMockData,
    status: 2,
  },
  {
    ...itemRecommendCommunityMockData,
    status: 3,
  },
  {
    ...itemRecommendCommunityMockData,
    status: 1,
  },
  {
    ...itemRecommendCommunityMockData,
    status: 1,
  },
  {
    ...itemRecommendCommunityMockData,
    status: 2,
  },
  {
    ...itemRecommendCommunityMockData,
    status: 3,
  },
  {
    ...itemRecommendCommunityMockData,
    status: 1,
  },
];

const itemMemberMockData = {
  image: "/assets/images/home_page/recommend_member.svg",
  lastLogin: "6分前",
  name: "名前がここに入ります。名前が名前が名前が",
  career: "フロントエンドエンジニア",
  review: 1364,
  introduce: "エンジニアしてます！色んな人と話したいです。",
  tags: ["#タグ", "#タグ", "#タグタグ", "#タグタグ", "#タグ", "#タグ", "#タグタグ", "#タグタグ"],
  description:
    "PHPの技術についてお話しできます。技術交換ができたら嬉しいです。また、新しい技術を習得したいと考えているので、他言語のエンジニアの方とお話しができたらと思っています。！",
};

export const recommendMembers = () => {
  const dataReturn = [];
  for (let i = 0; i < 8; i++) {
    dataReturn.push({
      ...itemMemberMockData,
      status: Math.floor(Math.random() * 2) + 1,
      isLiked: Math.floor(Math.random() * 2),
      chatStatus: Math.floor(Math.random() * 3) + 1,
    });
  }
  return dataReturn;
};
