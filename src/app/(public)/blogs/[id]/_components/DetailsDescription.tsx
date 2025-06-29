export default function DetailsDescription({ data }: { data: string }) {
  return (
    <div className="editor">
      <div
        dangerouslySetInnerHTML={{
          __html: data,
        }}
        className="break-words"
      ></div>
    </div>
  );
}
