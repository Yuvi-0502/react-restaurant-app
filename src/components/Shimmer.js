const Shimmer = () => {
  return (
    <div className="restaurent-list" data-testid="shimmer">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div className="shimmer-card"  key={index}></div> 
        ))}
    </div>
  );
};

export default Shimmer;
