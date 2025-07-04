type Props = {
  setSidebar: (value: boolean) => void;
};

function HeaderAdministrador({ setSidebar }: Props) {
  return (
    <div className="bg-black text-white h-[10vh] w-full flex items-center justify-between px-6">
      <button
        onClick={() => setSidebar(true)}
        className=" text-white px-3 py-1 rounded-md shadow-lg"
      >
        ☰
      </button>
    </div>
  );
}

export default HeaderAdministrador;
