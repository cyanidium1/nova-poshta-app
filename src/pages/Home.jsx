import History from "../components/History/History";
import SearchForm from "../components/SearchForm/SearchForm";

export const Home = () => {
  return (
    <main className="sm:flex">
      <SearchForm />
      <History />
    </main>
  );
};
