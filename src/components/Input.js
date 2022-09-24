import React from "react";

const Input = ({
  newLink,
  setNewLink,
  inputStatus,
  setInputStatus,
  inputRef,
  shortenLink,
  fetchError,
  testUrl,
}) => {
  return (
    <div className="relative flex flex-col space-between bg-mob-shortenImg md:bg-desk-shortenImg bg-DarkViolet bg-[left_6rem_bottom_2rem] md:bg-center bg-bg-once bg-no-repeat py-4 xxs:py-6 md:py-14 px-4 xxs:px-8 md:px-12 lg:px-16 rounded-xl w-full text-sm xxs:text-base md:text-lg">
      <form
        className="flex flex-grow flex-col md:flex-row gap-y-4 md:gap-y-0 md:gap-x-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-grow flex-col gap-y-1">
          <input
            ref={inputRef}
            id="input-link"
            type="text"
            className="flex-grow py-3 xs:py-4 px-4 xsm:px-6 rounded-md md:rounded-xl outline-none focus:placeholder:text-Red focus:placeholder:opacity-50 border-2 border-transparent focus:border-2  focus:border-Red"
            placeholder="Shorten a link here..."
            value={newLink}
            onChange={(e) => {
              setNewLink(e.target.value);
              testUrl(e);
            }}
            // onBlur={(e) => {
            //   if (newLink === "") {
            //     setInputStatus(false);
            //   }
            // }}
            autoComplete="off"
            spellCheck="false"
            required
          />
          {inputStatus && fetchError === "" ? (
            <i className="md:absolute md:bottom-6 md:left-16 text-Red text-xs xxs:text-sm md:text-base">
              Please add a link
            </i>
          ) : null}
          {fetchError !== "" ? (
            <i className="md:absolute md:bottom-6 md:left-16 text-Red text-sm xxs:text-base md:text-lg">
              {fetchError}
            </i>
          ) : null}
          <label
            htmlFor="input-link"
            className="absolute top-0 -left-[99999px]"
          >
            Input Link Here
          </label>
        </div>

        <button
          onClick={shortenLink}
          className="py-3 xs:py-4 md:py-2 px-10 bg-Cyan w-full md:w-max text-white rounded-md md:rounded-lg hover:bg-Cyan-hover hover:cursor-pointer"
        >
          Shorten it!
        </button>
      </form>
    </div>
  );
};

export default Input;
