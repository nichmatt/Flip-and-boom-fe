import NewsCard from "../components/NewsCard";

export default function NewsPage() {
  return (
    <section
      className="min-h-[100vh] w-[100vw] "
      style={{
        marginTop: "30px",
      }}
    >
      <div style={{ display: "flex" }}>
        <div
          className="h-[50px] w-[120px] mt-[6vw] ml-[30Vw] bg-[rgba(0,0,0,0.50)]"
          style={{
            borderRadius: "0px 0px 0px 150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              fontWeight: "600",
              fontStyle: "italic",
              color: "#fff",
            }}
          >
            NEWS
          </p>
        </div>
      </div>

      <NewsCard message="selamat anda berhasil mendapatkan 10.000" />
    </section>
  );
}
