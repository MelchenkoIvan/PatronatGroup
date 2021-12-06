import React, { FC } from "react";
import { useTranslation } from "react-i18next";

const TranslateHoc = (Component: FC) => {
  const TranslateComponent: FC = (props: any) => {
    const { t } = useTranslation();
    return <Component {...props} translate={t} />;
  };
  return TranslateComponent;
};
export default TranslateHoc;