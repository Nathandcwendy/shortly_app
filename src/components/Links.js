import React from "react";

const Links = ({ results, handleCopy, size }) => {
  return (
    <div className="flex flex-col w-full text-sm xxs:text-base md:text-lg gap-y-6 ">
      {results.map((result) => (
        <div
          key={result.id}
          className="bg-white md:py-4 md:px-6 w-full flex flex-col md:flex-row items-center justify-between rounded-lg"
        >
          <p className="border-b-2 md:border-none w-full py-4 md:py-0 px-4 xsm:px-6 md:px-0">
            {size.width >= 1280
              ? result.longLink.length <= 50
                ? result.longLink
                : `${result.longLink.slice(0, 50)}...`
              : size.width < 1280 && size.width >= 830
              ? result.longLink.length <= 30
                ? result.longLink
                : `${result.longLink.slice(0, 30)}...`
              : size.width < 830 && size.width >= 768
              ? result.longLink.length <= 25
                ? result.longLink
                : `${result.longLink.slice(0, 25)}...`
              : size.width < 768 && size.width >= 450
              ? result.longLink.length <= 50
                ? result.longLink
                : `${result.longLink.slice(0, 50)}...`
              : size.width < 450 && size.width >= 375
              ? result.longLink.length <= 36
                ? result.longLink
                : `${result.longLink.slice(0, 36)}...`
              : size.width < 375 && size.width >= 320
              ? result.longLink.length <= 27
                ? result.longLink
                : `${result.longLink.slice(0, 27)}...`
              : size.width < 320
              ? result.longLink.length <= 25
                ? result.longLink
                : `${result.longLink.slice(0, 25)}...`
              : null}
          </p>
          <div className="flex w-full flex-col md:flex-row md:w-auto gap-x-6 justify-start gap-y-4 md:gap-y-0 items-start md:items-center py-4 md:py-0 px-4 xsm:px-6 md:px-0">
            <a className="text-Cyan" href={result.minLink}>
              {result.minLink}
            </a>
            {result.copied ? (
              <button className="py-2 w-full md:w-[105px] text-center bg-DarkViolet text-white rounded-md md:rounded-lg hover:cursor-pointer">
                Copied!
              </button>
            ) : (
              <button
                onClick={(e) => {
                  handleCopy(e, result.id);
                }}
                className="py-2 w-full md:w-[105px] text-center bg-Cyan text-white rounded-md md:rounded-lg hover:bg-Cyan-hover hover:cursor-pointer"
              >
                Copy
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Links;