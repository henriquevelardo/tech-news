import Header from "./components/Header/Header";
import ArticleList from "./components/ArticleList/ArticleList";
import Form from "./components/Form/Form";
import { useState } from "react";


const App = () => {

  const [user, setUser] = useState()
  const hasUser = Boolean(user)

  console.log(user)

  return (
    <div className="h-screen">
      <Header user={user} />
      {hasUser && <ArticleList />}
      {hasUser || <Form onSubmit={setUser} />}
    </div>
  );
};

export default App;
