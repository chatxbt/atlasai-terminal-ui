interface CaretProps {
  left?: number;
  top?: number;
}

export function Caret({ left = 0, top = 0 }: CaretProps) {
  return (
    <div
      className="absolute w-[1ch] h-[1.2em] bg-white animate-caret"
      style={{ left: `${left}px`, top: `${top}px` }}
    />
  );
}
