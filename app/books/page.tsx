function page({}) {
  return (
    <div className="h-screen w-full flex justify-around items-center">
      {/* This is the books page */}
      <div className="w-1/2 h-4/5 rounded-lg bg-red-500">
        <iframe
          src="https://drive.google.com/file/d/1ZxIZ8r2OxCiPjSSWsciqHZHstvwSIPeW/preview"
          className="w-full h-full"
          allow="autoplay"
        ></iframe>
        ;
      </div>
    </div>
  );
}

export default page;
