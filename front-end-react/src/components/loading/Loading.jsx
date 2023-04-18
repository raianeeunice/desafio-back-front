import React from "react";

const Loading = ({ loading, children, loadingStyle }) => {
  return !!loading ? (
    <div
      className={`rounded-full bg-slate-500 animate-ping w-[20px] h-[20px] ${loadingStyle}`}
    ></div>
  ) : (
    children
  );
};

export default Loading;
