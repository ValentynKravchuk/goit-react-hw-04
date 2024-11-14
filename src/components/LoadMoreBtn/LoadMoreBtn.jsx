import React from "react";
import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => (
  <button className="LoadMoreBtn" onClick={onClick}>
    Load more
  </button>
);

export default LoadMoreBtn;