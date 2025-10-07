import Link from 'next/link';

type AnchorLinkProps = {
  children: any;
  type: string;
  linkTo?: string;
  className?: string;
  openInNewTab?: boolean;
};

const AnchorLink = ({
  children,
  type,
  linkTo,
  className,
  openInNewTab
}: AnchorLinkProps) => {
  return (
    <Link
      href={linkTo || '#'}
      className={`anchor-link anchor-link--${type} ${className}`}
      target={openInNewTab ? '_blank' : '_self'}
    >
      {children}
    </Link>
  );
};

AnchorLink.defaultProps = {
  linkTo: '#',
  className: ''
};

export default AnchorLink;
