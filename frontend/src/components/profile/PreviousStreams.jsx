import StreamCard from "./StreamCard";

const PreviousStreams = ({ streams }) => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {streams.map((s) => (
        <StreamCard key={s.id} stream={s} />
      ))}
    </div>
  );
};

export default PreviousStreams;
