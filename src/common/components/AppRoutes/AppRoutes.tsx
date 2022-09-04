import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound, Tracks, Artist } from "../../../features";

import { ARTIST } from "../../utils/constants";

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path={encodeURI("/")} element={<Tracks />} />

      <Route
        path={encodeURI(`${ARTIST.toLowerCase()}/:artistId`)}
        element={<Artist />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
