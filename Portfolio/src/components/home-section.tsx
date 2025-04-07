const HomeSection = () => (
  <div id="home" className="mainPage pageSection grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-blue-500">
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <div className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <h1 className="text-4xl sm:text-6xl font-bold justify-self-center">
          John Nasitem
        </h1>
        <h2 className="text-2xl sm:text-4xl font-semibold">
          Computer Engineering Technologist
        </h2>
      </div>
    </main>
  </div>
);
  
export default HomeSection;