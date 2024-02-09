import React, { FC, MouseEventHandler } from "react";

const DownloadButton: FC = () => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    const pdfUrl = "../../files/CV-BettellaFacundo-EN.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "BettellaFacundo-CV-EN.pdf";
    link.click();
  };

  return (
    <button
      onClick={handleClick}
      className="px-1 py-1 mr-6 w-full sm:w-fit rounded  bg-gradient-to-br from-customGreen via-customTeal to-customLightGreen hover:bg-slate-800 text-white mt-4"
    >
      <span className="px-6 block bg-customBlack hover:bg-customGrey rounded">
        Download CV
      </span>
    </button>
  );
};

export default DownloadButton;
