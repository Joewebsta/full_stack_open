import React from "react";

const NewNumberForm = () => {
  return (
    <>
      <section className="bg-lime-200 p-5">
        <form>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name:
            </label>

            <input
              className="block w-60 rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600"
              id="name"
              name="name"
              placeholder="Enter a name"
              type="text"
            />
          </div>
          <div>
            <button
              className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-3 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              type="submit"
            >
              Add number
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default NewNumberForm;
