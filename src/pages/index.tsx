import Scene1 from "@/components/scenes/Scene1";
import Scene2 from "@/components/scenes/Scene2";
import Scene3 from "@/components/scenes/Scene3";

export default function Home() {
  return (
    <main className="max-w-md mx-auto bg-global">
      <Scene1 />
      <Scene2 />
      <Scene3 />
    </main>
  );
}
