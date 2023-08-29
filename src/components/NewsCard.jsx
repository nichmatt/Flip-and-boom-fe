export default function NewsCard({ title, newsId }) {
  return (
    <div
      className="mt-[1vw] ml-[30vw] px-[25px] py-[15px] max-w-[50vw] flex px-50px text-white z-20 relative"
      style={{
        borderRadius: "0px 0px 150px 0px",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
      }}
    >
      <div>{title}</div>
    </div>
  );
}
