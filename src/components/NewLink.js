import { useState } from "react";

const NewLink = ({ results, result }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async (e, id) => {
    const copiedResult = results.find((result) => result.id === id);
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(copiedResult.minLink).then(() => {
        setCopied(true);
      });
    } else {
      const minLinkNode = e.target.parentElement.firstChild;
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(minLinkNode);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("copy");
      selection.removeAllRanges();
      setCopied(true);
    }

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  return (
    <div className="bg-white md:py-4 md:px-6 w-full flex flex-col md:flex-row items-center justify-between rounded-lg sm:rounded-md">
      <p className="border-b-2 md:border-none w-full py-4 md:py-0 px-5 xsm:px-6 md:pr-4 overflow-hidden text-ellipsis whitespace-nowrap md:px-0">
        {result.longLink}
      </p>
      <div className="flex w-full flex-col md:flex-row md:w-auto gap-x-6 justify-start gap-y-4 md:gap-y-0 items-start md:items-center py-4 md:py-0 px-4 xsm:px-6 md:px-0">
        <a
          className="text-Cyan overflow-hidden text-ellipsis whitespace-nowrap"
          href={result.minLink}
          target="_blank"
          rel="noreferrer"
        >
          {result.minLink}
        </a>
        {copied ? (
          <button className="py-2 w-full md:w-[100px] text-center bg-DarkViolet text-white rounded-md md:rounded-lg hover:cursor-pointer text-xs xxs:text-sm md:text-base">
            Copied!
          </button>
        ) : (
          <button
            onClick={(e) => {
              handleCopy(e, result.id);
            }}
            className="py-2 w-full md:w-[100px] text-center bg-Cyan text-white rounded-md md:rounded-lg hover:bg-Cyan-hover hover:cursor-pointer text-xs xxs:text-sm md:text-base"
          >
            Copy
          </button>
        )}
      </div>
    </div>
  );
};

export default NewLink;
