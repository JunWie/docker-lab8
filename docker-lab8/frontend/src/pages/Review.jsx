import React, { useState } from 'react';

const TestimonialData = [
  { id: 1, name: "Victor", text: "Lorem ipsum dolor sit amet consectetur..." },
  { id: 2, name: "Satya Nadella", text: "Lorem ipsum dolor sit amet consectetur..." },
  { id: 3, name: "Virat Kohli", text: "Lorem ipsum dolor sit amet consectetur..." },
  { id: 5, name: "Sachin Tendulkar", text: "Lorem ipsum dolor sit amet consectetur..." },
];

export default function ListOfReviews() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', text: '', rating: 0 });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRating = (value) => {
    setForm({ ...form, rating: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Review submitted:', form);
    setShowModal(false);
    setForm({ name: '', text: '', rating: 0 });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

      {/* <table className="table-auto w-full mb-4 border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">Name</th>
            <th className="border px-4 py-2 text-left">Review</th>
          </tr>
        </thead>
        <tbody>
          {TestimonialData.map(({ id, name, text }) => (
            <tr key={id}>
              <td className="border px-4 py-2">{name}</td>
              <td className="border px-4 py-2">{text}</td>
            </tr>
          ))}
        </tbody>
      </table> */}

       <ul className="space-y-4 mb-4">
        {TestimonialData.map(({ id, name, text }) => (
          <li key={id} className="border p-4 rounded shadow-sm bg-white dark:bg-gray-800">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-gray-600 dark:text-gray-300">{text}</p>
          </li>
        ))}
      </ul>

      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded"
        onClick={() => setShowModal(true)}
      >
        Add Review
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Submit a Review</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border px-3 py-2 rounded"
                required
              />
              <textarea
                name="text"
                value={form.text}
                onChange={handleChange}
                placeholder="Your Review"
                className="w-full border px-3 py-2 rounded"
                required
              />
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => handleRating(star)}
                    className={`cursor-pointer text-xl ${
                      form.rating >= star ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:underline"
                >
                  Cancel
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
