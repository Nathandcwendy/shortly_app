import React from "react";
import ArticleSection from "./ArticleSection";
import Input from "./Input";
import { useState, useRef, useEffect } from "react";
import Links from "./Links";

const MainBottom = ({ size }) => {
  const [newLink, setNewLink] = useState("");
  const [url, setUrl] = useState(null);
  const [results, setResults] = useState([]);
  const [inputStatus, setInputStatus] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const inputRef = useRef();

  const API_URL = "https://api.shrtco.de/v2/shorten?url=";

  const shortenLink = async () => {
    if (url) {
      try {
        const response = await fetch(`${API_URL}${url}`);
        const { ok, result } = await response.json();
        if (ok) {
          const longLink = result.original_link;
          const minLink = result.full_short_link;
          const sortedResults = results;
          sortedResults.sort((a, b) => a.id - b.id);
          const id = results.length
            ? sortedResults[sortedResults.length - 1].id + 1
            : 1;
          const newResult = { id, longLink, minLink, copied: false };
          setResults([...results, newResult]);
          setFetchError("");
          setNewLink("");
          inputRef.current.classList.remove("focus:border-green-300");
        } else {
          throw new Error("Sorry, could not shorten this url");
        }
      } catch (err) {
        if (err.message.toLowerCase().includes("failed")) {
          setFetchError("Please Connect To Internet");
          setNewLink("");
          inputRef.current.classList.remove("focus:border-green-300");
        } else {
          setFetchError("Could Not Shorten This Link");
          setNewLink("");
          inputRef.current.classList.remove("focus:border-green-300");
        }
      }
    } else {
      setFetchError("Link is not valid");
    }
  };

  useEffect(() => {
    const getInputStatus = () => {
      if (document.activeElement === inputRef.current && newLink === "") {
        return true;
      } else {
        return false;
      }
    };
    setInputStatus(getInputStatus());
  }, [newLink]);

  const handleCopy = async (e, id) => {
    const copiedResult = results.find((result) => result.id === id);
    await navigator.clipboard.writeText(copiedResult.minLink).then(() => {
      const newResults = results.map((result) =>
        result.id === id ? { ...result, copied: !result.copied } : result
      );
      setResults(newResults);
    });
    const revertCopied = (e, id) => {
      const revertedResults = results.map((result) =>
        result.id === id ? { ...result, copied: false } : result
      );
      setResults(revertedResults);
    };
    setTimeout(() => {
      revertCopied(e, id);
    }, 2000);
  };

  const testUrl = (e) => {
    const testRegex =
      /^(h?t?t?p?s?:?\/?\/?)?(w{0,3})?\.?(([\da-z.-]+)\.([a-z.]{2,6})([/\w .\-?+@\d&=$]*)*\/?)$/;
    const testInput = (e) => {
      const testResult = testRegex.test(e.target.value);
      const getResult = function (e) {
        if (testResult) {
          const result = e.target.value;
          inputRef.current.classList.add("focus:border-green-300");
          setUrl(result);
          setFetchError("");
        } else {
          inputRef.current.classList.remove("focus:border-green-300");
          setUrl(null);
        }
      };
      getResult(e);
    };
    testInput(e);
  };

  return (
    <>
      <div className="relative transform -translate-y-[72px] xs:-translate-y-[92px] xxs:-translate-y-[84px] md:-translate-y-[88px] flex flex-col items-center w-11/12 2lg:w-5/6 gap-y-6 sm:gap-y-8">
        <Input
          newLink={newLink}
          setNewLink={setNewLink}
          inputRef={inputRef}
          inputStatus={inputStatus}
          shortenLink={shortenLink}
          fetchError={fetchError}
          testUrl={testUrl}
        />
        <Links results={results} handleCopy={handleCopy} size={size} />
      </div>
      <div className="flex items-center w-11/12 2lg:w-5/6">
        <ArticleSection />
      </div>
    </>
  );
};

export default MainBottom;
