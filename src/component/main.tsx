import btnPlus from "../img/plus.svg";

export const Main = () => {
  return (
    <main>
      <div className="list1 list">
        <div className="namelist">Backlog</div>
        <div className="content">
          <div className="item">Login page – performance issues</div>
          <div className="item">Sprint bugfix</div>
          <div className="item">Login page – performance issues</div>
          <div className="item">Sprint bugfix</div>
          <div className="item">Login page – performance issues</div>
          <div className="item">Sprint bugfix</div>
          <div className="item">Login page – performance issues</div>
          <div className="item">Sprint bugfix</div>
          <div className="item">Login page – performance issues</div>
          <div className="item">Sprint bugfix</div>
          <div className="item">Login page – performance issues</div>
          <div className="item">Sprint bugfix</div>
          <div className="item">Login page – performance issues</div>
          <div className="item">Sprint bugfix</div>
        </div>
        <div className="btn-add">
          <button disabled>
            <img src={btnPlus} alt="plus" />
            Add card
          </button>
        </div>
      </div>
      <div className="list2 list">
        <div className="namelist">Ready</div>
        <div className="content"></div>
        <div className="btn-add">
          <button>
            <img src={btnPlus} alt="plus" />
            Add card
          </button>
        </div>
      </div>
      <div className="list3 list">
        <div className="namelist">In Progress</div>
        <div className="content"></div>
        <div className="btn-add">
          <button>
            <img src={btnPlus} alt="plus" />
            Add card
          </button>
        </div>
      </div>
      <div className="list4 list">
        <div className="namelist">Finished</div>
        <div className="content"></div>
        <div className="btn-add">
          <button>
            <img src={btnPlus} alt="plus" />
            Add card
          </button>
        </div>
      </div>
    </main>
  );
};
