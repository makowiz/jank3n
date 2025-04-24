import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>/example</h2>
      <Image
        src="/janken.png"
        alt="jank3n.fun"
        width={200}
        height={200}
        priority
      />
    </div>
  );
}
