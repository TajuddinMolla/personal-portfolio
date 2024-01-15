'use client'
import PortfolioItem from "@/components/PortfolioItem";
import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Code, Eye, File, User } from "lucide-react";


export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false)
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
          setIsModalOpen={setIsModalOpen}
        />
        <PortfolioItem
          img={
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          title="Portfolio"
          category="UI/UX"
          setIsModalOpen={setIsModalOpen}

        />
        <PortfolioItem
          img={
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          title="Portfolio"
          category="UI/UX"
          setIsModalOpen={setIsModalOpen}

        />
        <PortfolioItem
          img={
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          title="Portfolio"
          category="UI/UX"
          setIsModalOpen={setIsModalOpen}

        />
        <PortfolioItem
          img={
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          title="Portfolio"
          category="UI/UX"
          setIsModalOpen={setIsModalOpen}

        />
        <PortfolioItem
          img={
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          title="Portfolio"
          category="UI/UX"
          setIsModalOpen={setIsModalOpen}

        />
      </div>

      <Dialog open={isModalOpen} onOpenChange={() => setIsModalOpen(false)}>
        <DialogContent className="max-w-4xl 2xl:max-w-6xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-[#776B5D] text-2xl text-center">Ui/Ux Developer</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            <div className="text-[#776B5D] flex gap-x-4 items-center">
              <div className="flex gap-x-1 items-center">
                <File className="w-5 h-5" />
                <p>Project:</p>
              </div>
              <p>Website</p>
            </div>
            <div className="text-[#776B5D] flex gap-x-4 items-center">
              <div className="flex gap-x-1 items-center">
                <User className="w-5 h-5" />
                <p>Client:</p>
              </div>
              <p>Demo</p>
            </div>
            <div className="text-[#776B5D] flex gap-x-4 items-center">
              <div className="flex gap-x-1 items-center">
                <Code className="w-5 h-5" />
                <p>Langages:</p>
              </div>
              <p>NextJs, ReactJs, Tailwind CSS</p>
            </div>
            <div className="text-[#776B5D] flex gap-x-4 items-center">
              <div className="flex gap-x-1 items-center">
                <Eye className="w-5 h-5" />
                <p>Preview:</p>
              </div>
              <p>demo.com</p>
            </div>
          </div>
          <div className="text-[#776B5D] mb-4">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!

            </p>
          </div>
          <div className="max-h-[400px]">
            <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="max-h-[400px] rounded-[20px] h-full w-full object-cover object-center" />
          </div>
        </DialogContent>
      </Dialog>

    </div>
  );
}
