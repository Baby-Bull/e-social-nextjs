import {Box, Tabs, Tab, Typography} from "@mui/material";
import React from "react";
import {useTranslation} from "next-i18next";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import styles from 'src/components/profile/profile.kill.module.scss';

interface ProfileSkillComponentProps {
  profileStatus: string;
  profileOneThing: string;
  profileSelfIntroduction: string;
  profileOccupation: string;
  profilePosition: string;
  profileEmploymentStatus: string;
  profileIntroduceYourself: string;
  profileAddress: string;
  profileTag: Array<string>;
}

const TabPanel = (props) => {
  const {children, value, index} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{p: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ProfileSkillComponent: React.SFC<ProfileSkillComponentProps> = ({
                                                                        profileStatus,
                                                                        profileOneThing,
                                                                        profileSelfIntroduction,
                                                                        profileOccupation,
                                                                        profilePosition,
                                                                        profileEmploymentStatus,
                                                                        profileIntroduceYourself,
                                                                        profileAddress,
                                                                        profileTag}) => {
  const {t} = useTranslation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{
      background: '#ffffff',
      px: '80px',
      pb: '78px',
      pt: '20px'
    }} className={styles.wrapBoxProfileSkill}>
      <Box sx={{
        background: '#ffffff',
        border: '1px solid #03BCDB',
        borderRadius: '40px',
        width: '240px',
        height: '32px',
        margin: '0 auto',
        mb: '63px',
        fontSize: '14px',
        fontWeight: 700,
        color: '#03BCDB',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }} className={styles.boxAddFriend}>
        <img src="/assets/images/icon/ic_heart.png" alt=""/>

        <Box sx={{ml: 1}}>
          {t('profile:add-friend')}
        </Box>
      </Box>
      <Box sx={{width: '100%'}} className={styles.boxTabProfile}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label={t('profile:profile')} {...a11yProps(0)} className={styles.tabProfile}/>
            <Tab label={t('profile:skill')} {...a11yProps(1)} className={styles.tabProfile}/>
          </Tabs>
        </Box>
        <Box sx={{border: '2px solid #03BCDB'}}>
          <TabPanel value={value} index={0}>
            <Box className={styles.boxContentTab}>
              <Box className={styles.titleContentTab}>
                {t('profile:status')}
              </Box>
              <Box sx={{
                background: '#FF9458',
                borderRadius: '4px',
                color: '#ffffff',
                fontSize: '10px',
                fontWeight: 700,
                width: '138.13px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }} className={styles.boxContentStatus}>
                {profileStatus}
              </Box>
            </Box>
            <Box className={styles.boxContentTab}>
              <Box className={styles.titleContentTab}>
                {t('profile:one-thing')}
              </Box>
              <Box className={styles.contentTab}>
                {profileOneThing}
              </Box>
            </Box>
            <Box className={styles.boxContentTab}>
              <Box className={styles.titleContentTab}>
                {t('profile:self-introduction')}
              </Box>
              <Box className={styles.contentTab}>
                {profileSelfIntroduction}
              </Box>
            </Box>
            <Box className={styles.boxContentTab}>
              <Box className={styles.titleContentTab}>
                {t('profile:occupation')}
              </Box>
              <Box className={styles.contentTab}>
                {profileOccupation}
              </Box>
            </Box>
            <Box className={styles.boxContentTab}>
              <Box className={styles.titleContentTab}>
                {t('profile:position')}
              </Box>
              <Box className={styles.contentTab}>
                {profilePosition}
              </Box>
            </Box>
            <Box className={styles.boxContentTab}>
              <Box className={styles.titleContentTab}>
                {t('profile:employment-status')}
              </Box>
              <Box className={styles.contentTab}>
                {profileEmploymentStatus}
              </Box>
            </Box>
            <Box className={styles.boxContentTab}>
              <Box className={styles.titleContentTab}>
                {t('profile:introduce-yourself')}
              </Box>
              <Box className={styles.contentTab}>
                {profileIntroduceYourself}
              </Box>
            </Box>
            <Box className={styles.boxContentTab}>
              <Box className={styles.titleContentTab}>
                {t('profile:address')}
              </Box>
              <Box className={styles.contentTab}>
                {profileAddress}
              </Box>
            </Box>
            <Box className={styles.boxContentTab}>
              <Box className={styles.titleContentTab}>
                {t('profile:tag')}
              </Box>
              <Box className={styles.contentTab}>
                <Box sx={{display: 'flex'}}>
                  {profileTag?.map((item) => <Box sx={{
                    background: '#F4FDFF',
                    fontSize: '12px',
                    mr: 1,
                    px: 1,
                  }}>{item}</Box>)}
                </Box>
                <Box sx={{display: 'flex', mt: 1}}>
                  {profileTag?.map((item) => <Box sx={{
                    background: '#F4FDFF',
                    fontSize: '12px',
                    mr: 1,
                    px: 1,
                  }}>{item}</Box>)}
                </Box>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            スキル
          </TabPanel>
        </Box>
      </Box>
    </Box>
  )
};
export default ProfileSkillComponent;
