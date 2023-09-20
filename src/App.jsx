import { Panel } from "./CardInfo";
import "../css/App.css";
import "../css/CardInfo.css";

const infoUsers = [
  {
    nameUser: "Victor Everardo Viera Herandez",
    porfilePicture: "everviera12",
    gender: "Masculino",
    birthday: "27 de noviembre de 2000",
  },
  {
    nameUser: "John Doe",
    porfilePicture: "johndoe",
    gender: "Masculino",
    birthday: "15 de junio de 1990",
  },
  {
    nameUser: "Alice Smith",
    porfilePicture: "alicesmith",
    gender: "Femenino",
    birthday: "10 de marzo de 1985",
  },
  {
    nameUser: "Bob Johnson",
    porfilePicture: "bobjohnson",
    gender: "Masculino",
    birthday: "25 de septiembre de 1995",
  },
  {
    nameUser: "Emily Smith",
    porfilePicture: "emilysmith",
    gender: "Femenino",
    birthday: "12 de abril de 1992",
  },
  {
    nameUser: "Michael Johnson",
    porfilePicture: "michaeljohnson",
    gender: "Masculino",
    birthday: "8 de julio de 1988",
  },
];

export function App() {
  return (
    <div className="App">
      <div className="flex-container">
        {infoUsers.map(
          ({ nameUser, porfilePicture, gender, birthday }, index) => (
            <Panel
              key={index}
              nameUser={nameUser}
              porfilePicture={porfilePicture}
              gender={gender}
              birthday={birthday}
            />
          )
        )}
      </div>
    </div>
  );
}
