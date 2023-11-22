"use client";
import { LessonCard } from "@/components/lessons/lesson_card_unlocked";
import { LessonPlaceholder } from "@/components/lessons/lesson_placeholder";
import { Navbar } from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Box } from "lucide-react";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <LessonCard title="intro to python" />
      <LessonCard title="ur mum gay" />
      <LessonCard title="ur mum also gay" />
    </main>
  );
}
