import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

export default function QueueForm({ onAdd }) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !service.trim()) return;

    onAdd({ name, service });
    setName("");
    setService("");
  };

  return (
    <form className="queue-form" onSubmit={handleSubmit}>
      <h2>Add to Queue</h2>

      <div className="form-group">
        <input
          placeholder="Customer name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </div>

      <div className="form-group">
        <select value={service} onChange={(e) => setService(e.target.value)}>
          <option value="">Select Service</option>
          <option value="account-opening">Account Opening</option>
          <option value="loan-inquiry">Loan Inquiry</option>
          <option value="technical-support">Technical Support</option>
          <option value="billing">Billing</option>
          <option value="general-consultation">General Consultation</option>
        </select>
      </div>

      <button type="submit">
        <FaUserPlus /> Add Customer
      </button>
    </form>
  );
}
