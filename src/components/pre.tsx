export function Pre(data: unknown) {
  const formattedData = JSON.stringify(data, null, 2);
  return <pre>{formattedData}</pre>;
}
