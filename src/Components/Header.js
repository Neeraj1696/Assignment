import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import Button from "../Components/Button";
import MovieIcon from "@mui/icons-material/Movie";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header_heading">
        <h2>Live Spaces</h2>
      </div>
      <div className="header_discription">
        <span>
          <CheckCircleIcon /> All NFTs on Cyber either belong to or were minted
          by their space creator.
        </span>
      </div>
      <div className="tranding_buttons">
        <Button Icon="🔥" title="24 Trending" />
        <Button Icon={<MovieIcon />} title="Latest shows" />
        <Button Icon={<PersonalVideoIcon />} title="Most Popular" />
        <Button Icon={"💎"} title="In Genesis" />
        <Button Icon={"🛕"} title="In Temple" />
        <Button Icon={"🌪️"} title="In Void" />
        <Button Icon={"🦍"} title="#BAYC" />
      </div>
    </div>
  );
}

export default Header;
