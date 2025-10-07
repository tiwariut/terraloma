'use client';

import { useEffect, useRef } from 'react';

type ParsedHTMLProps = {
  content: string;
  parentClassName?: string;
};

const ParsedHTML = ({ content, parentClassName }: ParsedHTMLProps) => {
  const parentRef: any = useRef('');

  useEffect(() => {
    parentRef.current.innerHTML = content;
  }, [content]);

  return (
    <div className={parentClassName} ref={parentRef}>
      {content}
    </div>
  );
};

ParsedHTML.defaultProps = {
  parentClassName: ''
};

export default ParsedHTML;
