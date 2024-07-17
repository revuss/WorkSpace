import React from "react";

interface HeaderProps {
  title: string;
  description: string;
}
const FormHeader: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-semibold dark:text-gray-200 text-gray-900">
          {title}
        </h1>
        <p className="mt-2 dark:text-gray-100 text-gray-500">{description}</p>
      </div>
    </>
  );
};

export default FormHeader;
