import { ReactSVG } from 'react-svg'

import './App.css';

function App() {
  return (
    <div className="App">
      SVG
        <ReactSVG
            beforeInjection={(svg) => {
                console.log('beforeInjection', svg)
            }}
            fallback={() => <span>Error!</span>}
            loading={() => <span>Loading</span>}
            onClick={(e) => {
                console.log('wrapper onClick', e.target, e.currentTarget)
                e.target.setAttribute('fill', '#00ff00')
            }}
            src="image.svg"
        />
    </div>
  );
}

export default App;
