"use client";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { Drawer } from "@/components/navbar/drawer";
import { useState } from "react";

export default function Home() {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = (event) => {
    setIsChecked(event.target.checked);
    console.log("Checkbox is checked:", event.target.checked);
  };

  return (
    <main className="">
      <nav className="flex flex-row-reverse top-0 p-3 bg-muted">
        <ModeToggle className="flex-shrink" />

        <text className="mx-auto text-3xl font-semibold">Learn</text>
        <Drawer handleCheck={handleCheck} />
      </nav>

      <div>hi</div>
    </main>
  );
}
