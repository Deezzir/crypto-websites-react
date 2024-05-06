import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex flex-row gap-8 p-8">
      <Link to="/">Home</Link>
      <Link to="/airdrop">Airdrop</Link>
    </div>
  );
};
