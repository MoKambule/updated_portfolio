const FloatingBlobs = () => {
  return (
<>
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-700 rounded-full opacity-30 animate-blob"></div>
  <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-800 rounded-full opacity-40 animate-blob animation-delay-2000"></div>
  <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-600 rounded-full opacity-20 animate-blob animation-delay-4000"></div>
</>

  );
};

export default FloatingBlobs;
