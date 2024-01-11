import PortfolioItem from "@/components/PortfolioItem";
import React from "react";

export default function Portfolio() {
  return (
    <div className="text-[#776B5D]">
      <h2 className="text-3xl font-semibold mb-8 text-[#776B5D]">Portfolio</h2>

      <div className="flex gap-8 justify-end items-center">
        <span>All</span>
        <span>Web Design</span>
        <span>Ui/UX</span>
        <span>Logo Design</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 mt-8">
        <PortfolioItem
          img={
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          title="Portfolio"
          category="UI/UX"
        />
        <PortfolioItem
          img={
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          title="Portfolio"
          category="UI/UX"
        />
        <PortfolioItem
          img={
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          title="Portfolio"
          category="UI/UX"
        />
        <PortfolioItem
          img={
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          title="Portfolio"
          category="UI/UX"
        />
        <PortfolioItem
          img={
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          title="Portfolio"
          category="UI/UX"
        />
        <PortfolioItem
          img={
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          title="Portfolio"
          category="UI/UX"
        />
      </div>
    </div>
  );
}
