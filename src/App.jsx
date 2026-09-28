import { useState } from "react";
import "./App.css";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";

export default function App() {
  const [queue, setQueue] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const addToQueue = (customer) => {
    setQueue([
      ...queue,
      {
        ...customer,
        id: Date.now(),
        status: "waiting",
      },
    ]);
  };

  const updateStatus = (id, newStatus) => {
    setQueue(
      queue.map((customer) =>
        customer.id === id ? { ...customer, status: newStatus } : customer
      )
    );
  };

  const removeFromQueue = (id) => {
    setQueue(queue.filter((customer) => customer.id !== id));
  };

  const clearQueue = () => {
    setQueue([]);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <header>
        <h1>Queue Management Application</h1>
        <p>Manage your customers efficiently</p>
        <p>Total Customers: {queue.length}</p>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <button className="clear-btn" onClick={clearQueue}>
          Clear All
        </button>
      </header>
      <main>
        <QueueForm onAdd={addToQueue} />
        <QueueDisplay
          queue={queue}
          onUpdateStatus={updateStatus}
          onRemove={removeFromQueue}
        />
      </main>
    </div>
  );
}
