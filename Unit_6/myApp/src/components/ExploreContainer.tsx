import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>CSC 262 App Example</strong>
      <p>CSC 262 App Example<a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">CSC 262 App Example</a></p>
    </div>
  );
};

export default ExploreContainer;
