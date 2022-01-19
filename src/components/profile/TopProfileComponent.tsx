import {Box, Button, Avatar} from "@mui/material";
import React from "react";
import {useTranslation} from "next-i18next";

import styles from 'src/components/profile/top.profile.module.scss';

interface TopProfileComponentProps {
  review: number;
  cumulativMatching: number;
  participatingCommunity: number;
  lastLogin: number;
}

const TopProfileComponent: React.SFC<TopProfileComponentProps> = (
  {review, cumulativMatching, participatingCommunity, lastLogin}
) => {
  const {t} = useTranslation();
  return (
    <Box>
      <Box className={styles.topProfilePC}>
        <Box sx={{
          textAlign: 'right',
          mb: 1
        }}>
          <Button sx={{
            background: '#ffffff',
            color: '#989EA8',
            boxShadow: 'unset',
            border: '1px solid #989EA8',
            width: '240px',
            height: '40px',
          }}>
            <Box sx={{
              display: 'flex',
              textAlign: 'center'
            }}>
              <img src="/assets/images/icon/ic_link.png" alt="" width='20' height='22'/>
              <Box sx={{
                ml: 2,
              }}>{t('profile:url')}</Box>
            </Box>
          </Button>
        </Box>
        <Box sx={{
          background: '#ffffff',
          px: '80px',
          pt: '45px',
          pb: '78px',
        }}>
          <Box sx={{
            display: 'flex',
            borderBottom: '2px solid #E6E6E6',
            pb: '20px'
          }}>
            <Box sx={{
              textAlign: 'center',
              color: '#D8D8D8',
              fontWeight: 700,
              fontSize: '14px'
            }}>
              <Avatar alt="Remy Sharp" src="/assets/images/profile/avatar.png" sx={{
                width: '160px',
                height: '160px',
              }}/>
              <Box>
                {t('profile:login')}：{lastLogin} {t('profile:minutes-ago')}
              </Box>
            </Box>
            <Box sx={{
              ml: '20px'
            }}>
              <Box sx={{
                display: 'flex',
                alignItems: 'center'
              }}>
                <Box sx={{
                  fontSize: '32px',
                  fontWeight: 700,
                  color: '#1A2944'
                }}>佐藤 太郎</Box>
                <Box sx={{
                  ml: '24px',
                }}>
                  <img src="/assets/images/icon/ic_twitter.png" alt="ic_twitter"/>
                  <img src="/assets/images/icon/ic_facebook.png" alt="ic_facebook" className={styles.icFacebook}/>
                  <img src="/assets/images/icon/ic_github.png" alt="ic_git"/>
                </Box>
              </Box>
              <Box sx={{
                mt: '13px',
                display: 'flex',
              }}>
                <Button sx={{
                  boxShadow: 'unset',
                  width: '280px',
                  height: '48px',
                  background: 'linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)',
                  borderRadius: '12px',
                  color: '#ffffff',
                  mr: '9.3px'
                }}>
                  <Box>{t('profile:character-analysis')}</Box>
                </Button>
                <Box>
                  <img src="/assets/images/icon/ic_question_mark.png" alt="ic_question_mark"/>
                </Box>
              </Box>
              <Box sx={{
                display: 'flex',
                mt: '30px',
              }}>
                <Box className={styles.boxInfoProfile}>
                  <Box>
                    {t('profile:review')}
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <Box sx={{
                      fontSize: '32px',
                      fontWeight: 700
                    }}>{review}</Box> <Box>件</Box>
                  </Box>
                </Box>
                <Box sx={{
                  mx: '20px'
                }} className={styles.boxInfoProfile}>
                  <Box>
                    {t('profile:cumulativ-matching')}
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <Box sx={{
                      fontSize: '32px',
                      fontWeight: 700
                    }}>{cumulativMatching}</Box> <Box>人</Box>
                  </Box>
                </Box>
                <Box className={styles.boxInfoProfile}>
                  <Box>
                    {t('profile:participating-community')}
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <Box sx={{
                      fontSize: '32px',
                      fontWeight: 700
                    }}>{participatingCommunity}</Box> <Box>つ</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={styles.topProfileMB}>
        <Box sx={{
          background: '#ffffff',
          border: '1px solid rgba(196, 196, 196, 0.4)',
          boxSizing: 'border-box',
          borderRadius: '12px',
          mt: '68px'
        }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: '-40px',
            position: 'relative'
          }}>
            <Avatar alt="Remy Sharp" src="/assets/images/profile/avatar.png" sx={{
              width: '80px',
              height: '80px',
            }}/>
            <Box sx={{
              position: 'absolute',
              top: 51,
              right: 10
            }}>
              <img src="/assets/images/icon/ic_heart.png" alt="ic_heart"/>
            </Box>
          </Box>
          <Box sx={{
            color: '#1A2944',
            lineHeight: '23px',
            fontWeight: 700,
            textAlign: 'center',
            mt: 2
          }}>
            佐藤 太郎
          </Box>
          <Box sx={{
            color: '#C4C4C4',
            lineHeight: '14px',
            fontWeight: 700,
            textAlign: 'center',
            mt: 1,
            mb: 2,
            fontSize: '10px'
          }}>
            {lastLogin}{t('profile:minutes-ago')}
          </Box>

          <Box sx={{
            borderTop: '1px solid rgba(196, 196, 196, 0.4)',
            display: 'flex',
            height: '64px'
          }}>
            <Box sx={{
              width: '33%',
              mt: '12px',
              textAlign: 'center'
            }}>
              <Box sx={{
                color: '#1A2944',
                lineheight: '12px',
                fontSize: '8px'
              }}>
                {t('profile:review')}
              </Box>
              <Box sx={{
                color: '#1A2944',
                lineheight: '29px',
                fontSize: '20px',
                fontWeight: 500
              }}>
                {review}
              </Box>
            </Box>
            <Box sx={{
              width: '34%',
              borderLeft: '1px solid rgba(196, 196, 196, 0.4)',
              borderRight: '1px solid rgba(196, 196, 196, 0.4)',
              mt: '12px',
              textAlign: 'center'
            }}>
              <Box sx={{
                color: '#1A2944',
                lineheight: '12px',
                fontSize: '8px'
              }}>
                {t('profile:cumulativ-matching')}
              </Box>
              <Box sx={{
                color: '#1A2944',
                lineheight: '29px',
                fontSize: '20px',
                fontWeight: 500
              }}>
                {cumulativMatching}
              </Box>
            </Box>
            <Box sx={{
              width: '33%',
              mt: '12px',
              textAlign: 'center'
            }}>
              <Box sx={{
                color: '#1A2944',
                lineheight: '12px',
                fontSize: '8px'
              }}>
                {t('profile:participating-community')}
              </Box>
              <Box sx={{
                color: '#1A2944',
                lineheight: '29px',
                fontSize: '20px',
                fontWeight: 500
              }}>
                {participatingCommunity}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{
          background: '#ffffff',
          mx: '20px',
          border: '1px solid rgba(196, 196, 196, 0.4)',
          boxSizing: 'border-box',
          borderRadius: '12px',
          mt: '11px'
        }}>
          <Box sx={{
            display: 'flex',
            height: '40px'
          }}>
            <Box sx={{
              width: '33%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img src="/assets/images/icon/ic_twitter.png" alt="ic_twitter" width='17.5'/>
            </Box>
            <Box sx={{
              width: '34%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderLeft: '1px solid rgba(196, 196, 196, 0.4)',
              borderRight: '1px solid rgba(196, 196, 196, 0.4)',
            }}>
              <img src="/assets/images/icon/ic_facebook.png" alt="ic_facebook" width='17.5'/>
            </Box>
            <Box sx={{
              width: '33%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img src="/assets/images/icon/ic_github.png" alt="ic_git" width='17.5'/>
            </Box>
          </Box>
        </Box>
        <Box sx={{
          mt: '20px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Button sx={{
            boxShadow: 'unset',
            width: '252px',
            height: '36px',
            background: 'linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)',
            borderRadius: '12px',
            color: '#ffffff',
            mr: '7.67px',
            fontWeight: 700,
            fontSize: '14px',
          }}>
            <Box>{t('profile:character-analysis')}</Box>
          </Button>
          <Box>
            <img src="/assets/images/icon/ic_question_mark.png" alt="ic_question_mark" width='16.7'/>
          </Box>
        </Box>

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: '40px'
        }}>
          <Button sx={{
            background: '#ffffff',
            color: '#989EA8',
            boxShadow: 'unset',
            border: '1px solid #989EA8',
            width: '240px',
            height: '40px',
          }}>
            <Box sx={{
              display: 'flex',
              textAlign: 'center'
            }}>
              <img src="/assets/images/icon/ic_link.png" alt="" width='20' height='22'/>
              <Box sx={{
                ml: 2,
              }}>{t('profile:url')}</Box>
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  )
};
export default TopProfileComponent;
