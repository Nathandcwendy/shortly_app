import React from "react";
import ArticleSection from "./ArticleSection";
import Input from "./Input";
import { useState, useRef, useEffect } from "react";
import Links from "./Links";

const MainBottom = () => {
  const [newLink, setNewLink] = useState("");
  const [url, setUrl] = useState(null);
  const [results, setResults] = useState([]);
  const [inputFocus, setInputFocus] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const inputRef = useRef();

  const API_URL = "https://api.shrtco.de/v2/shorten?url=";

  const shortenLink = async () => {
    if (url) {
      setNewLink("Loading...");
      inputRef.current.classList.add("focus:border-green-300");
      inputRef.current.classList.remove("focus:border-Red");
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
          setUrl(null);
          inputRef.current.classList.add("focus:border-Red");
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
    // const getInputStatus = () => {
    //   if (document.activeElement === inputRef.current && newLink === "") {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // };
    const testUrl = () => {
      const testRegex =
        /^(h?t?t?p?s?:?\/?\/?)?(w{0,3})?\.?(([\da-z.-]+)\.([a-z.]{2,6})([-._!"`'#%&,:;<>=@{}~$()*+/\\?[\]^|\w\d]*)*\/?)$/;

      const testInput = () => {
        if (newLink !== "" || inputRef.current.value !== "") {
          const testResult = testRegex.test(newLink.trim());
          const getResult = function () {
            if (testResult) {
              inputRef.current.classList.add("focus:border-green-300");
              setUrl(newLink);
              setFetchError("");
            } else {
              inputRef.current.classList.remove("focus:border-green-300");
              setUrl(null);
            }
          };
          getResult();
        }
      };
      testInput();
    };
    testUrl();
  }, [newLink]);

  return (
    <>
      <div className="relative transform -translate-y-[72px] xs:-translate-y-[92px] xxs:-translate-y-[84px] md:-translate-y-[88px] flex flex-col items-center w-11/12 2lg:w-5/6 gap-y-6 sm:gap-y-8">
        <Input
          newLink={newLink}
          setNewLink={setNewLink}
          inputRef={inputRef}
          inputFOcus={inputFocus}
          setInputFocus={setInputFocus}
          shortenLink={shortenLink}
          fetchError={fetchError}
        />
        <Links results={results} setResults={setResults} />
      </div>
      <div className="flex items-center w-11/12 2lg:w-5/6">
        <ArticleSection />
      </div>
    </>
  );
};

export default MainBottom;
