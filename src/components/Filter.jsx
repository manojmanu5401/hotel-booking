import React from "react";
import { Disclosure } from "@headlessui/react";

export default function Filter(props) {
    const filterOptions = props.options
    const  handleMethod = props.handleMethod
    const title = props.title
  return (
    <>
      {
        <Disclosure
          as="div"
          defaultOpen="true"
          className="border-b border-gray-200 py-6"
        >
          {({ open }) => (
            <>
              <h3 className="-my-3 flow-root">
                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">
                    {title}
                  </span>
                  <span className="ml-6 flex items-center">
                    {open ? (
                      <span className="material-symbols-outlined h-5 w-5">
                        remove
                      </span>
                    ) : (
                      <span className="material-symbols-outlined h-5 w-5">
                        add
                      </span>
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className="pt-6">
                <div className="space-y-4">
                  {filterOptions.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        id={`filter-${optionIdx}-${option.value}`}
                        name={`${option.lable}[]`}
                        defaultValue={option.value}
                        type="checkbox"
                        onChange={(e)=>handleMethod(e)}
                        defaultChecked={option.checked}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={`filter-${optionIdx}-${option.value}`}
                        className="ml-3 text-sm text-gray-600"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      }
      </>
  );
}
