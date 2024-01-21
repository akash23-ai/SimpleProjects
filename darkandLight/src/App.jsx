import { useState, useEffect } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);


  const onChangeBtn = () => {
    themeMode === "light" ? setThemeMode("dark") : setThemeMode("light");
  };

  return (
    <>
      <div className="h-screen w-full p-4 flex flex-col items-center justify-center">
        <div className="bg-red-500 w-1/2 relative  p-12 h-1/2 mb-4 dark:bg-blue-500">
          <h1 className="text-3xl font-semibold text-zinc-800 dark:text-white">whats up guys</h1>
          <h2 className="text-lg font-medium text-zinc-800 dark:text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex quibusdam et fuga dolorum officiis delectus nihil. Dicta eaque consectetur molestiae necessitatibus ipsum!
          </h2>
        </div>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={onChangeBtn}
            checked={themeMode === "light"}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900">
            Toggle Theme
          </span>
        </label>
      </div>
    </>
  );
}

export default App;
