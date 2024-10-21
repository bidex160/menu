import { useState } from "react";
import items from "./data";
import Title from "./Title";
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menus, setMenus] = useState(items);

  const filterItems = (category) => {
    if (category === "all") {
      setMenus(items);
      return;
    }
    setMenus(items.filter((menu) => menu.category === category));
  };
  return (
    <main>
      <section className="menu"></section>
      <Title text={"Our Menu"} />
      <Categories categories={allCategories} filterItems={filterItems} />
      <Menu items={menus} />
    </main>
  );
}

export default App;
