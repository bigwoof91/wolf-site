import { Link, LinkProps } from 'components/Link';
import styled from '@emotion/styled';

const StyledNavItem = styled.div`
  margin-right: 2rem;
`;

export type NavItemProps = LinkProps;

const NavItem: React.FC<NavItemProps> = (props) => {
  return (
    <StyledNavItem>
      <Link {...props} />
    </StyledNavItem>
  );
};

export { NavItem };
