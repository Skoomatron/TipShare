import {RecoilRoot} from 'recoil';
import React from "react";
import Main from "./Components/Main.jsx";

const App = () => {

    return (
      <RecoilRoot>
        <div>
          <Main/>
        </div>
      </RecoilRoot>

    );

}

export default App;
