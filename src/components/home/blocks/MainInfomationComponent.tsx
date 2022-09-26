/* eslint-disable */
import React from 'react'
import { Box, Grid, Typography, Button, Avatar } from '@mui/material';
import styles from "src/components/home/home.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { IStoreState } from "src/constants/interface";
import { useSelector } from "react-redux";
import Link from 'next/link';

export default function MainInfomationComponent() {
    const { t } = useTranslation();
    const auth = useSelector((state: IStoreState) => state.user);

    const dataInfoMatching = [
        {
            title: t("home:matching.community"),
            icon: "/assets/images/home_page/ic_star_circle.svg",
            number: auth?.community_count ?? 0,
            link: "",
        },
        {
            title: t("home:matching.people"),
            icon: "/assets/images/home_page/ic_heart_blue.svg",
            number: auth?.favorite_count ?? 0,
            link: "",
        },
        {
            title: t("home:matching.request"),
            icon: "/assets/images/home_page/ic_user.svg",
            number: auth?.match_application_count ?? 0,
            link: "",
        },
        {
            title: t("home:matching.application"),
            icon: "/assets/images/home_page/ic_hand.svg",
            number: auth?.match_request_pending_count ?? 0,
            link: "",
        },

    ]
    return (
        <Box className={styles.mainInfomations} sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid className={styles.imgInfomation} item xs={3}>
                    <Box className={styles.infoTitle}>お名前さん</Box>
                    <Avatar
                        sx={{
                            borderRadius: "50%",
                            width: "106px",
                            height: "106px",
                            margin: "auto",
                        }}
                    >
                        <Image
                            loader={() => auth?.profile_image}
                            src={auth?.profile_image || "/assets/images/avatar_user.png"}
                            alt="Image"
                            width={106}
                            height={106}
                            loading="lazy"
                            className="rounded-full"
                        />
                    </Avatar>
                    <Box className={styles.contentProfile}>
                        <Typography className={styles.titleProfile}>マイプロフィールを充実させてみよう！</Typography>
                        <Link href="/my-profile">
                            <Button className={styles.btnProfile}>マイプロフィール編集</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid className={styles.matchingInfomation} item xs={3}>
                    <Box className={styles.infoTitle}>goodhubメニュー</Box>
                    <Grid container>
                        <Grid item xs={9} >
                            <ul className={styles.matchingListTitle}>
                                {dataInfoMatching?.map((item, index) => (
                                    <li key={index}>
                                        <img src={item.icon} alt="icon" />
                                        <span>{item.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                        <Grid item xs={3} >
                            <ul className={styles.matchingListNumber}>
                                {dataInfoMatching?.map((item, index) => (
                                    <li key={index}>{item.number}</li>
                                ))}
                            </ul>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={styles.missionInfomation} item xs={6}>
                    <Box className={styles.infoTitle}>ミッションクリアしてみよう！</Box>
                    <ul className={styles.missionList}>
                        <li>
                            <span style={{ color: "#989EA8" }}>Mission 1 プロフィールを充実させて、色んな人に知ってもらおう</span>
                            <div className={styles.doneMission}>OK</div>
                        </li>
                        <li>
                            <span>Mission 2 気になるコミュニティに参加して、友達を増やそう</span>
                        </li>
                        <li>
                            <span>Mission 3 コミュニティチャットで自己紹介をしてみよう</span>
                        </li>
                        <li>
                            <span>Mission 4 コミュニティで話題を投稿して、メンバーと交流してみよう</span>
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </Box>
    )
}
