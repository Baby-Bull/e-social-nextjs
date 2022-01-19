import {Box, Button} from "@mui/material";
import React, {useState} from "react";
import {useTranslation} from "next-i18next";

import ContentComponent from "src/components/layouts/ContentComponent";
import TopProfileComponent from "src/components/profile/TopProfileComponent";
import ProfileSkillComponent from "src/components/profile/ProfileSkillComponent";
import BoxNoDataComponent from "src/components/profile/BoxNoDataComponent";
import BoxRecommendMemberComponent from "src/components/profile/BoxRecommendMemberComponent";
import styles from 'src/components/profile/profile.module.scss';

const ProfileComponent = () => {
  const {t} = useTranslation();
  const [review] = useState(3);
  const [cumulativMatching] = useState(123);
  const [participatingCommunity] = useState(1);
  const [countParticipatingCommunity] = useState(0);
  const [countReview] = useState(0);
  const [lastLogin] = useState(8);
  const [profileStatus] = useState('今すぐ話せます');
  const [profileOneThing] = useState('フロントエント、バックグラウンド幅広く経験したいと思います。');
  const [profileSelfIntroduction] = useState('入社したらフロントエント、バックグラウンド幅広く経験したいと思います。文字数が多い場合は改行をし、その分テキストを表示するエリアを拡大する。');
  const [profileOccupation] = useState('フロントエンドエンジニア');
  const [profilePosition] = useState('チームリーダー');
  const [profileEmploymentStatus] = useState('正社員');
  const [profileIntroduceYourself] = useState('入社したらフロントエント、バックグラウンド幅広く経験したいと思います。文字数が多い場合は改行をし、その分テキストを表示するエリアを拡大する。');
  const [profileAddress] = useState('チームリーダー');
  const [profileTag] = useState([
    'React',
    'PHP勉強中',
    'コードレビュー',
    '駆け出しエンジニアと繋がりたい',
    '要件定義',
    'コードレビュー'
  ]);

  const [recommendMemberName] = useState('名前がここに入ります。名前が...');
  const [recommendMemberJob] = useState('フロントエンドエンジニア');
  const [recommendMemberEvaluate] = useState(1364);
  const [recommendMemberYouSpeak] = useState(
    'PHPの技術についてお話しできます。技術交換ができたら嬉しいです。また、新しい技術を習得したいと考えているので、他言語のエンジニアの方とお話しができたらと思っています。！'
  );
  const [recommendMemberTag] = useState([
    '#タグ',
    '#タグ',
    '#タグタグ',
    '#タグタグ'
  ]);

  return (
    <ContentComponent>
      <Box sx={{
        pt: '140px',
        px: '120px',
        pb: '120px'
      }} className={styles.boxTopProfile}>
        <TopProfileComponent
          review={review}
          cumulativMatching={cumulativMatching}
          participatingCommunity={participatingCommunity}
          lastLogin={lastLogin}
        />
        <ProfileSkillComponent
          profileStatus={profileStatus}
          profileOneThing={profileOneThing}
          profileSelfIntroduction={profileSelfIntroduction}
          profileOccupation={profileOccupation}
          profilePosition={profilePosition}
          profileEmploymentStatus={profileEmploymentStatus}
          profileIntroduceYourself={profileIntroduceYourself}
          profileAddress={profileAddress}
          profileTag={profileTag}
        />
        <Box sx={{
          mt: '40px',
          mb: 3,
          color: '#1A2944',
          fontSize: '24px',
          fontWeight: 700
        }} className={styles.titleNoData}>
          {t('profile:title-participating-community')}（{countParticipatingCommunity}）
          <BoxNoDataComponent content={t('profile:participating-community-no-data')}/>
        </Box>

        <Box sx={{
          mt: '40px',
          mb: 3,
          color: '#1A2944',
          fontSize: '24px',
          fontWeight: 700
        }} className={styles.titleNoData}>
          {t('profile:title-review')}（{countReview}）
          <BoxNoDataComponent content={t('profile:review-no-data')}/>
        </Box>
      </Box>
      <Box>
        <Box sx={{
          color: '#1A2944',
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: '35px',
          mb: '40px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          おすすめのメンバー
        </Box>
        <Box sx={{display: 'flex', ml: '38px', mr: '11px'}} className={styles.boxRecommendMember}>
          <BoxRecommendMemberComponent
            img="/assets/images/icon/ic_heart_blue.png"
            color="#ffffff"
            background="#FF9458"
            backgroundBtn="#1BD0B0"
            recommendMemberName={recommendMemberName}
            recommendMemberJob={recommendMemberJob}
            recommendMemberEvaluate={recommendMemberEvaluate}
            recommendMemberYouSpeak={recommendMemberYouSpeak}
            recommendMemberTag={recommendMemberTag}
            status={t('profile:talk-now')}
            txtBtn={t('profile:send-request')}
            statusLogin="ログイン中"
          />

          <BoxRecommendMemberComponent
            img="/assets/images/icon/ic_heart.png"
            color="#1A2944"
            background="#FFF9E5"
            backgroundBtn="#1BD0B0"
            recommendMemberName={recommendMemberName}
            recommendMemberJob={recommendMemberJob}
            recommendMemberEvaluate={recommendMemberEvaluate}
            recommendMemberYouSpeak={recommendMemberYouSpeak}
            recommendMemberTag={recommendMemberTag}
            status={t('profile:find-friend')}
            txtBtn={t('profile:send-request')}
            statusLogin="ログイン：6分前"
          />

          <BoxRecommendMemberComponent
            img="/assets/images/icon/ic_heart.png"
            color="#ffffff"
            background="#03BCDB"
            backgroundBtn="#989EA8"
            recommendMemberName={recommendMemberName}
            recommendMemberJob={recommendMemberJob}
            recommendMemberEvaluate={recommendMemberEvaluate}
            recommendMemberYouSpeak={recommendMemberYouSpeak}
            recommendMemberTag={recommendMemberTag}
            status={t('profile:consult-me')}
            txtBtn={t('profile:send-complete')}
            statusLogin="ログイン：6分前"
          />

          <BoxRecommendMemberComponent
            img="/assets/images/icon/ic_heart_blue.png"
            color="#ffffff"
            background="#FF9458"
            backgroundBtn="#1BD0B0"
            recommendMemberName={recommendMemberName}
            recommendMemberJob={recommendMemberJob}
            recommendMemberEvaluate={recommendMemberEvaluate}
            recommendMemberYouSpeak={recommendMemberYouSpeak}
            recommendMemberTag={recommendMemberTag}
            status={t('profile:talk-now')}
            txtBtn={t('profile:send-request')}
            statusLogin="ログイン：6分前"
          />
        </Box>
      </Box>
      <Box sx={{
        background: '#F5F5F5',
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed',
        top: '91.5%',
        opacity: 0.8,
        width: '100%'
      }}>
        <Button sx={{
          width: '280px',
          height: '56px',
          fontSize: '16px',
          fontWeight: 700,
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          lineHeight: '24px',
          background: '#1BD0B0',
          borderRadius: '40px',
        }}>
          {t('profile:send-request')}
        </Button>
      </Box>
    </ContentComponent>
  )
};
export default ProfileComponent;
