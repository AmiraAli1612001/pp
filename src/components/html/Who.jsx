import { Box } from '@mui/material';
import { t } from 'i18next';
import React from 'react';
import { Link } from 'react-router-dom';

const Who = () => {
    return (
        <Box className="who">
        <h1>{t("who-h1")}</h1>
        <p>
          {t("who-p-1")}
        </p>
        <p>          {t("who-p-2")}</p>
        <p>
        {t("who-p-3")}

        </p>
        <p>          {t("who-p-4")}
</p>

        <Link to="/login">{t("create-account")}</Link>
      </Box>
    );
}

export default Who;
