import React, { Suspense, lazy } from "react";

const VueWidget = lazy(() =>
  import("vueApp/VueWidget").catch((err) => {
    console.error("Failed to load Vue Remote:", err);
    return { default: () => <ErrorComponent name="Vue Remote" port="3001" /> };
  })
);

const ReactWidget = lazy(() =>
  import("reactApp/ReactWidget").catch((err) => {
    console.error("Failed to load React Remote:", err);
    return {
      default: () => <ErrorComponent name="React Remote" port="3002" />,
    };
  })
);

function ErrorComponent({ name, port }) {
  return (
    <div
      style={{
        background: "#fee",
        border: "2px solid #c33",
        padding: "15px",
        borderRadius: "8px",
        color: "#c33",
      }}
    >
      <p>
        <strong>⚠️ {name} không khả dụng</strong>
      </p>
      <p style={{ fontSize: "14px", margin: "10px 0" }}>Hãy chạy {name}:</p>
      <code
        style={{
          background: "#333",
          color: "#0f0",
          padding: "8px 12px",
          borderRadius: "4px",
          display: "block",
          fontFamily: "monospace",
        }}
      >
        cd {name.toLowerCase().replace(" ", "-")} && npm start
      </code>
      <p style={{ fontSize: "12px", marginTop: "10px", opacity: 0.8 }}>
        Sau đó refresh trang này (http://localhost:{port})
      </p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#61dafb" }}>🏠 Host App (React)</h1>
      <p>This is the main host application built with React.</p>

      <hr style={{ margin: "30px 0" }} />

      <div
        style={{
          border: "2px solid #42b983",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h2>Vue Remote Component</h2>
        <Suspense fallback={<div>Loading Vue Component...</div>}>
          <VueWidget />
        </Suspense>
      </div>

      <div style={{ border: "2px solid #61dafb", padding: "20px" }}>
        <h2>React Remote Component</h2>
        <Suspense fallback={<div>Loading React Component...</div>}>
          <ReactWidget />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
