export default function NewsCard({ message }) {
  return (
    <div
      className="mt-[1vw] ml-[30vw] px-[15px] py-[10px] max-w-[50vw] flex px-50px text-white"
      style={{
        borderRadius: "0px 0px 150px 0px",
        backgroundColor: "rgba(0, 0, 0, 0.50)",
      }}
    >
      <div>{message}</div>
    </div>
  );
}
