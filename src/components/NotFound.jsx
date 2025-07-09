// ./components/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-n-7 text-center px-6">
      <h1 className="text-6xl font-bold text-color-1 mb-4">404</h1>
      <h2 className="text-2xl text-n-1 mb-2">Страница не найдена</h2>
      <p className="text-n-3 mb-6">
        Извините, запрашиваемая страница не существует или была перемещена.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-color-1 text-n-7 font-semibold rounded-full hover:opacity-90 transition"
      >
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFound;
