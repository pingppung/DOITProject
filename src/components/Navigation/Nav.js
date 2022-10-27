import './Nav.css';
import NavItem from './NavItem';
function Nav() {
  return (
    <div className="Nav">
      <p className="title">DoIT Proejct</p>
      <div className="NavItems">
        <NavItem value="홈"></NavItem>
        <NavItem value="프로젝트"></NavItem>
        <NavItem value="강의"></NavItem>
        <NavItem value="채팅"></NavItem>
        <NavItem value="고객지원"></NavItem>
        <NavItem value="설정"></NavItem>
      </div>
    </div>
  );
}

export default Nav;
