import { BtnPlus } from "./main/btnPlus";

const dataMock = [
  {
    title: "backlog",
    issues: [
      {
        id: "12345",
        name: "Sprint bugfix",
        description: "‘Fix all the bugs’",
      },
    ],
  },
  // и так далее
];

const name = dataMock[0].issues[0].name;

console.log(name);

export const Main = () => {
  return (
    <main>
      <div className="list1 list">
        <div className="namelist">Backlog</div>
        <div className="content">
          <div className="item">{dataMock[0].issues[0].name}</div>
          {/* <div className="item">Sprint bugfix</div>
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
          <div className="item">Sprint bugfix</div> */}
        </div>
        <div className="btn-add">
          <BtnPlus />
        </div>
      </div>
      <div className="list2 list">
        <div className="namelist">Ready</div>
        <div className="content"></div>
<<<<<<< HEAD
        <div className="btn-add">{/* <BtnPlus /> */}</div>
=======
        <div className="btn-add">
          <BtnPlus />
        </div>
>>>>>>> 24cfef71f5f651d2c01728297902fefe854ec05a
      </div>
      <div className="list3 list">
        <div className="namelist">In Progress</div>
        <div className="content"></div>
<<<<<<< HEAD
        <div className="btn-add">{/* <BtnPlus /> */}</div>
=======
        <div className="btn-add">
          <BtnPlus />
        </div>
>>>>>>> 24cfef71f5f651d2c01728297902fefe854ec05a
      </div>
      <div className="list4 list">
        <div className="namelist">Finished</div>
        <div className="content"></div>
<<<<<<< HEAD
        <div className="btn-add">{/* <BtnPlus /> */}</div>
=======
        <div className="btn-add">
          <BtnPlus />
        </div>
>>>>>>> 24cfef71f5f651d2c01728297902fefe854ec05a
      </div>
    </main>
  );
};
