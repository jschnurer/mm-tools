export default function classList(...classNames: (string | undefined)[]): string {
  return classNames
    .filter(x => x !== undefined
      && x.trim() !== "")
    .join(" ");
}