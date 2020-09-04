import React, { useEffect } from 'react';

interface IPageTitleProps {
  title: string,
}

const PageTitle: React.FC<IPageTitleProps> = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <h2 className="page-title">
      {title}
    </h2>
  )
};

export default PageTitle;
