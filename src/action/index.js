import React from "react";

export const increase = () => {
  return {
    type: "increment"
  };
};

export const decrement = () => {
  return {
    type: "decrement"
  };
};