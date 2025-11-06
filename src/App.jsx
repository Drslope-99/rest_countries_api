import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import useFetch from "./hook/useFetch";
import CountryDetailsPage from "./pages/CountryDetailsPage";

export default function App() {
  const { isLoading, countries } = useFetch();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage data={countries} isLoading={isLoading} />}
        />
        <Route
          path="/:countryCode"
          element={<CountryDetailsPage countries={countries} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
