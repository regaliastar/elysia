import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return <p>tabsssssss</p>;
};

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
