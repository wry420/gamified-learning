import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Lock } from "lucide-react";

export function LessonCard(props) {
  return (
    <Card className=" border-8 border-border w-5/12 mx-auto mt-5">
      <CardHeader>
        <CardTitle className="text-center font-bold tracking-wide">
          {props.title}
        </CardTitle>
      </CardHeader>

      <Card className="lesson-card">
        <a className="block flex-grow p-5 hover:" href="">
          Lesson 1 Link //add link to lesson here
        </a>
        <div className="m-1 border-2 rounded-full p-4">
          {/* {if previous lesson unlocked, then available, else unavailable} */}
          <Lock />
        </div>
      </Card>

      <Card className="lesson-card">
        <a className="block flex-grow p-5 hover:" href="">
          Lesson 2 Link //add link to lesson here
        </a>
        <div className="m-1 border-2 rounded-full p-4">
          {/* {if previous lesson unlocked, then available, else unavailable} */}
          <Lock />
        </div>
      </Card>

      <Card className="lesson-card">
        <a className="block flex-grow p-5 hover:" href="">
          Lesson 3 Link //add link to lesson here
        </a>
        <div className="m-1 border-2 rounded-full p-4">
          {/* {if previous lesson unlocked, then available, else unavailable} */}
          <Lock />
        </div>
      </Card>
    </Card>
  );
}
