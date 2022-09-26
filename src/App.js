import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="flex flex-col font-body pt-6 lg:pt-9 justify-start items-center w-screen max-w-[1440px] min-h-screen h-auto overflow-y-auto mx-auto overflow-x-hidden scroll-smooth">
      <div className="flex flex-col items-center w-11/12 2lg:w-5/6">
        <header className="w-full">
          <Header />
        </header>
        <main className="w-full">
          <Main />
        </main>
        <footer className="w-full">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
