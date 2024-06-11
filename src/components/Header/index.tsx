import { SnakeIcon } from "../../assets/svg";

const Header = () => {
  return (
    <header className="flex py-8 items-center justify-center gap-x-4 w-full bg-blue-100 text-6xl font-bold">
      <h1 className="">Snake Game</h1>
      <SnakeIcon height={64} width={64} />
    </header>
  );
};

export default Header;
