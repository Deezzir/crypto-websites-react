export const Block2 = () => {
  return (
    <div className="min-h-screen w-full flex relative justify-center items-center">
      <div className="flex flex-col w-full h-full max-w-screen-2xl space-y-24 py-12">
        <div className="flex flex-col space-y-12 lg:flex-row justify-between items-center px-8">
          <img
            src="/block2/plane1.png"
            alt="Plane"
            className="w-full lg:w-1/3 rounded-xl"
          />
          <img
            src="/block2/plane2.png"
            alt="Plane"
            className="w-full lg:w-1/3 rounded-xl"
          />
        </div>
        <div>
          <h3 className="text-3xl lg:text-5xl px-24">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            error perspiciatis labore accusantium provident
          </h3>
        </div>
        <div className="flex flex-col space-y-16 lg:flex-row justify-between items-center px-8">
          <img
            src="/block2/plane3.png"
            alt="Plane"
            className="w-full lg:w-1/3 rounded-xl"
          />
          <img
            src="/block2/plane4.png"
            alt="Plane"
            className="w-full lg:w-1/3 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};
