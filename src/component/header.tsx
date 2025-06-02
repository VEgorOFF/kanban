import userAvatar from "../img/user-avatar.png";
import arrowDown from "../img/arrow-down.png";

export const Header = () => {
  const logo = "Awesome Kanban Board";

  return (
    <header>
      <div className="logo">{logo}</div>
      <div className="user-menu">
        <div className="user-avatar">
          <img src={userAvatar} alt="user-avatar" />
        </div>
        <div className="arrow">
          <img src={arrowDown} alt="arrow-down" />
        </div>
      </div>
    </header>
  );
};
