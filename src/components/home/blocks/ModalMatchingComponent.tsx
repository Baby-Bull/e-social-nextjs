import { Avatar, Box, Button, Grid, Modal } from "@mui/material";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";

import ButtonComponent from "src/components/common/elements/ButtonComponent";
import { Field } from "src/components/common/Form/_Field";
import styles from "src/components/home/home.module.scss";

interface IModalMatchingComponentProps {
  open: boolean;
  setOpen: Function;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 640,
  boxShadow: 24,
  borderRadius: "12px",
  p: 5,
  pb: 4,
  maxWidth: "90%",
};

const optionsPurposes = [
  {
    value: 1,
    label: "選択してください",
  },
  {
    value: 2,
    label: "選択してください 2",
  },
];

const ModalMatchingComponent: React.SFC<IModalMatchingComponentProps> = ({ open, setOpen }) => {
  const { t } = useTranslation();

  const handleClose = () => setOpen(false);

  const [data] = useState({
    avatar: "/assets/images/home_page/ic_avatar_modal.svg",
    name: "佐藤太郎さんへのマッチングリクエスト",
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className={classNames(styles.modalMatchingRequest, "gth-modal")}>
        <Button className="icon-close" onClick={handleClose}>
          <img src="/assets/images/home_page/ic_close_modal.svg" alt="close-modal" />
        </Button>
        <div className="title-modal" id="modal-modal-title">
          <Avatar alt="avatar" src={data.avatar} sx={{ width: 52, height: 52 }} />
          <span className="name">{data.name}</span>
        </div>

        <form>
          <Field
            id="purpose"
            required
            label={t("home:modal-matching.purpose")}
            placeholder={t("home:modal-matching.purpose-placeholder")}
            editor="dropdown"
            value={1}
            options={optionsPurposes}
          />

          <Field
            id="frequency"
            required
            label={t("home:modal-matching.frequency")}
            placeholder={t("home:modal-matching.frequency-placeholder")}
            editor="textbox"
          />

          <Field
            id="message"
            label={t("home:modal-matching.message")}
            placeholder={t("home:modal-matching.message-placeholder")}
            editor="textarea"
          />

          <Grid container>
            <Grid xs={12} sx={{ mt: 4, textAlign: "center" }}>
              <ButtonComponent mode="gradient" fullWidth>
                {t("home:modal-matching.button")}
              </ButtonComponent>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};

export default ModalMatchingComponent;
