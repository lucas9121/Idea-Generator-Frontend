import logo from './logo.svg';
import './App.css';
import IdeaGenerationPage from './pages/IdeaGeneratorPage';

function App() {
  return (
    <div className="">
      <div className='h-screen bg-slate-900 font-sans overflow-hidden relative text-white'>
        <div className='flex flex-col flex-wrap h-full'>
          <IdeaGenerationPage />
        </div>
      </div>
    </div>
  );
}

export default App;
