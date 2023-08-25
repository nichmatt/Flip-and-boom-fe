export default function LeaderBoardPage() {
  return (
    <>
      <section
        className="min-h-[100vh] w-[100vw] "
        style={{
          marginTop: "30px",
          background:
            "linear-gradient(180deg, #251D3A 0%, #323569 99.99%, rgba(37, 29, 58, 0.00) 100%)",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            className="h-[50px] w-[120px] mt-[6vw] ml-[60vw] bg-[rgba(0,0,0,0.50)] hover:bg-[rgba(2,255,247,0.5)] duration-300"
            style={{
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#2a2550",
                fontWeight: "600",
                fontStyle: "italic",
                color: "#fff",
              }}
            >
              EASY
            </p>
          </div>
          <div
            className="h-[50px] w-[120px] mt-[6vw]  ml-2  bg-[rgba(0,0,0,0.50)] hover:bg-[rgba(2,255,247,0.5)] duration-300"
            style={{
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#2a2550",
                fontWeight: "600",
                fontStyle: "italic",
                color: "#fff",
              }}
            >
              MEDIUM
            </p>
          </div>
          <div
            className="h-[50px] w-[120px] mt-[6vw] ml-2  bg-[rgba(0,0,0,0.50)] hover:bg-[rgba(2,255,247,0.5)] duration-300 "
            style={{
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#2a2550",
                fontWeight: "600",
                fontStyle: "italic",
                color: "#fff",
              }}
            >
              HARD
            </p>
          </div>
          <div
            className="h-[50px]  w-[120px] mt-[6vw] ml-2  bg-[rgba(0,0,0,0.50)] hover:bg-[rgba(2,255,247,0.5)] duration-300"
            style={{
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#2a2550",
                fontWeight: "600",
                fontStyle: "italic",
                color: "#fff",
              }}
            >
              IMPOSSIBLE
            </p>
          </div>
        </div>
        <div
          className=" min-h-[80vh] w-[63vw] mt-[1vw] ml-[30vw]"
          style={{
            border: "7px solid #20203E",
            borderRadius: "20px",
            backgroundColor: "rgba(0, 0, 0, 0.50)",
          }}
        >
          <table className="w-[90%] mx-auto my-[40px] ">
            <thead>
              <tr className="text-white font-normal border-b">
                <th className="pb-3">RANK</th>
                <th className="pb-3">NAME</th>
                <th className="pb-3">GAME MODE</th>
                <th className="pb-3">POINT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="mt-[80px]">1</td>
                <td>Jhon Doe</td>
                <td>IMPOSSIBLE</td>
                <td>1900</td>
              </tr>
            </tbody>
          </table>
          <div></div>
        </div>
      </section>
    </>
  );
}