import React from "react";
import NewLink from "./NewLink";

const Links = ({ results, setResults }) => {
  return (
    <div className="flex flex-col w-full text-sm xxs:text-base md:text-lg lg:text-xl gap-y-6 sm:gap-y-4">
      {results.map((result) => (
        <NewLink
          key={result.id}
          results={results}
          setResults={setResults}
          result={result}
        />
      ))}
    </div>
  );
};

export default Links;
