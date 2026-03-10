import content from './content.html?raw';

function App() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

export default App;
