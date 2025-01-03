const Education = () => {
  return (
    <aside>
      <div className="flex flex-col gap-4">
        {/* Bsc */}
        <div className="flex items-start gap-[20px]">
          <div className="flex flex-col items-center">
            <p className="w-[20px] h-[20px] flex items-center justify-center bg-gray-200 rounded-full text-gray-500 text-[1rem]"></p>
            <div className="w-[2px] h-[50px] bg-gray-300 mt-[10px]"></div>
          </div>

          <div>
            <h1 className="text-[1.1rem] text-gray-700">
              B.sc. in computer science & Engineering
            </h1>
            <p className="text-[0.9rem] text-gray-500">
              Daffodil International University, Dhaka
            </p>
            <p className="text-[0.9rem] text-gray-500">2020-2023</p>
          </div>
        </div>
        {/* Bsc End */}
        {/* HSC */}
        <div className="flex items-start gap-[20px]">
          <div className="flex flex-col items-center">
            <p className="w-[20px] h-[20px] flex items-center justify-center bg-gray-200 rounded-full text-gray-500 text-[1rem]"></p>
            <div className="w-[2px] h-[50px] bg-gray-300 mt-[10px]"></div>
          </div>

          <div>
            <h1 className="text-[1.1rem] text-gray-700">HSC</h1>
            <p className="text-[0.9rem] text-gray-500">
              New gov. degree college, Rajshahi
            </p>
            <p className="text-[0.9rem] text-gray-500">2019</p>
          </div>
        </div>
        {/* HSC End */}
      </div>
    </aside>
  );
};

export default Education;
