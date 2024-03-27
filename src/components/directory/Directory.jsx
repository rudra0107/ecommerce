import React from "react";
import "./Directory.scss";
import MenuItem from "../menu-item/MenuItem";
import { selectDirectorySections } from "../../redux-rtk/features/directory/directorySelector";
import { useSelector } from "react-redux";

const Directory = () => {
  const sections = useSelector(selectDirectorySections);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
  );
};

export default Directory;
