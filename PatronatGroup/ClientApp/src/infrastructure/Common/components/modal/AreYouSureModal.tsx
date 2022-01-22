import { t } from "i18next";
import React, { FC } from "react";
import { labels } from "../../i18n/translationsServices";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

interface Props {
  handleClose: () => void;
  show: boolean;
  onSubmit: (values: any) => void;
  content:string;
}

const AreYouSureModal: FC<Props> = ({ handleClose,show, onSubmit,content }) => {

  return (
    <Modal
      basic
      onClose={handleClose}
      open={show}
      size="fullscreen"
      style={{ textAlignLast: "center"}}
      centered
    >
      <Header icon>
        <Icon name="delete calendar" />
        {t(labels.areYouSure)}
      </Header>
      <Modal.Content>
        <p>
            {content}
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" inverted onClick={handleClose}>
          <Icon name="remove" /> {t(labels.no)}
        </Button>
        <Button color="green" inverted onClick={onSubmit}>
          <Icon name="checkmark" /> {t(labels.yes)}
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default AreYouSureModal;
