interface FateFrameProps {
  children: React.ReactNode;
}

export default function FateFrame({ children }: FateFrameProps) {
  //w-[78.3%] -bottom-[170%]
  return (
    <article className="absolute bg-fate border-[3px] top-[92.5%] border-black z-10 w-[78.3%] left-1/2 -translate-x-1/2">
      <div className="relative h-full px-[2.28%] py-[2.23%] w-full">
        <div className="w-full z-10 absolute left-0 top-[1.23%] border-[1px] border-border" />
        <div className="w-full z-10 absolute left-0 bottom-[1.23%] border-[1px] border-border" />
        <div className="h-full z-10 absolute top-0 left-[2.28%] border-[1px] border-border" />
        <div className="h-full z-10 absolute top-0 right-[2.28%] border-[1px] border-border" />
        <div className="w-full flex flex-col items-cente">{children}</div>
      </div>
    </article>
  );
}
