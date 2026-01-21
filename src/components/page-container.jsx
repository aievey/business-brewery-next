const PageContainer = ({ children }) => {
  return (
    <div className="mr-auto ml-auto flex w-12/13 max-w-380 flex-col items-center space-y-4 md:w-8/10 md:space-y-10 lg:w-7/10">
      {children}
    </div>
  );
};

export default PageContainer;
