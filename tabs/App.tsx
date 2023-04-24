import React  from 'react';

function AppPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h2>App Tab</h2>
      <p>This tab is only available on the App page.</p>
    </div>
  );
}
 
export default AppPage;