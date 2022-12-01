import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const QueryStringExample = () => {
  const [searchTerm] = useSearchParams();

  const place = searchTerm.get("place");
  const type = searchTerm.get("type");

  place && console.log(place, type);

  return <div></div>;
};

export default QueryStringExample;
