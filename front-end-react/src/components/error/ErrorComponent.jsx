export default function ErrorComponent({ error }) {
  return (
    <>{error && <p className="text-sm text-red-600">{error?.message}</p>}</>
  );
}
