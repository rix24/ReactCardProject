import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import React from "react";
import "@testing-library/jest-dom";
import ContentCardDisplayPage from "../ContentCardDisplayPage";
import TestimonialCardDisplayPage from "../TestimonialCardDisplayPage";

describe("HomePage", () => {
  it("renders the home page content and navigation buttons", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByText("Welcome to the Home Page")).toBeInTheDocument();
    expect(
      screen.getByText("Go to Content Card Display Page")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Go to Testimonial Card Display Page")
    ).toBeInTheDocument();
    expect(screen.getByText("Go to Countries Page")).toBeInTheDocument();
  });

  it("navigates to Content Card Display Page when button is clicked", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/contentCardDisplayPage"
            element={<ContentCardDisplayPage />}
          />
        </Routes>
      </MemoryRouter>
    );

    const user = userEvent.setup();
    await user.click(
      screen.getByRole("button", { name: /Go to Content Card Display Page/i })
    );

    expect(
      screen.getByText("Top 5 Living Room Inspirations")
    ).toBeInTheDocument();
  });

  it("navigates to Testimonial Card Display Page when button is clicked", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/testimonialCardDisplayPage"
            element={<TestimonialCardDisplayPage />}
          />
        </Routes>
      </MemoryRouter>
    );

    const user = userEvent.setup();
    await user.click(
      screen.getByRole("button", {
        name: /Go to Testimonial Card Display Page/i,
      })
    );

    expect(screen.getByText("@sarahdole")).toBeInTheDocument();
  });
});
