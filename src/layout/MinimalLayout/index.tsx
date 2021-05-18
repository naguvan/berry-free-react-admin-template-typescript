import * as React from 'react';
interface MinimalLayoutProps {
children: React.ReactNode
}
const MinimalLayout = (props: MinimalLayoutProps) => {
  return <>{props.children}</>;
};
export default MinimalLayout;
