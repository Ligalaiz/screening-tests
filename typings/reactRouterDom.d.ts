declare module 'react-router' {
  interface LinkProps
    extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
    to: any;
  }
}
