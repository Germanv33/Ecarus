import "./mapPageStyle.sass";
import TopHeader from "../../components/header/header";
import { observer } from "mobx-react-lite";
import FirstLoginModal from "../../components/login/LoginModals";
import CollectionPoints from "./CollectionPoints/CollectionPoints";

const MapPage = () => {
  return (
    <main className="full_container">
      <TopHeader />
      <FirstLoginModal />
      <CollectionPoints />
    </main>
  );
};

export default observer(MapPage);
