import { useEffect } from "react";

export default function PopupModal({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-white rounded-2xl w-[90%] max-w-lg px-6 py-8 relative transform transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-white hover:text-black text-2xl bg-[#C7151A] px-2"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-3xl font-bold mb-4 "><span className="text-[#C7151A]">Hey!</span> Let's Connect!</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full border border-gray-300 rounded-lg p-3"
          />

          <select className="w-full border border-gray-300 rounded-lg p-3">
            <option>Select Service</option>
            <option>Web Design</option>
            <option>Branding</option>
            <option>3D Design</option>
            <option>Animation</option>
          </select>

          <textarea
            placeholder="Message"
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-3"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#C7151A] text-white py-3 rounded-lg hover:bg-black transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
