import Space from "./three/Space";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => ([
  {
    charset: "utf-8",
    title: "Beliefs",
    description: "Core values",
    viewport: "width=device-width,initial-scale=1",
    keywords: "Jesus, God, Heaven, relationship, love, grace"
  }
]);

export default function Beliefs() {
  return (
    <>
      <Space withEarth />
      <ol className="list-decimal list-inside space-y-2">
        <li>Jesus died for your sins.</li>
        <li>He loves you, and wants to have a relationship with you.</li>
        <li>The foot of the cross is level ground.</li>
        <li>The God of the Bible is the only true God.</li>
        <li>You cannot earn His love, or earn your way into Heaven.</li>
        <li>His grace is freely given. You need not work for it.</li>
        <li>He wants to have a personal relationship with you.</li>
      </ol>
    </>
  );
}
